import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  //set up state for storing enter data
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    //taking event object automatically
    e.preventDefault(); //that prevents the page from being refreshing
    const blog = { title, body, author }; //create a blog object is going to be saved in json file
    console.log(blog);
    //after try submit the form when making the request
    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      //secon argument
      method: "POST",
      headers: { "Content-type": "application/json" }, //telling the server the type of content (json  data)
      body: JSON.stringify(blog), //use stringify to pass the object to a json string
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      navigate("/");
    });
  };
  //react to submit event
  return (
    <div className="create">
      <h2>Add a New Blog</h2>

      {/*************Submit*************/}
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title} //associate this usestate value with value of this input
          onChange={(e) => setTitle(e.target.value)} //onChange event to update the title
          //target here is this input
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
        {/*<p>{title}</p>
        <p>{body}</p>
  <p>{author}</p>*/}
      </form>
    </div>
  );
};

export default Create;

//inside handleSubmite function the first thing is to prevent
//the default action of the form beign submitted by using e.preventDefault() method
//and it does not refresh the page

//second we need a blog object and is going to be saved in db.js file
//when we are using json server we don't have to give it an id property because later
//when we make a post request json server will automatically  add a unique id

//useHistory hook
//redirct them to a new route
