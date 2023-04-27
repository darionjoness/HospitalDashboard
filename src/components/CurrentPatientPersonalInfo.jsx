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
                </div>
                <div className="currentPatientGeneralInfo">
                    <div className="currentPatientNameAndId">
                        <h2>{currentPatient.name}</h2>
                        <h2>ID #{currentPatient.id}</h2>
                    </div>
                    <div className="currentPatientInfoItem">
                        <p>Age: </p>
                        <h3>{currentPatient.age}</h3>
                    </div>
                    <div className="currentPatientInfoItem">
                        <p>Room #:</p>
                        <h3>{currentPatient.roomNumber}</h3>
                    </div>
                    <div className="currentPatientInfoItem">
                        <p>Gender:</p>
                        <h3>{currentPatient.gender}</h3>
                    </div>
                    <div className="currentPatientInfoItem">
                        <p>Height:</p>
                        <h3>{currentPatient.height} (in)</h3>
                    </div>
                    <div className="currentPatientInfoItem">
                        <p>Weight:</p>
                        <h3>{currentPatient.weight} (lbs)</h3>
                    </div>
                    
                </div>
        </div>
    </div>
  )
}

export default CurrentPatientPersonalInfo