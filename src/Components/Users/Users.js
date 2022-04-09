import React, { useEffect, useState } from "react";
import "./Users.css";

const Users = () => {
  const [pages, setPages] = useState([]);
  const [user, setUser] = useState([]);

  console.log(user);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((data) => setPages(data.data));
  }, []);

  const handleCLick = (id) => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data.data));
  };

  return (
    <div>
      <div className="user-card">
        <img src={user.avatar} alt="" />
        <h2>
          Name: {user.first_name} {user.last_name}
        </h2>
        <p>Email: {user.email}</p>
      </div>

      <div style={{ marginLeft: "42%" }}>
        {pages.map((page) => (
          <button onClick={() => handleCLick(page.id)} key={page.id}>
            {page.id}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Users;
