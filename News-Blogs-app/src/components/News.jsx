import Calender from "./Calender";
import Weather from "./Weather";
import "./News.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import NewsModal from "./NewsModal";
import Bookmark from "./Bookmark";

const categories = [
  "general",
  "world",
  "business",
  "technology",
  "entertainment",
  "sports",
  "science",
  "health",
];

function News({ onShowBlogs, blogs }) {
  const [headline, setHeadline] = useState(null);
  const [news, setNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const [bookmarks, setBookmarks] = useState([]);
  const [showBookmarkModal, setShowBookmarkModal] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // let url = `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&apikey=ff9c59b6516d2c85ef81f34be2c46319&lang=en`;

        if (searchQuery) {
          url = `https://gnews.io/api/v4/search?q=${searchQuery}&apikey=ff9c59b6516d2c85ef81f34be2c46319&lang=en`;
        }

        const response = await axios.get(url);
        const fetchedNews = response.data.articles;

        setHeadline(fetchedNews[0]);
        setNews(fetchedNews.slice(1, 7));

        const savedBookmarks =
          JSON.parse(localStorage.getItem("bookmarks")) || [];

        setBookmarks(savedBookmarks);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = (e, category) => {
    e.preventDefault();
    setSelectedCategory(category);
    setSearchQuery("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
    setSearchInput("");
  };

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setShowModal(true);
  };

  const handleBookmarkClick = (article) => {
    setBookmarks((prevBookmarks) => {
      const updatedBookmarks = prevBookmarks.find(
        (bookmark) => bookmark.title === article.title
      )
        ? prevBookmarks.filter((bookmark) => bookmark.title !== article.title)
        : [...prevBookmarks, article];

      localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));

      return updatedBookmarks;
    });
  };

  return (
    <div className="news">
      <header className="news-header">
        <h1 className="logo">News & Blogs</h1>
        <div className="search-bar">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search News..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </header>

      <div className="news-content">
        <div className="navbar">
          <div className="user" onClick={onShowBlogs}>
            <img src="/public/images/user.jpg" alt="User Image" />
            <p>Ann's Blog</p>
          </div>

          <nav className="categories">
            <h1 className="nav-heading">Categories</h1>
            <div className="nav-links">
              {categories.map((category) => (
                <a
                  href="#"
                  className={`nav-link ${
                    selectedCategory === category ? "active" : ""
                  }`}
                  key={category}
                  onClick={(e) => handleCategoryChange(e, category)}
                >
                  {category}
                </a>
              ))}

              <a
                onClick={() => setShowBookmarkModal(true)}
                href="#"
                className="nav-link"
              >
                Bockmarks <i className="fa-solid fa-bookmark "></i>
              </a>
            </div>
          </nav>
        </div>

        <div className="news-section">
          <div
            className="headline"
            onClick={() => handleArticleClick(headline)}
          >
            <img
              src={headline?.image || "/public/images/no-img.png"}
              alt={headline?.title}
            />

            <h2 className="headline-title">
              {headline?.title}{" "}
              <i
                onClick={(e) => {
                  e.stopPropagation();
                  handleBookmarkClick(headline);
                }}
                className={`${
                  bookmarks?.some(
                    (bookmark) => bookmark.title === headline.title
                  )
                    ? "fa-solid"
                    : "fa-regular"
                } fa-bookmark bookmark`}
              ></i>
            </h2>
          </div>

          <div className="news-grid">
            {news?.map((item, index) => (
              <div
                className="news-grid-item"
                key={index}
                onClick={() => handleArticleClick(item)}
              >
                <img
                  src={item.image || "/public/images/no-img.png"}
                  alt={item.titile}
                />
                <h3>
                  {item.title}{" "}
                  <i
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookmarkClick(item);
                    }}
                    className={`${
                      bookmarks.some(
                        (bookmark) => bookmark.title === item.title
                      )
                        ? "fa-solid"
                        : "fa-regular"
                    } fa-bookmark bookmark`}
                  ></i>
                </h3>
              </div>
            ))}
          </div>
        </div>

        <NewsModal
          show={showModal}
          article={selectedArticle}
          onClose={() => setShowModal(false)}
        />

        <Bookmark
          show={showBookmarkModal}
          bookmarks={bookmarks}
          onClose={() => setShowBookmarkModal(false)}
          onSelectArticle={handleArticleClick}
          onDeleteBookmark={handleBookmarkClick}
        />

        <div className="my-blogs">
          <h1 className="my-blogs-heading">My Blogs</h1>
          <div className="blog-posts">
            {blogs?.map((blog, index) => (
              <div className="blog-post" key={index}>
                <img
                  src={blog.image || "/public/images/no-img.png"}
                  alt={blog.title}
                />
                <h3>{blog.title}</h3>
                <div className="post-buttons">
                  <button className="edit-post">
                    <i className="bx bxs-edit"></i>
                  </button>
                  <button className="delete-post">
                    <i className="bx bxs-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="calender-weather">
          <Weather />
          <Calender />
        </div>
      </div>

      <footer className="news-footer">
        <p>
          <span>News & Blogs App</span>
        </p>
        <p>&copy; All Right Reserved. By Code & Create </p>
      </footer>
    </div>
  );
}

export default News;
