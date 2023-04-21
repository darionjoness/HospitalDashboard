import React from 'react'

const PatientAddedModal = ({closeConfirmedPatient, patientAdded}) => {

   // Turn on over hidden when patienAdded is true
   if(patientAdded){
    document.body.style.overflow = 'hidden'
  }else{
    document.body.style.overflow = 'auto'
  }
  return (
    <div className='patientAddedModal'>
        <div className="patientAddedModalItems">
            <h1>Patient Added!</h1>
            <button onClick={closeConfirmedPatient}>Close</button>
        </div>
    </div>
  )
}

export default PatientAddedModal