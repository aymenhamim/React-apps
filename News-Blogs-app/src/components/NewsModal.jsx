import "./NewsModal.css";

function NewsModal() {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button">
          <i className="fa-solid fa-xmark"></i>
        </span>
        <img
          src="/public/images/demo.jpg"
          alt="Modal Image"
          className="modal-image"
        />
        <h2 className="modal-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
          officiis.
        </h2>
        <p className="modal-source">Source: Lorem ipsum </p>
        <p className="modal-date">April 22, 2025 12:19PM</p>
        <p className="modal-content-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
          assumenda nulla expedita cupiditate veniam at aperiam nihil facilis
          reprehenderit similique? Explicabo ipsam magnam veniam tenetur, atque
          iusto distinctio ab repudiandae.
        </p>

        <a href="#" className="read-more-link">
          Read more
        </a>
      </div>
    </div>
  );
}

export default NewsModal;
