import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const NavBar = () => {
  return (
    <div>
    <Menu>
      <Menu.item>
        <NavLink to="/">
          Home
        </NavLink>
      </Menu.item>
      <Menu.item>
        <NavLink to="/house">
          House List
        </NavLink>
      </Menu.item>
      <Menu.item>
        <NavLink to="/add-house">
          Add A New House
        </NavLink>
      </Menu.item>
      <Menu.item>
        <NavLink to="/add-review">
          Add A New Review
        </NavLink>
      </Menu.item>
    </Menu>
    </div>
  )
}

export default NavBar
