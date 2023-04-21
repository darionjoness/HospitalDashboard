import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import {useSelector} from 'react-redux'
  
  ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Filler,
      Legend
    );

const SevenDayPatientChart = () => {

    // Bring in patientData from the store
    const patientData = useSelector((state) => state.patientChartData.patientChartData)

    // Map the dates to a new date arr, slice the year out of them
    const dates = patientData.map((patient) => patient.date.slice(5))

    // Map the totalPatients data to new arr
    const totalPatients = patientData.map((patient) => patient.totalPatients)

    // Get last seven dates
    const sevenDates = dates.slice(-7)

    // Get last seven patient data
    const sevenPatients = totalPatients.slice(-7)

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            }
        }
      }
    
      const data = {
        labels: sevenDates,
        datasets: [
            {
                fill: true,
                label: 'Total Patients',
                data: sevenPatients,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ]
      }


  return (
    <div className='sevenDayPatient'>
        <div className="sevenDayPatientItems">
            <Line data={data} options={options} />
        </div>
    </div>
  )
}

export default SevenDayPatientChart