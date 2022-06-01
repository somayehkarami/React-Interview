import { Link } from "react-router-dom";

//we pass the data from home to this component by using props
// pass data by making property name on <BlogList blogs={blogs} title="All Blogs" /> in home.js
const BlogList = ({ blogs, title }) => {
  //destructure from the props  to using direct of properties
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

//when we output the list using the map method each root element must have a key
//property this key react uses to keep track of each item in the dom
