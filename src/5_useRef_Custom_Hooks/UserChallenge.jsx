import { useFetchPerson } from "./UCcustomhooks";
export const UserChallenge = () => {
    const {loading, error, data} = useFetchPerson();
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
        <h2>User Challenge</h2>
        <h3>Error occurred while fetching data</h3>
      </div>
    );
  }
  return (
    <div>
      <h1>User Challenge Custom Hooks</h1>
      <h2>Name : {data.login}</h2>
      <h2>{data.bio}</h2>
      <img className="git-image" src={data.avatar_url} alt="" />
    </div>
  );
  //   }
};
