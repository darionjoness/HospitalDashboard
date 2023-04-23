import React from 'react'
import { useSelector } from 'react-redux'
import { FaBed } from "react-icons/fa";

const RoomsScheduler = () => {

    // Grab rooms from the store
    const rooms = useSelector((state) => state.rooms.rooms)

    // Bring in newPatients from localStorage
    const newPatients = JSON.parse(localStorage.getItem('patients')) || []

    // Bring in the patients from the store
    const patients = useSelector((state) => state.patients.patients)

    // Combine patients
    const allPatients = [...newPatients, ...patients]

    // Map the patients roomNumber to new arr
    const occupiedRooms = allPatients.map((patient) => patient.roomNumber)

    // Grab all the numbers that start with 1
    const firstFloor = rooms.filter((room) => String(room)[0] == 1)

    // Grab all the rooms that start with 2
    const secondFloor = rooms.filter((room) => String(room)[0] == 2)

    // Grab all the rooms that start with 3
    const thirdFloor = rooms.filter((room) => String(room)[0] == 3)

    // Grab all the rooms that start with 4
    const fourthFloor = rooms.filter((room) => String(room)[0] == 4)

    // Grab all the rooms that start with 5
    const fifthFloor = rooms.filter((room) => String(room)[0] == 5)
    

  return (
    <div className='roomsScheduler'>
        <div className="roomSchedulerItems container">
            <div className="roomSchedulerHeader">
                <h1>Total Rooms ({rooms.length})</h1>
                <div className="headerRight">
                    <h2>Occupied Rooms ({occupiedRooms.length})</h2>
                    <h2>Available Rooms ({rooms.length - occupiedRooms.length})</h2>
                </div>
            </div>
            <div className="floor">
                <h2>Floor 1</h2>
                <div className='floorRooms'>
                    {firstFloor.map((item, idx) => (
                        <div className={`floorRoom ${occupiedRooms.includes(item) ? 'closed' : 'open'}`} key={item}>
                            <h3>Room #{item}</h3>
                            <div className={occupiedRooms.includes(item) ? 'closed' : 'open'}>{occupiedRooms.includes(item) ? <p><FaBed /> Occupied</p> : <p>Open</p>}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="floor">
                <h2>Floor 2</h2>
                <div className='floorRooms'>
                    {secondFloor.map((item, idx) => (
                        <div className={`floorRoom ${occupiedRooms.includes(item) ? 'closed' : 'open'}`} key={item}>
                            <h3>Room #{item}</h3>
                            <div className={occupiedRooms.includes(item) ? 'closed' : 'open'}>{occupiedRooms.includes(item) ? <p><FaBed /> Occupied</p> : <p>Open</p>}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="floor">
                <h2>Floor 3</h2>
                <div className='floorRooms'>
                    {thirdFloor.map((item, idx) => (
                        <div className={`floorRoom ${occupiedRooms.includes(item) ? 'closed' : 'open'}`} key={item}>
                            <h3>Room #{item}</h3>
                            <div className={occupiedRooms.includes(item) ? 'closed' : 'open'}>{occupiedRooms.includes(item) ? <p><FaBed /> Occupied</p> : <p>Open</p>}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="floor">
                <h2>Floor 4</h2>
                <div className='floorRooms'>
                    {fourthFloor.map((item, idx) => (
                        <div className={`floorRoom ${occupiedRooms.includes(item) ? 'closed' : 'open'}`} key={item}>
                            <h3>Room #{item}</h3>
                            <div className={occupiedRooms.includes(item) ? 'closed' : 'open'}>{occupiedRooms.includes(item) ? <p><FaBed /> Occupied</p> : <p>Open</p>}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="floor">
                <h2>Floor 5</h2>
                <div className='floorRooms'>
                    {fifthFloor.map((item, idx) => (
                        <div className={`floorRoom ${occupiedRooms.includes(item) ? 'closed' : 'open'}`} key={item}>
                            <h3>Room #{item}</h3>
                            <div className={occupiedRooms.includes(item) ? 'closed' : 'open'}>{occupiedRooms.includes(item) ? <p><FaBed /> Occupied</p> : <p>Open</p>}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default RoomsScheduler