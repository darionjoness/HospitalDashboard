import React from 'react'
import { useSelector } from 'react-redux'

const CurrentPatientContactInfo = () => {

    // Bring in currentPatient from the store
    const currentPatient = useSelector((state) => state.currentPatient.currentPatient)

  return (
    <div className='currentPatientContactInfo'>
        <div className="currentPatientContactInfoItems">
            <h1>General Information</h1>
            <div className="currentPatientInfoItem">
                <p>Phone #:</p>
                <h3>{currentPatient.phoneNumber}</h3>
            </div>
            <div className="currentPatientInfoItem">
                <p>Email:</p>
                <h3>{currentPatient.email}</h3>
            </div>
            <div className="currentPatientInfoItem">
                <p>Date Arrived</p>
                <h3>{currentPatient.dateArrived}</h3>
            </div>
            <div className="currentPatientInfoItem">
                <p>Departure Date</p>
                <h3>{currentPatient.departureDate}</h3>
            </div>
        </div>
    </div>
  )
}

export default CurrentPatientContactInfo