import { useState } from "react";
import "./Blogs.css";

function Blogs({ onBack, onCreateBlog }) {
  const [showForm, setShowForm] = useState(false);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleImageChange = (e) => {
    // ! Handle image upload

    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file); // ! reads the content of the file & converts it to a base64 string
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = { image, title, content };

    onCreateBlog(newBlog); // ? Pass the new blog to the parent component

    setImage(null); // ? Reset the image state
    setTitle(""); // ? Reset the title state
    setContent(""); // ? Reset the content state
  };

  return (
    <div className="blogs">
      <div className="blogs-left">
        <img src="/public/images/user.jpg" alt="User Image" />
      </div>
      <div className="blogs-right">
        {showForm ? (
          <>
            <div className="blogs-right-form">
              <h1>New Post</h1>
              <form onSubmit={handleSubmit}>
                <div className="img-upload">
                  <label htmlFor="file-upload" className="file-upload">
                    <i className="bx bx-upload"></i>Upload Image
                  </label>
                  <input
                    type="file"
                    id="file-upload"
                    onChange={handleImageChange}
                  />
                </div>

                <input
                  type="text"
                  placeholder="Add Title (max 70 Characters)"
                  className="title-input"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                  className="text-input"
                  placeholder="Add Text"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <button type="submit" className="submit-btn">
                  Submit Button
                </button>
              </form>
            </div>
          </>
        ) : (
          <button className="post-btn" onClick={() => setShowForm(true)}>
            Create New Post
          </button>
        )}

        <button className="blogs-close-btn" onClick={onBack}>
          Back <i className="bx bx-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Blogs;
