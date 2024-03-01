import React from 'react'
import '../navbar/navbar.css'
import { FaChevronCircleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoCallOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <>
      
<nav className="navbarmegamenu">
   
     <Link to={'byjus/'}>  <img src="https://cdn1.byjus.com/byjusweb/img/home/svg/byjus_logo.svg" alt="" className='navbarimg'></img></Link> 

  <ul>
    <li className='navtext'><a href="#">Study material<FaChevronCircleDown className='iconleft'/></a>
      <div className="dropdown">
        <div className="column">
          <Link to="/neetinfo">NEET</Link>
          <Link to="/cbse">CBSE</Link>
          <Link to="/neet">NEET MAINS</Link>
          <Link to={"/jee"}>JEE</Link>
          <Link to={"/classes"}>CLASSES</Link>
        </div>
    
      </div>
    </li>
    <li className='navtext'><Link to="/answerpannel">BYJU'S Answer</Link></li>
    <li className='navtext'><a href="#">Scholarship<FaChevronCircleDown className='iconleft'/></a>
      <div className="dropdown">
        <div className="column">
     <Link to="scholarship">BTC CLASS 1-5</Link>   
         
          <a href="#">BTC CLASS 6-10</a>
        </div>
        <div className="column">
          <a href="#">BTC CLASS 11-12</a>
         
        </div>
      
      </div>
    </li>
    <li className='navtext'><a href="#">BTC<FaChevronCircleDown className='iconleft'/></a>
      <div className="dropdown">
        <div className="column">
          <Link to="/btc">BYJU'S TUTION CENTRE</Link>
          <a href="#">BYJU'S TUTION CENTRE(NORTH)</a>
          <a href="#">BYJU'S TUTION CENTRE(SOUTH)</a>
        </div>
        
      </div>
    </li>
    <li className='navtext'><Link to="/filter">Buy a Course</Link></li>
    <li className='navtext'><a href="#">Success Stories</a></li>
    <button className='navbtn'>Log in</button>
    <button className='naviconsnew'><IoCallOutline/></button>


  </ul>
</nav>

    </>
  )
}

export default Navbar
