import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const NavBar = () => {
  return (

    <div class="topnav">
      <a href="/houses">Home</a>
      <a class="center" href="/houses">
        <img src=
          "https://i.imgur.com/J9sdky2.png"
          width="300" height="auto" alt="" />
      </a>
      <a href="/add-house" class="split">Add Your House</a>
      <a href="/login">Login</a>
    </div>)
}

export default NavBar
