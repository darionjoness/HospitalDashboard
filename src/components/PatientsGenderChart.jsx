import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {useSelector} from 'react-redux'

ChartJS.register(ArcElement, Tooltip, Legend);

const PatientsGenderChart = () => {

    // Bring in patients from the store
    const patients = useSelector((state) => state.patients.patients)

    // Bring in patients from the localStorage
    const newPatients = JSON.parse(localStorage.getItem('patients')) || []

    // Put newPatients and patients together to get allPatients
    const allPatients = [...patients, ...newPatients]

    // Filter out the malePatients from allPatients
    const malePatients = allPatients.filter((patient) => patient.gender === 'Male')

    // Filter out the femalePatients from allPatients
    const femalePatients = allPatients.filter((patient) => patient.gender === 'Female')

    
    const data = {
      labels: ['Male', 'Female'],
      datasets: [
        {
          label: 'Patient Genders',
          data: [malePatients.length, femalePatients.length],
          backgroundColor: ['lightblue', 'pink']
        }
      ]
    }

    const options = {
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }

  return (
    <div className='patientsGenderChart'>
        <div className="patientsGenderChartItems">
          <h2>Patients Gender Chart</h2>
          <Pie data={data} options={options} />
          <small>*Shows the genders of the current patients</small>
        </div>
    </div>  
  )
}

export default PatientsGenderChart