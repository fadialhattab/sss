import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/catogry.css"


function Cataloge() {
  return (
    <>
    <div id='services'>
       <Link to="../pages/hair"> <div id='hair' className='card'>
            <h1>Hair</h1>
            <img className='img' src='../public/imges/hair.jpeg' alt=''/>
        </div></Link>

        <Link to="../pages/Nail"> <div id='Nail' className='card'>
            <h1>Nail</h1>
            <img className='img' src='../public/imges/nail.jpg' alt=''/>
        </div></Link>

        <Link to="../pages/Makeup"> <div id='Makeup' className='card'>
            <h1>Make up</h1>
            <img className='img' src='../public/imges/mackup.jpeg' alt=''/>
        </div></Link>

        <Link to="../pages/Sabga"> <div id='Sabga' className='card'>
            <h1>Hair Dye</h1>
            <img className='img' src='../public/imges/hairsabga.jpg' alt=''/>
        </div></Link>

        <Link to="../pages/Proteen"> <div id='Proteen' className='card'>
            <h1>Hair protein</h1>
            <img className='img' src='../public/imges/proteen.jpeg' alt=''/>
        </div></Link>
         
        

        </div></>
  )
}

export default Cataloge