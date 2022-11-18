import React from 'react'
import { Link } from "react-router-dom"

const NavBar = ({currentUser, setCurrentUser}) => {

  function handleLogout(){
    if (currentUser !== "no one")
    setCurrentUser("no one")
  }

  return (

    <div className="topnav">
      <Link onClick={handleLogout} to="/login">{currentUser === "no one" ? "Login" : "Logout"}</Link>
      <Link to="/houses" className="center">
        <img src=
          "https://i.imgur.com/J9sdky2.png"
          width="300" height="auto" alt="" />
      </Link>
      <Link to="/add-house" className="split">Add Your House</Link>
    </div>)
}

export default NavBar
