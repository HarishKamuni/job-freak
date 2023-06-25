import React from 'react'
import "./LeftPanel.css"
import { NavLink } from 'react-router-dom'

const LeftPanel = () => {
  return (
    <div className='leftPanel'>
          <ul>
              <NavLink to="/"><li>Home</li></NavLink>
              <NavLink to="/contact"><li>Contact</li></NavLink>
              <NavLink to="/info"><li>Information</li></NavLink>
              <NavLink to="/guide"><li>Guide</li></NavLink>
          </ul>
    </div>
  )
}

export default LeftPanel