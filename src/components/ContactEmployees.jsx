import React from 'react'
import { useSelector } from 'react-redux'
import { BsChevronLeft } from "react-icons/bs";
import { useState } from 'react';
import DoctorsContact from './DoctorsContact';
import NursesContact from './NursesContact';

const ContactEmployees = () => {


  return (
    <div className='contactEmployees'>
        <div className="contactEmployeesItems container">
            <h1 className='employeesHeader'>Contact Employees</h1>
        </div>
    </div>
  )
}

export default ContactEmployees