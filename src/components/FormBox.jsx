import React, { useState } from "react";
import Card from "./Card";

const FormBox = (props) => {
  const [name, setName] = useState("");
  const [live, setLive] = useState("");
  const [email, setEmail] = useState("");

  const handalerAddUser = (event) => {
    event.preventDefault();
    if(name.trim().length === 0 || live.trim().length === 0 || email.trim().length === 0)
      {
        // window.confirm('Plase fill a invalid value for all inputs.')
        alert('Plase fill a invalid value for all inputs.');
        return;
      }
    const userInfo ={
      name,
      live,
      email
    }
    props.getUserInfo(userInfo);
    setName('');
    setEmail('');
    setLive('');
  };
  return (
    <Card>
      <form onSubmit={handalerAddUser}>
        <div className="form-div">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value) }
          />
        </div>
        <div className="form-div">
          <label htmlFor="live">Live</label>
          <input
            type="text"
            id="live"
            value={live}
            onChange={(e) =>setLive( e.target.value)}
          />
        </div>
        <div className="form-div">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) =>setEmail(e.target.value) }
          />
        </div>
        <button type="submit" className="btn">
          Add User
        </button>
      </form>
    </Card>
  );
};

export default FormBox;
