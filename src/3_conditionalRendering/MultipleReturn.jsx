import { useState, useEffect } from "react";
export const MultipleReturn = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    const FetchData = () => {
      let url = "https://api.github.com/users/QuincyLarson";
      fetch(url)
          .then((response) => {
              console.log(response.json);
              return response.json();
        })
        .then((data) => {
          setData(data);
          console.log(data);
        })
        .catch((err) => {
          setLoading(false);
          setError(true);
          console.log(err);
        });
    };
    setLoading(true);
    FetchData();
    setLoading(false);
  }, []);
  if (loading) {
    return (
      <div>
        <h2>Multiple Return</h2>
        <h3>Loading...</h3>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h2>Multiple Return</h2>
        <h3>Error occured while fetching data</h3>
      </div>
    );
  }
//   if (!loading && !error) {
  return (
      // dont call hooks conditionally 
      // hooks need to be called in same condition always
      <div>
        <h1>Multiple Return</h1>
        <p>Rendering of data done using if conditions <br /> avoid using useEffect for that as it can possibly cause infinite loop if dependancy array of that useEffect is containing a state variable <br /> the state variable would cause re render on every update on the state <br/> [error, setError] doesnt handle each and every error ... doesnt handle errors 4xx 5xx</p>        
        <h2>Name : {data.login}</h2>
        <h2>{data.bio}</h2>
        <img className="git-image" src={data.avatar_url} alt="" />
      </div>
    );
//   }
};
