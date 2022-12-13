import React from 'react'
import "../../styles/footer.css"
import logo from "../../assets/images/footer-logo.png"

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='details'>
          <div className='contact-email'>
            <p>noa@stami.no</p>
          </div>
          <div className='logo'>
            <img src={logo} alt=""/>
          </div>
          <div className='website'>
            <p>stami.no</p>
          </div>
        </div>
        <div className='extra-details'>
          <ul>
            <li><a href="#">Personvernerklaeing</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer