import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};
//blogs={blogs} this is props
export default Home;
//A Promise is in one of these states:

//pending: initial state, neither fulfilled nor rejected.
//fulfilled: meaning that the operation was completed successfully.
//rejected: meaning that the operation failed.

//If present, effect will only activate if the values in the list change.[]
//Accepts a function that contains imperative, possibly effectful code.

//Why and When To Use Custom Hooks *************
//The main reason to write a custom hook is for code reusability.
//For example, instead of writing the same code across multiple components
// that use the same common stateful logic (say a “setState” or localStorage logic),
//you can put that code inside a custom hook and reuse it.

//null evaluates to false

//ROUTER***********
//npm install react-router-dom@6

////npx json-server --watch data/db.json --port 8000
