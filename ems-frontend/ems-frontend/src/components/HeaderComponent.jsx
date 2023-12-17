import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderComponent = () => {

  const navigator = useNavigate();

  const toHome = () => {
    navigator('/');
  }
  return (
    <header>
        <nav className='navbar navbar-dark bg-dark'>
            <a className='navbar-brand' onClick={() => toHome()} style={{cursor: 'pointer', marginLeft: '10px'}}>Employee Management System</a>
        </nav>
    </header>
  )
}

export default HeaderComponent