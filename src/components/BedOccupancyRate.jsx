import React from 'react'
import { useSelector } from 'react-redux'

const BedOccupancyRate = () => {

    // Bring in the patients from the store
    const patients = useSelector((state) => state.patients.patients)

    // Bring the rooms in from the store
    const rooms = useSelector((state) => state.rooms.rooms)

    // grab the patients from localStorage
    const newPatients = JSON.parse(localStorage.getItem('patients')) || []

    // Use spread operator to put patients into new const
    const allPatients = [...patients, ...newPatients]

    // Calculate the Bed occupancy rate
    const bedOccupancy = (allPatients.length / rooms.length) * 100
    

  return (
    <div className='bedOccupancyRate'>
        <div className="bedOccupancyRateItems">
            <div className="occupancyRate">
                <h2>Bed Occupancy Rate</h2>
                <h1>%{bedOccupancy.toFixed(2)}</h1>
            </div>
            <div className="occupiedBeds">
                <h2>Occupied</h2>
                <h3>{allPatients.length}</h3>
            </div>
            <div className="totalBeds">
                <h2>Total Beds</h2>
                <h3>{rooms.length}</h3>
            </div>
        </div>
    </div>
  )
}

export default BedOccupancyRate