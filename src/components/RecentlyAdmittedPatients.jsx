import React from 'react'
import { useSelector } from 'react-redux'

const RecentlyAdmittedPatients = () => {

  // Bring in patients from the store
  const patients = useSelector((state) => state.patients.patients)

  // Grab patients from the localStorage
  const newPatients = JSON.parse(localStorage.getItem('patients')) || []

  // Combine patients using spread operator
  const allPatients = [...patients, ...newPatients]

  // Sort the dates in descending order
  const sortedPatients = allPatients.sort((a, b) => new Date(b.dateArrived) - new Date(a.dateArrived));


  // Slice the last 5 patients
  const mostRecentPatients = sortedPatients.slice(0 , 7)




  return (
    <div className='recentlyAdmitted'>
      <h2>Recently Admitted</h2>
      <div className="recentlyAdmittedItems">
        {mostRecentPatients.map((patient,idx) => (
          <div className='recentPatient' key={patient.id}> 
            <h3>{patient.name}</h3>
            <h3>{patient.dateArrived}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentlyAdmittedPatients