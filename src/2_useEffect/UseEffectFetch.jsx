import { useState, useEffect } from "react";
const UseEffectFetch = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    let url = "https://api.github.com/users";
    const FetchUsers = (url) => {
      fetch(url)
        .then((response) => response.json())
        .then((users) => setUsers(users))
        .catch((error) => console.log(error));
    };
    FetchUsers(url);
  }, []);
  const User = (props) => {
    const { login, id, avatar_url, html_url } = props;
    return (
      <div className="git-comp" key={id}>
            <h2>Name : {login}</h2>
            <img className="git-image" src={avatar_url} alt={login}/>
            {/* <h2>Image : {avatar_url}</h2> */}
            <a href={html_url}>Profile</a>
      </div>
    );
  };
  return (
    <div>
      <h1>UseEffect Fetch Data</h1>
      {users.map((user) => {
        return <User {...user} key={user.id} />;
      })}
    </div>
  );
};

// const [data, setData] = useState([]);
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(false);
// const fetchData = async () => {
//     try {
//         const response = await fetch("https://api.github.com/users");
//         const data = await response.json();
//         setData(data);
//         setLoading(false);
//     } catch (error) {
//         setError(true);
//         setLoading(false);
//     }
// }
// useEffect(() => {
//     fetchData();
// }
//     , [])
// if (loading) {
//     return (
//         <div>
//             <h2>Loading...</h2>
//         </div>
//     )
// }
// if (error) {
//     return (
//         <div>
//             <h2>Error...</h2>
//         </div>
//     )
// }
// return (
//     <div>
//         <h2>Fetch Data</h2>
//         <ul className="users">
//             {data.map((user) => {
//                 return (
//                     <li key={user.id}>
//                         <img src={user.avatar_url} alt={user.login} />
//                         <div>
//                             <h4>{user.login}</h4>
//                             <a href={user.html_url}>Profile</a>
//                         </div>
//                     </li>
//                 )
//             }
//             )}
//         </ul>
//     </div>
// )
export default UseEffectFetch;
