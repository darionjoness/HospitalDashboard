import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { BsChevronLeft } from "react-icons/bs";

const CnasContact = () => {
    const [viewCnas, setViewCnas] = useState(false)

    // Bring in doctors from store
    const cnas = useSelector((state) => state.cnas.cnas)

    // Create toggleDoctors function
    const toggleCnas = () => {
        setViewCnas(!viewCnas)
    }

  return (
    <div className='nursesContact'>
        <div className="nursesContactItems container">
        <div className="nursesContactDiv">
                <div onClick={toggleCnas} className="doctorsHeader">
                    <h1>CNAs ({cnas.length})</h1>
                    <h2 className={viewCnas ? 'rotate' : ''}><BsChevronLeft /></h2>
                </div>
                <div className={`cnas ${viewCnas ? 'show' : ''}`}>
                    {cnas.map((cna, idx) => (
                        <div key={idx} className='doctor'>
                            <div className="nameAndNumber">
                                <div className="doctorsName">
                                    <h2>{cna.name}</h2>
                                    <div className="nursesFloor">
                                        <h3>Floor</h3>
                                        <p>{cna.floor}</p>
                                    </div>
                                </div>
                                <div className="doctorsPhoneNumber">
                                    <h3>Phone Number</h3>
                                    <p>{cna.phoneNumber}</p>
                                </div>
                            </div>
                            <div className="emailAndShift">
                                <div className="doctorsEmail">
                                    <h3>Email</h3>
                                    <p>{cna.email}</p>
                                </div>
                                <div className="doctorsShift">
                                    <h3>Shift</h3> 
                                    <p>{cna.shift}</p>
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

export default CnasContact