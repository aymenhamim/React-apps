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
          <div className="user">
            <img src="/public/images/user.jpg" alt="User Image" />
            <p>Ann's Blog</p>
          </div>

          <nav className="categories">
            <h1 className="nav-heading">Categories</h1>
            <div className="nav-links">
              <a href="#" className="nav-link">
                General
              </a>
              <a href="#" className="nav-link">
                World
              </a>
              <a href="#" className="nav-link">
                Busniness
              </a>
              <a href="#" className="nav-link">
                Technology
              </a>
              <a href="#" className="nav-link">
                Entertainment
              </a>
              <a href="#" className="nav-link">
                Sport
              </a>
              <a href="#" className="nav-link">
                Sports
              </a>
              <a href="#" className="nav-link">
                Science
              </a>
              <a href="#" className="nav-link">
                Health
              </a>
              <a href="#" className="nav-link">
                Nation
              </a>
              <a href="#" className="nav-link">
                Bockmarks <i className="fa-regular fa-bookmark "></i>
              </a>
            </div>
          </nav>
        </div>

        <div className="news-section">
          <div className="headline">
            <img src="/public/images/tech.jpg" alt="Headline Image" />

            <h2 className="headline-title">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero,
              et. <i className="fa-regular fa-bookmark bookmark"></i>
            </h2>
          </div>

          <div className="news-grid">
            <div className="news-grid-item">
              <img src="/public/images/tech.jpg" alt="News Image" />
              <h3>
                Lorem ipsum dolor sit amet.{" "}
                <i className="fa-regular fa-bookmark bookmark"></i>
              </h3>
            </div>

            <div className="news-grid-item">
              <img src="/public/images/sports.jpg" alt="Sport Image" />
              <h3>
                Lorem ipsum dolor sit amet.{" "}
                <i className="fa-regular fa-bookmark bookmark"></i>
              </h3>
            </div>

            <div className="news-grid-item">
              <img src="/public/images/science.jpg" alt="Science Image" />
              <h3>
                Lorem ipsum dolor sit amet.{" "}
                <i className="fa-regular fa-bookmark bookmark"></i>
              </h3>
            </div>

            <div className="news-grid-item">
              <img src="/public/images/world.jpg" alt="World Image" />

              <h3>
                Lorem ipsum dolor sit amet.{" "}
                <i className="fa-regular fa-bookmark bookmark"></i>
              </h3>
            </div>

            <div className="news-grid-item">
              <img src="/public/images/health.jpg" alt="Health Image" />

              <h3>
                Lorem ipsum dolor sit amet.{" "}
                <i className="fa-regular fa-bookmark bookmark"></i>
              </h3>
            </div>

            <div className="news-grid-item">
              <img src="/public/images/nation.jpg" alt="Nation Image" />

              <h3>
                Lorem ipsum dolor sit amet.{" "}
                <i className="fa-regular fa-bookmark bookmark"></i>
              </h3>
            </div>
          </div>
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
