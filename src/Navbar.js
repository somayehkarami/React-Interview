import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

//Link is for react router to have the ability to prevent that request to the server
//and instead just look at url or the path we donot need the server to resend back the html
