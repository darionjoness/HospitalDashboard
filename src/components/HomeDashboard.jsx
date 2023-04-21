import React from 'react'
import { useSelector } from 'react-redux'
import BedOccupancyRate from './BedOccupancyRate'
import CurrentCnas from './CurrentCnas'
import CurrentDoctorsDash from './CurrentDoctorsDash'
import CurrentNursesDash from './CurrentNursesDash'
import PatientsAgeChart from './PatientsAgeChart'
import PatientsGenderChart from './PatientsGenderChart'
import PatientsSatisfactionChart from './PatientsSatisfactionChart'
import RecentlyAdmittedPatients from './RecentlyAdmittedPatients'
import ThirtyDayPatientChart from './ThirtyDayPatientChart'
import TotalPatientsDashItem from './TotalPatientsDashItem'

const HomeDashboard = () => {


  return (
    <div className='homeDashboard'>
        <div className="homeDashboardItems container">
          <h1>Hospital Dashboard</h1>
          <p>Welcome to your Dashboard</p>
            <div className='dashboardFirstRow'>
                <TotalPatientsDashItem />
                <CurrentNursesDash />
                <CurrentDoctorsDash />
                <CurrentCnas />
            </div>
            <div className="dashboardCharts">
                <PatientsGenderChart />
                <PatientsAgeChart />
                <PatientsSatisfactionChart />
            </div>
            <div className="dashboardBottomRow">
              <ThirtyDayPatientChart />
              <BedOccupancyRate />
              <RecentlyAdmittedPatients />
            </div>
        </div>
    </div>
  )
}

export default HomeDashboard