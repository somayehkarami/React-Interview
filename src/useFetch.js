import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  //we are updating all these state properties

  useEffect(() => {
    const abortCount = new AbortController();
    //before the fetch data was completed try to move to other page we will get error
    //we need to stop te fetch by using clean up function
    //place the cleanup function inside the useEffect and we just return it.

    setTimeout(() => {
      fetch(url, { signal: abortCount.signal })
        //this returns to us a promise we need to use then method
        .then((res) => {
          console.log(res);
          //response is an object and  actully isnot data that has an ok property
          if (!res.ok) {
            throw Error("could not fetch the data :)");
          }
          return res.json(); //this pass the  json data  into a javascript object(this is asynchronus it takes some times to do)
        })
        .then((data) => {
          //this function takes a parameter the actul data
          //takes another promise
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          //when we throw an error in this fetch it catches it here
          //handle any kind of error(server error or connection error)
          //to let user know what kind of error is by using  catch block
          setIsPending(false);
          setError(err.message); //store the error in state to output it to browser
        });
    }, 1000);
    return () => abortCount.abort();
  }, [url]); //once the url changed rerun the function

  return { data, isPending, error }; // return value(object) from useFetch function
};
export default useFetch;

//useEffect(() => {
//Runs on the first render
//And any time any dependency value changes
//}, [prop, state]);
