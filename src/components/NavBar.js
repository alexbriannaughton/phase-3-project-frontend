import React from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {
  return (

    <div className="topnav">
      <Link to="/houses">Home</Link>
      <Link to="/houses" className="center">
        <img src=
          "https://i.imgur.com/J9sdky2.png"
          width="300" height="auto" alt="" />
      </Link>
      <Link to="/add-house" className="split">Add Your House</Link>
      <Link to="/login">Login</Link>
    </div>)
}

export default NavBar
