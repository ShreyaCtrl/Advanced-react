import "./Index.css";
import { data } from "../data";
import { useEffect, useState } from "react";
export const UserChallenge = () => {
  const [AddUserField, setAddUserField] = useState("");
  const [UserList, setUserList] = useState(data);
  const User = (prop) => {
    const { id, name } = prop;
    return (
      <div key={id}>
        <h2>
          {id}. {name}
        </h2>
      </div>
    );
  };

  const handleClickAdd = (e) => {
    e.preventDefault();
    console.log("clicked");
    if (!AddUserField) return;
    if (AddUserField) {
      const newUser = { id: UserList.length + 1, name: AddUserField };
      if (!UserList.includes(newUser)) {
        setUserList([...UserList, newUser]);
      }
    }
  };

  const [RemoveUser, setRemoveUser] = useState("");
  const handleClickRemove = (e) => {
    e.preventDefault();
    console.log("clicked removed");
    // const bool = UserList.filter((user) => { if ( user.name == RemoveUser) } )
    // if (UserList.includes(newUser)) {
      const newList = UserList.filter((user) => user.name != RemoveUser);
      setUserList(newList);
    // }
  };

  return (
    <div>
      <form action="" className="form" onSubmit={handleClickAdd}>
        <h1>User Challenge - Add User</h1>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Add user
          </label>
          <input
            type="name"
            id="name"
            name="name"
            value={AddUserField}
            className="form-input"
            onChange={(e) => setAddUserField(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          Add
        </button>
      </form>
      <form action="" className="form" onSubmit={handleClickRemove}>
        <h1>User Challenge - Remove User</h1>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Remove user
          </label>
          <input
            type="name"
            id="name"
            name="name"
            value={RemoveUser}
            className="form-input"
            onChange={(e) => setRemoveUser(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          Remove
        </button>
      </form>
      <h2>Users :</h2>
      {UserList.map((user) => {
        return <User {...user} key={user.id} />;
      })}
    </div>
  );
};
