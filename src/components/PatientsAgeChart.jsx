import { useSelector } from 'react-redux'
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PatientsAgeChart = () => {

    // Bring in the patients from the store
    const patients = useSelector((state) => state.patients.patients)

    // Bring in newPatients from the localStorage
    const newPatients = JSON.parse(localStorage.getItem('patients')) || []

    // spread patients and newPatients into new arr
    const allPatients = [...patients, ...newPatients]

    // Grab patients twenty years old and under
    const patientsUnderTwenty = allPatients.filter((patient) => patient.age > 0 && patient.age < 21 )

    // Grab the patients in between 21 and 40
    const patientsTwentyToFourty = allPatients.filter((patient) => patient.age > 20 && patient.age < 41)

    // Grab the patients in between age 41-60
    const patientsFourtyToSixty = allPatients.filter((patient) => patient.age > 40 && patient.age < 61)

    // Grab the patients 60+ years old
    const patientsSixtyPlus = allPatients.filter((patient) => patient.age > 60 && patient.age < 110)

    const data = {
        labels: ['0-20','21-40', '41-60', '60+'],
        datasets: [
            {
                label: 'Patients Ages',
                data: [patientsUnderTwenty.length, patientsTwentyToFourty.length, patientsFourtyToSixty.length, patientsSixtyPlus.length],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ]
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
    <div className='patientsAgeChart'>
        <div className="patientAgeChartItems">
            <h2>Patients Age Chart</h2>
            <Pie data={data} options={options} />
            <small>*Shows the ages of the current patients</small>
        </div>
    </div>
  )
}

export default PatientsAgeChart