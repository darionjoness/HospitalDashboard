import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { BsChevronLeft } from "react-icons/bs";

const NursesContact = () => {
    const [viewNurses, setViewNurses] = useState(false)

    // Bring in doctors from store
    const nurses = useSelector((state) => state.nurses.nurses)

    // Create toggleDoctors function
    const toggleNurses = () => {
        setViewNurses(!viewNurses)
    }
  return (
    <div className='nursesContact'>
        <div className="nursesContactItems container">
        <div className="nursesContactDiv">
                <div onClick={toggleNurses} className="doctorsHeader">
                    <h1>Nurses ({nurses.length})</h1>
                    <h2 className={viewNurses ? 'rotate' : ''}><BsChevronLeft /></h2>
                </div>
                <div className={`nurses ${viewNurses ? 'show' : ''}`}>
                    {nurses.map((nurse, idx) => (
                        <div key={idx} className='doctor'>
                            <div className="nameAndNumber">
                                <div className="doctorsName">
                                    <h2>{nurse.name}</h2>
                                    <div className="nursesFloor">
                                        <h3>Floor</h3>
                                        <p>{nurse.floor}</p>
                                    </div>
                                </div>
                                <div className="doctorsPhoneNumber">
                                    <h3>Phone Number</h3>
                                    <p>{nurse.phoneNumber}</p>
                                </div>
                            </div>
                            <div className="emailAndShift">
                                <div className="doctorsEmail">
                                    <h3>Email</h3>
                                    <p>{nurse.email}</p>
                                </div>
                                <div className="doctorsShift">
                                    <h3>Shift</h3> 
                                    <p>{nurse.shift}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default NursesContact