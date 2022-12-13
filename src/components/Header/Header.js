import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import logo from "../../assets/images/header-logo.png"
import "../../styles/header.css"


export const Header = () => {
  const [subMenuOpen, setSubMenuOpen] =  useState(false)

  return (
    <>
      <header className='header'>
        <div className='container'>
          <div className='logo'>
            <img src={logo} alt=""/>
          </div>
          <div className='search'>
            <div className='search-box'>
              <input type="text" placeholder="Hav leter du etter?" />
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
          <div className='menu'>
            <div className='menu-icon' onClick={() => setSubMenuOpen((state) => !state)}>
              <FontAwesomeIcon icon={faBars} size="xl"/>
            </div>
            {subMenuOpen && 
              <ul className='sub-menu'>
                <li><a href="#">Submenu 1</a></li>
                <li><a href="#">Submenu 2</a></li>
                <li><a href="#">Submenu 3</a></li>
                <li><a href="#">Submenu 4</a></li>
              </ul>
            }
          </div>
        </div>
      </header>
      <div className='header-height-fill'></div>
    </>
  )
}

export default Header;