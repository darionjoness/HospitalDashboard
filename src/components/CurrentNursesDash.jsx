import React from 'react'
import { useSelector } from 'react-redux'

const CurrentNursesDash = () => {

  // Bring in nurses from the store
  const nurses = useSelector((state) => state.nurses.nurses)

  return (
    <div className='currentNursesDash'>
        <div className="currentNursesDashItems">
            <h2>Current Nurses</h2>
            <h2>6</h2>
        </div>
    </div>
  )
}

export default CurrentNursesDash