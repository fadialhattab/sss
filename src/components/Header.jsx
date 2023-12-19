import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
const Header=()=> {
  return (
    <header id='header1'>
<nav id='nav1'>
  <Link className='link1'  to="/"><h1 className='nav2'>Home</h1></Link>
  <Link className='link1' to="Cataloge"><h1 className='nav2'>Category</h1></Link>
  <Link className='link1' to="About"><h1 className='nav2'>About</h1></Link>  
  <Link className='link1' to="Conect"><h1 className='nav2'>Contact us</h1></Link>
  <Link className='link1' to="Signin"><h1 className='nav2'>Sing in</h1></Link>
 
  
  
  </nav>
  
  </header>
  
  )
}

export default Header
