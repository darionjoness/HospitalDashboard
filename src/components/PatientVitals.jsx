import React from 'react'
import { useSelector } from 'react-redux'
import { FaHeartbeat } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { BsFillLungsFill } from "react-icons/bs";
import { FaTemperatureHigh } from "react-icons/fa";
import { patientActions } from '../store/patientsSlice';

const PatientVitals = () => {

    // Bring in currentPatient from the store
    const currentPatient = useSelector((state) => state.currentPatient.currentPatient)

    

  return (
    <div className='patientVitals'>
        <div className="patientVitalsItems">
            <div className="patientVitals">
                <div className="patientVital">
                    <h3>Heart Rate</h3>
                    <div className="patientSymbolAndRate">
                        <h2><FaHeartbeat /></h2>
                        {<p>{currentPatient.vitals.heartRate}</p>}
                    </div>
                </div>
                <div className="patientVital">
                    <h3>Blood Pressure</h3>
                    <div className="patientSymbolAndRate">
                        <h2><MdBloodtype /></h2>
                        <p>{currentPatient.vitals.bloodPressure}</p>
                    </div>
                </div>
                <div className="patientVital">
                    <h3>Respiratory Rate</h3>
                    <div className="patientSymbolAndRate">
                        <h2><BsFillLungsFill /></h2>
                        <p>{currentPatient.vitals.respiratoryRate}</p>
                    </div>
                </div>
                <div className="patientVital">
                    <h3>Body Temperature</h3>
                    <div className="patientSymbolAndRate">
                        <h2><FaTemperatureHigh /></h2>
                        <p>{currentPatient.vitals.bodyTemperature}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PatientVitals