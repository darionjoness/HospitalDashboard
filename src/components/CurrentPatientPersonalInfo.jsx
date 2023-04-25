import React from 'react'
import { useSelector } from 'react-redux'

const CurrentPatientPersonalInfo = () => {

    // Bring in currentPatient from the store
    const currentPatient = useSelector((state) => state.currentPatient.currentPatient)

  return (
    <div className='currentPatientPersonalInfo'>
        <div className="currentPatientPersonalInfoItems">
            <div className="currentPatientImg">
                <img src={currentPatient.image} alt="" />
                <div className="currentPatientNameAndId">
                    <h2>{currentPatient.name}</h2>
                    <h2>ID #{currentPatient.id}</h2>
                </div>
            </div>
            <div className="currentPatientText">
                <h1>General Info</h1>
                <div className="generalInfo">
                    <div className="generalInfoLeft">
                        <h2>Gender: {currentPatient.gender}</h2>
                        <h2>Age: {currentPatient.age}</h2>
                        <h2>Height: {currentPatient.height} (in)</h2>
                        <h2>Weight: {currentPatient.weight} (lbs)</h2>
                    </div>
                    <div className="generalInfoRight">
                        <h2>Phone: {currentPatient.phoneNumber}</h2>
                        <h2>Email: {currentPatient.email}</h2>
                        <h2>Arrived: {currentPatient.dateArrived}</h2>
                        <h2>Departure: {currentPatient.departureDate}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CurrentPatientPersonalInfo