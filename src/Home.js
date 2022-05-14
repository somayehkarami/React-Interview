import { useState, useEffect } from "react";
import BlogList from "./BlogList";

//npx json-server --watch data/db.json --port 8000

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  /*const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };*/

  //fetch the data once when the component first renders

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs") //endpoint from the json file(get request)
        //this returns to us a promise we need to use then method
        .then((res) => {
          //res is an object that has an ok property
          if (!res.ok) {
            throw Error("could not fetch the data :)");
          }
          return res.json(); //to get the data passes the jason into a javascript object(this is asynchronus it takes some times to do)
        })
        .then((data) => {
          //takes another promise
          //console.log(data);
          setBlogs(data);
          setIsPending(false);
        })
        .catch((err) => {
          //handel any network error
          console.log(err.message);
        });
    }, 1000); //after one second perform the fetch
  }, []);

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};
//null evaluates to false

export default Home;
//A Promise is in one of these states:

//pending: initial state, neither fulfilled nor rejected.
//fulfilled: meaning that the operation was completed successfully.
//rejected: meaning that the operation failed.

//If present, effect will only activate if the values in the list change.[]
//Accepts a function that contains imperative, possibly effectful code.
