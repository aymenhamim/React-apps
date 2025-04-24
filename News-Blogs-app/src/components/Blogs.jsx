import "./Blogs.css";

function Blogs() {
  return (
    <div className="blogs">
      <div className="blogs-left">
        <img src="/public/images/user.jpg" alt="User Image" />
      </div>
      <div className="blogs-right">
        {/* <button className="post-btn">Create New Post</button> */}

        <div className="blogs-right-form">
          <h1>New Post</h1>
          <form action="">
            <div className="img-upload">
              <label htmlFor="file-upload" className="file-upload">
                <i className="bx bx-upload"></i>Upload Image
              </label>
              <input type="file" id="file-upload" />
            </div>

            <input
              type="text"
              placeholder="Add Title (max 70 Characters)"
              className="title-input"
            />
            <textarea className="text-input" placeholder="Add Text"></textarea>
            <button type="submit" className="submit-btn">
              Submit Button
            </button>
          </form>
        </div>

        <button className="blogs-close-btn">
          Back <i className="bx bx-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Blogs;
