import "./NewsModal.css";
import "./bookmark.css";
//
function Bookmark() {
  return (
    <div>
      <div className="modal-overlay">
        <div className="modal-content">
          <span className="close-button">
            <i className="fa-solid fa-xmark"></i>
          </span>
          <h2 className="bookmarks-heading">bookmarks-heading</h2>
          <div className="bookmarks-list">
            <div className="bookmark-item">
              <img src="/public/images/demo.jpg" alt="bookmark Image" />
              <h3>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
                animi.
              </h3>
              <span className="delete-button">
                <i className="fa-regular fa-xmark-circle"></i>
              </span>
            </div>

            <div className="bookmark-item">
              <img src="/public/images/demo.jpg" alt="bookmark Image" />
              <h3>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
                animi.
              </h3>
              <span className="delete-button">
                <i className="fa-regular fa-xmark-circle"></i>
              </span>
            </div>

            <div className="bookmark-item">
              <img src="/public/images/demo.jpg" alt="bookmark Image" />
              <h3>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
                animi.
              </h3>
              <span className="delete-button">
                <i className="fa-regular fa-xmark-circle"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookmark;
