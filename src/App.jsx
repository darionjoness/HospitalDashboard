import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import MenuNav from './components/MenuNav'
import PatientsMenu from './components/PatientsMenu'
import patients from './data/patients'
import doctors from './data/doctors'
import nurses from './data/nurses'
import cnas from './data/cnas'
import patientChartData from './data/patientChartData'
import otherEmployees from './data/otherEmployees'
import { useDispatch, useSelector } from 'react-redux'
import {patientActions} from './store/patientsSlice'
import { doctorsActions } from './store/doctorsSlice'
import {nursesActions} from './store/nursesSlice'
import { cnasActions } from './store/cnasSlice'
import { otherEmployeesActions } from './store/otherEmployeesSlice'
import { patientChartActions } from './store/patientChartSlice'
import ContactEmployees from './components/ContactEmployees'
import DoctorsContact from './components/DoctorsContact'
import NursesContact from './components/NursesContact'
import CnasContact from './components/CnasContact'
import OtherEmployeesContact from './components/OtherEmployeesContact'
import HomeDashboard from './components/HomeDashboard'
import StaffMenu from './components/StaffMenu'
import RoomsScheduler from './components/RoomsScheduler'



function App() {

  // Setup dispatch hook
  const dispatch = useDispatch()

  // dispatch patients to the store
  dispatch(patientActions.setPatients(patients))

  // dispatch doctors to the store
  dispatch(doctorsActions.setDoctors(doctors))

  // dispatch nurses to the store
  dispatch(nursesActions.setNurses(nurses))

  // dispatch cnas to the store
  dispatch(cnasActions.setCnas(cnas))

  // dispatch otherEmployees to the store
  dispatch(otherEmployeesActions.setOtherEmployees(otherEmployees))

  // dispatch patientChartData to the store
  dispatch(patientChartActions.setPatientChartData(patientChartData))


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <div>
            <MenuNav currentStart={0} />
            <HomeDashboard />
          </div>
        } />

        <Route path='/patients' element={
          <div>
            <MenuNav currentStart={1} />
            <PatientsMenu />
          </div>
        } />

        <Route path='/staff' element={
          <div>
            <MenuNav currentStart={2} />
            <StaffMenu />
          </div>
        } />

        <Route path='/rooms' element={
          <div>
            <MenuNav currentStart={3} />
            <RoomsScheduler />
          </div>
        } />

        <Route path='/contact' element={
          <div className='employeesInfo'>
            <MenuNav currentStart={4} />
            <ContactEmployees />
            <DoctorsContact />
            <NursesContact />
            <CnasContact />
            <OtherEmployeesContact />
          </div>
        } />
      </Routes>
    </div>
  )
}

export default App
