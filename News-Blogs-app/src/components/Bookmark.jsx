import "./NewsModal.css";
import "./bookmark.css";
//
function Bookmark({
  show,
  onClose,
  bookmarks,
  onSelectArticle,
  onDeleteBookmark,
}) {
  if (!show) {
    return null;
  }

  return (
    <div>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {bookmarks.length >= 0 ? (
            <>
              <span className="close-button" onClick={onClose}>
                <i className="fa-solid fa-xmark"></i>
              </span>
              <h2 className="bookmarks-heading">bookmarks-heading</h2>
              <div className="bookmarks-list">
                {bookmarks?.map((item, index) => (
                  <div
                    className="bookmark-item"
                    key={index}
                    onClick={() => onSelectArticle(item)}
                  >
                    <img
                      src={item.image || "/public/images/demo.jpg"}
                      alt={item.title}
                    />
                    <h3>{item?.title}</h3>
                    <span
                      className="delete-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeleteBookmark(item);
                      }}
                    >
                      <i className="fa-regular fa-xmark-circle"></i>
                    </span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <h3>Bookmarks List's Empty</h3>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Bookmark;
