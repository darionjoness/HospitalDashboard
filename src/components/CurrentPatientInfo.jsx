import React from 'react'
import { useSelector } from 'react-redux'
import { BsFillPersonFill, BsFillPeopleFill } from "react-icons/bs";
import { AiFillMedicineBox } from "react-icons/ai";
import { FaStethoscope } from "react-icons/fa";

const CurrentPatientInfo = () => {

    // Bring in the currentPatient from the store
    const currentPatient = useSelector((state) => state.currentPatient.currentPatient)


  return (
    <div className='currentPatientInfo'>
        <div className="currentPatientInfoItems">
            <div className="currentPatientSidebar">
                <h2><BsFillPersonFill />Personal Info</h2>
                <h2><AiFillMedicineBox />Medicines</h2>
                <h2><FaStethoscope />Vitals</h2>
                <h2><AiFillMedicineBox />Contact Family</h2>
            </div>
        </div>
    </div>
  )
}

export default CurrentPatientInfo