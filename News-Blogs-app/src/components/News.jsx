import Calender from "./Calender";
import Weather from "./Weather";
import "./News.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import NewsModal from "./NewsModal";

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

function News() {
  const [headline, setHeadline] = useState(null);
  const [news, setNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let url = `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&apikey=ff9c59b6516d2c85ef81f34be2c46319&lang=en`;
        // let url = "";

        if (searchQuery) {
          url = `https://gnews.io/api/v4/search?q=${searchQuery}&apikey=ff9c59b6516d2c85ef81f34be2c46319&lang=en`;
        }

        const response = await axios.get(url);
        const fetchedNews = response.data.articles;

        setHeadline(fetchedNews[0]);
        setNews(fetchedNews.slice(1, 7));
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
          <div className="user">
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

              <a href="#" className="nav-link">
                Bockmarks <i className="fa-regular fa-bookmark "></i>
              </a>
            </div>
          </nav>
        </div>

        <div className="news-section">
          <div className="headline">
            <img
              src={headline?.image || "/public/images/no-img.png"}
              alt={headline?.title}
            />

            <h2 className="headline-title">
              {headline?.title}{" "}
              <i className="fa-regular fa-bookmark bookmark"></i>
            </h2>
          </div>

          <div className="news-grid">
            {news?.map((item, index) => (
              <div className="news-grid-item" key={index}>
                <img
                  src={item.image || "/public/images/no-img.png"}
                  alt={item.titile}
                />
                <h3>
                  {item.title}{" "}
                  <i className="fa-regular fa-bookmark bookmark"></i>
                </h3>
              </div>
            ))}
          </div>
        </div>

        <NewsModal />

        <div className="my-blogs">Myblogs</div>

        <div className="calender-weather">
          <Weather />
          <Calender />
        </div>
      </div>

      <footer className="news-footer">Footer </footer>
    </div>
  );
}

export default News;
