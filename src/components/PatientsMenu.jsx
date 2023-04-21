import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchTermActions } from '../store/searchTermSlice';
import { AiOutlineSearch } from "react-icons/ai";
import { patientActions } from '../store/patientsSlice';
import { BsPersonAdd } from "react-icons/bs";
import PatientsMenuModal from './PatientsMenuModal';
import PatientAddedModal from './PatientAddedModal';

const PatientsMenu = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState('');
  const [viewModal, setViewModal] = useState(false)
  const [nowOpenRooms, setNowOpenRooms] = useState([])
  const [genderValue, setGenderValue] = useState('Male')
  const [patientAdded, setPatientAdded] = useState(false)

  // Setup dispatch hook
  const dispatch = useDispatch();
  
  // Setup inputRef hook
  const inputRef = React.useRef(null);

  // Bring in patients from the store
  const patients = useSelector((state) => state.patients.patients)

  // Bring in searchTerm state from store
  const searchTerm = useSelector(state => state.searchTerm.input);

  // Toggle Search bar
  const toggleSearchBar = () => {
    if (toggleSearch) {
      setToggleSearch(false);
      inputRef.current.blur();
    } else {
      setToggleSearch(true);
      inputRef.current.focus();
    }
  };

  // Bring in patients from localStorage
  const newPatients = JSON.parse(localStorage.getItem('patients')) || []

  // Copy patients array to sortedPatients
  let sortedPatients = [...patients, ...newPatients];


  // Sort sortedPatients
  sortedPatients.sort((a, b) => {
    let comparison = 0;
    if (a[sortField] > b[sortField]) {
      comparison = 1;
    } else if (a[sortField] < b[sortField]) {
      comparison = -1;
    }
    return sortDirection === 'asc' ? comparison : -comparison;
  });

  // Filter based on searchTerm
  sortedPatients = sortedPatients.filter(item => {
    if (searchTerm === '') {
      return item;
    } else if (
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return item;
    }
  });

  // Set asc to desc or desc to asc
  const handleSortClick = field => {
    if (field === sortField) {
      if (sortDirection === 'asc') {
        setSortDirection('desc');
      } else {
        setSortDirection('asc');
      }
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // Create toggleModal function
  const toggleModal = () => {
    setViewModal(!viewModal)
  }

  // Turn on overflow hidden when viewModal is true
  if(viewModal){
    document.body.style.overflow = 'hidden'
  }else{
    document.body.style.overflow = 'auto'
  }


  // Create handlePatientData function
  const handlePatientData = (data) => {
    // Close the modal
    setViewModal(false)
    setPatientAdded(true)

    // Grab first and last name and set it to fullName with a space in the middle
    const firstName = data.firstName
    const lastName = data.lastName
    const fullName = data.firstName + ' ' + data.lastName

    // Create newPatient object
    const newPatient = {
      ...data,
      name: fullName,
      id: Math.floor(Math.random() * 1000000),
      roomNumber: Number(selectValue),
      gender: genderValue,
      departureDate: null,
      familyMembers: [],
      medicines: [],
      satisfaction: ''
    }

    // Grab currentPatients from the localStorage
    const currentPatients = JSON.parse(localStorage.getItem('patients')) || []

    // Create a new object of all patients
    const allPatients = [...currentPatients, newPatient]

    // Set that new object to the localStorage
    localStorage.setItem('patients', JSON.stringify(allPatients))
}

  // Grab allRooms state from the store
  const allRooms = useSelector((state) => state.rooms.rooms)

  // Map out rooms to new array 
  const takenRooms = sortedPatients.map((patient) => patient.roomNumber)

  // Get all the openRooms
  const openRooms = allRooms.filter(room => !takenRooms.includes(room));

  // Create selectValue state and have default value as the first open room
  const [selectValue, setSelectValue] = useState(openRooms[0])

  // Create closeConfirmedPatient function
  const closeConfirmedPatient = () => {
    // setPatientAdded to false
    setPatientAdded(false)
  }
  
    return (
      <div className='patientsMenu'>
        <div className="patientsMenuItems container">
          <div className="patientsHeader">
            <h1>Current Patients ({sortedPatients.length})</h1> 
          </div>
          <div className="addPatientAndSearch">
            <div className={`searchAnimation ${toggleSearch ? 'show' : ''}`}>
              <button onClick={toggleSearchBar}><AiOutlineSearch /></button>
              <input ref={inputRef} value={searchTerm} onChange={(e) => dispatch(searchTermActions.setSearchInput(e.target.value))}  />
            </div>
            <button onClick={toggleModal} className='addPatientBtn'>
              <BsPersonAdd />
            </button>
          </div>
          <div className="patientTableWrapper">
            {sortedPatients.length > 0 ? <table className='patientTable'>
              <thead>
                <tr>
                <th onClick={() => handleSortClick('name')}>
                  Name
                  {sortField === 'name' &&
                    (sortDirection === 'asc' ? '▲' : '▼')}
                </th>
                <th onClick={() => handleSortClick('age')}>
                  Age
                  {sortField === 'age' &&
                    (sortDirection === 'asc' ? '▲' : '▼')}
                </th>
                <th onClick={() => handleSortClick('roomNumber')}>
                  Room Number
                  {sortField === 'roomNumber' &&
                    (sortDirection === 'asc' ? '▲' : '▼')}
                </th>
                <th onClick={() => handleSortClick('height')}>
                  Height
                  {sortField === 'height' &&
                    (sortDirection === 'asc' ? '▲' : '▼')}
                </th>
                <th onClick={() => handleSortClick('weight')}>
                  Weight
                  {sortField === 'weight' &&
                    (sortDirection === 'asc' ? '▲' : '▼')}
                </th>
                </tr>
              </thead>
              <tbody>
                {sortedPatients.map((patient, idx) => (
                  <tr className='patient' key={patient.id}>
                    <td>{patient.name}</td>
                    <td>{patient.age}</td>
                    <td>#{patient.roomNumber}</td>
                    <td>{patient.height}</td>
                    <td>{patient.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table> : <h2 className='noPatientsMsg'>No patients matching this name!</h2>}
          </div>
        </div>
          {viewModal ? <PatientsMenuModal genderValue={genderValue} genderOnChange={(e) => setGenderValue(e.target.value)} onChange={(e) => setSelectValue(e.target.value)} selectValue={selectValue} openRooms={openRooms} handlePatientData={handlePatientData} toggleModal={toggleModal} /> : ''}
          {patientAdded ? <PatientAddedModal closeConfirmedPatient={closeConfirmedPatient} patientAdded={patientAdded} /> : ''}
      </div>
    )
  }
  
  export default PatientsMenu
  
  