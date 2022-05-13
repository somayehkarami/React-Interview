import Navbar from "./Navbar";
import Home from "./Home";
/*function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const link = "http://www.google.com";
  //const person = { name: "yoshi", age: 20 };
  //you cannot output the object and boolean but number and string is fine.
  //output the array as a string.
  //output this as a string <p>{Math.random() * 10}</p>
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>

        {/* <p>{person}</p>

        <p>{10}</p>
        <p>{"hello, Somayeh"}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 10}</p>
        <a href={link}>Google site</a>
      </div>
    </div>
  );
}*/
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
