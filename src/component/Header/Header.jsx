import React from 'react'
import weekday from '../../assets/weekday.png'
import productHunt from '../../assets/producthunt.svg'
import './Header.css'
const Header = () => {
  return (
    <div className='header-container'>
      <div className="logo">
        <img src={weekday} alt="" />
        <img src={productHunt} alt="" />
      </div>
    </div>
  )
}

export default Header