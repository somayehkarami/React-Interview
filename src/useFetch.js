import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url) //endpoint from the json file(get request)
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
          setData(data); //this data is local version
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          //handel any network error
          //console.log(err.message);
          setError(err.message);
        });
    }, 1000); //after one second perform the fetch
  }, [url]); //once the url changed rerun the function

  return { data, isPending, error };
};
export default useFetch;
