import React from 'react'
import { useSelector } from 'react-redux'
import { CiPillsBottle1 } from "react-icons/ci";

const PatientMedicines = () => {

    // Bring in currentPatient from the store
    const currentPatient = useSelector((state) => state.currentPatient.currentPatient)


  return (
    <div className='patientMedicines'>
        <div className="patientMedicinesItems">
            <div className="patientMedicines">
                {currentPatient.medicines.map((med, idx) => (
                    <div key={idx} className='patientMedicine'>
                        <h3><CiPillsBottle1 className='pillBottle' />{med.name}</h3>
                        <div className="medDosage">
                            <p>{med.dosage}</p>
                            <p>Available every {med.hoursBetweenDoses} Hrs</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default PatientMedicines