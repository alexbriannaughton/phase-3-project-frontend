import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const NavBar = () => {
  return (
    <div>
    <Menu>
      <Menu.Item>
        <NavLink to="/">
          Home
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/house">
          House List
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/add-house">
          Add A New House
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/add-review">
          Add A New Review
        </NavLink>
      </Menu.Item>
    </Menu>
    </div>
  )
}

export default NavBar
