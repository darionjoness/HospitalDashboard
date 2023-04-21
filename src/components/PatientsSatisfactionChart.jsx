import { useSelector } from 'react-redux'
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PatientsSatisfactionChart = () => {

    // Bring in the patients from the store
    const patients = useSelector((state) => state.patients.patients)

    // Bring in newPatients from the localStorage
    const newPatients = JSON.parse(localStorage.getItem('patients')) || []

     // spread patients and newPatients into new arr
     const allPatients = [...patients, ...newPatients]

    //  filter out the patients with low satisfaction
     const lowSatisfaction = allPatients.filter((patient) => patient.satisfaction === 'low')

    //  filter out the patients with medium satisfaction
     const medSatisfaction = allPatients.filter((patient) => patient.satisfaction === 'medium')

    //  filter out the patiens with high satisfaction
     const highSatisfaction = allPatients.filter((patient) => patient.satisfaction === 'high')

     const data = {
        labels: ['Low', 'Medium', 'High'],
        datasets: [
            {
                label: 'Patient Satisfaction',
                data: [lowSatisfaction.length, medSatisfaction.length, highSatisfaction.length],
                backgroundColor: ['#EC6B56', '#FFC154', '#47B39C']
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
    <div className='patientSatisfaction'>
        <div className="patientSatisfactionItems">
            <h2>Patient Satisfaction</h2>
            <Pie data={data} options={options} />
            <small>*Shows the satistfaction recorded by our patients</small>
        </div>
    </div>
  )
}

export default PatientsSatisfactionChart