import React, {useState} from 'react';
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
import SevenDayPatientChart from './SevenDayPatientChart';

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



const ThirtyDayPatientChart = () => {
    const [changeChart, setChangeChart] = useState(false)

    // Bring in patientData from the store
    const patientData = useSelector((state) => state.patientChartData.patientChartData)

    // Map the dates to a new date arr, slice the year out of them
    const dates = patientData.map((patient) => patient.date.slice(5))

    // Map the totalPatients data to new arr
    const totalPatients = patientData.map((patient) => patient.totalPatients)


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            }
        }
      }
    
      const data = {
        labels: dates,
        datasets: [
            {
                fill: true,
                label: 'Total Patients',
                data: totalPatients,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ]
      }

      // Create changeChartView function that takes in boolean
      const changeChartView = (bool) => {
        setChangeChart(bool)
      }

  return (
    <div className='thirtyDayPatientChart'>
      {changeChart ? <h2>Seven Day Total Patients Chart</h2> : <h2>Thirty Day Total Patients Chart</h2>}
      <div className="switchChartBtns">
        <button className={changeChart ? '' : 'show'} onClick={() => changeChartView(false)}>30D</button>
        <button className={changeChart ? 'show' : ''} onClick={() => changeChartView(true)}>7D</button>
      </div>
        {changeChart ? <SevenDayPatientChart /> :
        <div className="thirtyDayPatientChartItems">
            <Line options={options} data={data} />
        </div>}
    </div>
  )
}

export default ThirtyDayPatientChart