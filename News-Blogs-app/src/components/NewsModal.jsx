import "./NewsModal.css";

function NewsModal({ show, article, onClose }) {
  if (!show) {
    return null;
  }
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-background"></div>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {article && (
          <>
            <span className="close-button" onClick={onClose}>
              <i className="fa-solid fa-xmark"></i>
            </span>
            <img
              src={article?.image || "/public/images/no-img.png"}
              alt={article?.title}
              className="modal-image"
            />
            <h2 className="modal-title">{article?.title}</h2>
            <p className="modal-source">Source: {article.source.name} </p>
            <p className="modal-date">
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p className="modal-content-text">{article?.description}</p>

            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="read-more-link"
            >
              Read more
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default NewsModal;
