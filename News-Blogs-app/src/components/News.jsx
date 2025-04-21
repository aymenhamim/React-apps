import Calender from "./Calender";
import Weather from "./Weather";

import "./News.css";

function News() {
  return (
    <div className="news">
      <header className="news-header">
        <h1 className="logo">News & Blogs</h1>
        <div className="search-bar">
          <form>
            <input type="text" placeholder="Search News..." />
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </header>
      <div className="news-content">
        <div className="navbar">
          <div className="user">user</div>
          <nav className="categories">Categories</nav>
        </div>

        <div className="news-section">
          <div className="headline">Headline</div>
          <div className="news-grid">News Grid</div>
        </div>

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
