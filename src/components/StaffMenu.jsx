import React, {useState} from 'react'
import { useSelector } from 'react-redux'

const StaffMenu = () => {
    const [filterSelect, setFilterSelect] = useState('All')

    // bring doctors in from store
    const doctors = useSelector((state) => state.doctors.doctors)

    // Bring in the nurses from the store
    const nurses = useSelector((state) => state.nurses.nurses)

    // Bring in the cnas from the store
    const cnas = useSelector((state) => state.cnas.cnas)

    // Slice out 3 doctors
    const currentDoctors = doctors.slice(0,3)

    // Slice out 6 nurses
    const currentNurses = nurses.slice(0,6)

    // Slice out 5 cnas
    const currentCnas = cnas.slice(0, 5)

  return (
    <div className='staffMenu'>
        <div className="staffMenuItems container">
            <div className="currentStaffHeader">
                <h1>Current Staff ({currentDoctors.length + currentNurses.length + currentCnas.length})</h1>
                <div className="selectFilter">
                    <select value={filterSelect} onChange={(e) => setFilterSelect(e.target.value)}>
                        <option>All</option>
                        <option>Doctors</option>
                        <option>Nurses</option>
                        <option>CNAs</option>
                    </select>
                </div>
            </div>
            {filterSelect == 'All' || filterSelect == 'Doctors' ? <div>
            <h2 className='staffHeader'>Doctors</h2>
            <div className="staffMenuDoctors">
                {currentDoctors.map((doctor, idx) => (
                    <div className='staffMenuDoctor' key={idx}>
                        <div className="doctorImg">
                            <img src={doctor.image} alt="" />
                        </div>
                        <div className="doctorText">
                            <h3>{doctor.name}</h3>
                            <p>{doctor.specialty}</p>
                        </div>
                    </div>
                ))}
            </div>
            </div> : ''}
            {filterSelect == 'All' || filterSelect == 'Nurses' ? <div>
            <h2 className='staffHeader'>Nurses</h2>
            <div className="staffMenuNurses">
                {currentNurses.map((nurse, idx) => (
                    <div key={idx} className='staffMenuNurse'>
                        <div className="nurseImg">
                            <img src={nurse.image} alt="" />
                        </div>
                        <div className="nurseText">
                            <h3>{nurse.name}</h3>
                            <p>{nurse.shift}</p>
                        </div>
                    </div>
                ))}
            </div>
            </div> : ''}
            {filterSelect == 'All' || filterSelect == 'CNAs' ? <div>
            <h2 className='staffHeader'>CNAs</h2>
            <div className="staffMenuCnas">
                {currentCnas.map((cna, idx) => (
                    <div key={idx} className='staffMenuCna'>
                        <div className="cnaImg">
                            <img src={cna.image} alt="" />
                        </div>
                        <div className="cnaText">
                            <h3>{cna.name}</h3>
                            <p>{cna.shift}</p>
                        </div>
                    </div>
                ))}
            </div>
            </div> : ''}
        </div>
    </div>
  )
}

export default StaffMenu