import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'

const HeaderComponent = () => {

  const navigator = useNavigate();

  const toHome = () => {
    navigator('/');
  }
  return (
    <header>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <a className='navbar-brand' onClick={() => toHome()} style={{cursor: 'pointer', marginLeft: '10px'}}>Employee Management System</a>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className='nav-link' to='/employees'>Employees</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link' to='/departments'>Departments</NavLink>
              </li>
            </ul>
          </div>
        </nav>
    </header>
  )
}

export default HeaderComponent