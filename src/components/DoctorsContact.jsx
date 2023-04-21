import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { BsChevronLeft } from "react-icons/bs";

const DoctorsContact = () => {

    const [viewDoctors, setViewDoctors] = useState(false)

    // Bring in doctors from store
    const doctors = useSelector((state) => state.doctors.doctors)

    // Create toggleDoctors function
    const toggleDoctors = () => {
        setViewDoctors(!viewDoctors)
    }

  return (
    <div className='doctorsContact'>
        <div className="doctorsContactItems container">
        <div className="doctorsContactDiv">
                <div onClick={toggleDoctors} className="doctorsHeader">
                    <h1>Doctors ({doctors.length})</h1>
                    <h2 className={viewDoctors ? 'rotate' : ''}><BsChevronLeft /></h2>
                </div>
                <div className={`doctors ${viewDoctors ? 'show' : ''}`}>
                    {doctors.map((doctor, idx) => (
                        <div key={idx} className='doctor'>
                            <div className="nameAndNumber">
                                <div className="doctorsName">
                                    <h2>{doctor.name}</h2>
                                    <p>{doctor.specialty}</p>
                                </div>
                                <div className="doctorsPhoneNumber">
                                    <h3>Phone Number</h3>
                                    <p>{doctor.phoneNumber}</p>
                                </div>
                            </div>
                            <div className="emailAndShift">
                                <div className="doctorsEmail">
                                    <h3>Email</h3>
                                    <p>{doctor.email}</p>
                                </div>
                                <div className="doctorsShift">
                                    <h3>Shift</h3> 
                                    <p>{doctor.shift}</p>
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

export default DoctorsContact