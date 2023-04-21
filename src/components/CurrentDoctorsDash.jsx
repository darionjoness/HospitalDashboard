import React from 'react'
import { useSelector } from 'react-redux'

const CurrentDoctorsDash = () => {

    // Bring in doctors from the store
    const doctors = useSelector((state) => state.doctors.doctors)


  return (
    <div className='currentDoctorsDash'>
        <div className="currentDoctorsDashItems">
            <h2>Current Doctors</h2>
            <h2>3</h2>
        </div>
    </div>
  )
}

export default CurrentDoctorsDash