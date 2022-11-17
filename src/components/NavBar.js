import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const NavBar = () => {
  return (
    
    <div class="topnav">
        <a href="/houses">Home</a>
        <a class="center" href="#">
            <img src=
"https://media.secondstreetapp.com/279682?width=1200"
                width="300" height="50" alt="" />
        </a>
        <a href="/add-house" class="split">Add House</a>
    </div>)
}

export default NavBar
