import { useState, useEffect } from "react";
import BlogList from "./BlogList";

/*const Home = () => {
  //let name = "mario";
 // const [name, setName] = useState("Somayeh");
  //const [age, setAge] = useState(25);

  const handleClick = () => {
    setName("Elsa");
    setAge(8);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};*/

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;

useEffect(() => {
  console.log("use effect");
});

//for outputing alist using map(each root element in the template  thet we return must have a key property this key property react uses to keep track of each item in the dom   )
// id must be uniqe

/*<BlogList
        blogs={blogs.filter((blog) => blog.author === "Elsa")}
        title="Elsa's blogs"
  />*/

//https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d
