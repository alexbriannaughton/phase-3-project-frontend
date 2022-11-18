import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setCurrentUser }) {
  const [userLogin, setUserLogin] = useState("");
  const [noUserMessage, setNoUserMessage] = useState(false);
  const [newName, setNewName] = useState("");
  const [newUsername, setNewUsername] = useState("");

  const navigate = useNavigate();

  function handleLoginChange(e) {
    setUserLogin(e.target.value);
  }

  function handleXClick() {
    setNoUserMessage(false);
  }

  function handleLoginSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/users/${userLogin}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          setNoUserMessage(true);
        } else {
          setCurrentUser(data);
          navigate("/houses");
        }
      });
  }

  function handleNewAccountSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: newName,
      username: newUsername,
    };

    fetch("http://localhost:9292/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data) {
          setCurrentUser(data);
          navigate("/houses");
        }
      });
  }

  return (
    <div className="lights">
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="login" value="Username">
          Username:
        </label>
        <br />
        <input
          type="text"
          name="login"
          value={userLogin}
          onChange={handleLoginChange}
          autoFocus={true}
        />
        <br></br>
        <input type="submit" value="Login" />
      </form>
      <br></br>
      <h3>Don't have one? Create one below!</h3>
      <form onSubmit={handleNewAccountSubmit}>
        <label>Full name: </label>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        ></input>
        <br></br>
        <br></br>
        <label>Username: </label>
        <input
          type="text"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        ></input>
        <br></br>
        <br></br>
        <button type="submit">Create new account</button>
      </form>
      {noUserMessage ? (
        <div className="form-div">
          <h1>
            We can't seem to find that username.
            <button id="x-button" onClick={handleXClick}>
              x
            </button>
          </h1>
        </div>
      ) : null}
    </div>
  );
}

export default Login;
