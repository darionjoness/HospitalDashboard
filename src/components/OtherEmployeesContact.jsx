import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { BsChevronLeft } from "react-icons/bs";

const OtherEmployeesContact = () => {
    const [viewOtherEmployees, setViewOtherEmployees] = useState(false)

    // Bring in doctors from store
    const otherEmployees = useSelector((state) => state.otherEmployees.otherEmployees)

    // Create toggleDoctors function
    const toggleOtherEmployees = () => {
        setViewOtherEmployees(!viewOtherEmployees)
    }

  return (
    <div className='nursesContact'>
        <div className="nursesContactItems container">
        <div className="nursesContactDiv">
                <div onClick={toggleOtherEmployees} className="doctorsHeader">
                    <h1>Other Employees ({otherEmployees.length})</h1>
                    <h2 className={viewOtherEmployees ? 'rotate' : ''}><BsChevronLeft /></h2>
                </div>
                <div className={`otherEmployees ${viewOtherEmployees ? 'show' : ''}`}>
                    {otherEmployees.map((employee, idx) => (
                        <div key={idx} className='doctor'>
                            <div className="nameAndNumber">
                                <div className="doctorsName">
                                    <h2>{employee.name}</h2>
                                    <div className="nursesFloor">
                                        <p>{employee.jobTitle}</p>
                                    </div>
                                </div>
                                <div className="doctorsPhoneNumber">
                                    <h3>Phone Number</h3>
                                    <p>{employee.phoneNumber}</p>
                                </div>
                            </div>
                            <div className="emailAndShift">
                                <div className="doctorsEmail">
                                    <h3>Email</h3>
                                    <p>{employee.email}</p>
                                </div>
                                <div className="doctorsShift">
                                    <h3>Shift</h3> 
                                    <p>{employee.shift}</p>
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

export default OtherEmployeesContact