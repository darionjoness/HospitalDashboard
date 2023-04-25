import React from 'react'
import { useSelector } from 'react-redux'
import CurrentPatientPersonalInfo from './CurrentPatientPersonalInfo'

const CurrentPatientInfo = () => {

    // Bring in currentPatient from the store
    const currentPatient = useSelector((state) => state.currentPatient.currentPatient)

  return (
    <div className='currentPatientInfo'>
        <div className="currentPatientInfoItems container">
            <div className="currentPatientHeader">
                <h1>{currentPatient.name} Information</h1>
            </div>
            <CurrentPatientPersonalInfo />
        </div>
    </div>
  )
}

export default CurrentPatientInfo