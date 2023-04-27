import React from 'react'
import { useSelector } from 'react-redux'
import CurrentPatientContactInfo from './CurrentPatientContactInfo'
import CurrentPatientPersonalInfo from './CurrentPatientPersonalInfo'
import PatientMedicines from './PatientMedicines'
import PatientVitals from './PatientVitals'
import { Link } from 'react-router-dom'
import { BsArrowLeftShort } from "react-icons/bs";
import FamilyMembers from './FamilyMembers'

const CurrentPatientInfo = () => {

    // Bring in currentPatient from the store
    const currentPatient = useSelector((state) => state.currentPatient.currentPatient)

  return (
    <div className='currentPatientInfo'>
        <div className="currentPatientInfoItems container">
            <Link to={'/patients'} className='currentPatientBackBtn'>
                <p><BsArrowLeftShort /></p>
                <p>Back</p>
            </Link>
            <div className="currentPatientHeader">
                <h1>{currentPatient.name} Information</h1>
            </div>
            <div className='currentPatientInfoDiv'>
                <CurrentPatientPersonalInfo />
                <CurrentPatientContactInfo />
            </div>
            <div className="currentPatientVitals">
                <PatientVitals />
                <PatientMedicines />
            </div>
            <FamilyMembers />
        </div>
    </div>
  )
}

export default CurrentPatientInfo