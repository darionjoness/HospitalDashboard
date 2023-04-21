import React from 'react'
import { useSelector } from 'react-redux'

const TotalPatientsDashItem = () => {

    const startingPatients = useSelector((state) => state.patients.patients)

    const newPatients = JSON.parse(localStorage.getItem('patients')) || []

  return (
    <div className='totalPatientsDash'>
        <div className="totalPatientsDashItems">
            <h2>Current Patients</h2>
            <h2>{startingPatients.length + newPatients.length}</h2>
        </div>
    </div>
  )
}

export default TotalPatientsDashItem