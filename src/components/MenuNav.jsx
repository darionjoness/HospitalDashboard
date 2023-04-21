import React from 'react'
import { Link } from 'react-router-dom'
import { FaHospitalUser, FaUserNurse, FaBed } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { useState } from 'react';
import { AiFillHome } from "react-icons/ai";

const MenuNav = ({ currentStart }) => {
    const [showCurrent, setShowCurrent] = useState(currentStart)

    // Create handleCurrentLink function that takes in index and setis it to showCurrent state
    const handleCurrentLink = (index) => {
        setShowCurrent(index)
    }

  return (
    <div className='menuNav'>
        <div className="menuNavItems container">
            <Link
            to={'/'} 
            className={`menuNavLink ${showCurrent === 0 ? 'active' : ''}`}
            onClick={() => handleCurrentLink(0)}><AiFillHome />Home
            </Link>
            <Link onClick={() => handleCurrentLink(1)} className={`menuNavLink ${showCurrent === 1 ? 'active' : ''}`} to={'/patients'}><FaHospitalUser />Patients</Link>
            <Link onClick={() => handleCurrentLink(2)} className={`menuNavLink ${showCurrent === 2 ? 'active' : ''}`} to={'/staff'}><FaUserNurse />Staff</Link>
            <Link onClick={() => handleCurrentLink(3)} className={`menuNavLink ${showCurrent === 3 ? 'active' : ''}`} to={'/rooms'}><FaBed />Rooms</Link>
            <Link onClick={() => handleCurrentLink(4)} className={`menuNavLink ${showCurrent === 4 ? 'active' : ''}`} to={'/contact'}><RiContactsBook2Fill />Contact</Link>
        </div>
    </div>
  )
}

export default MenuNav