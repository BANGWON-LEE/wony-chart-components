import { Chart } from 'react-chartjs-2'
import { setLineData } from './lineData'

export default function LineMain(props) {
  const { data } = props

  const options = {
    responsive: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        position: 'top',
        text: 'Chart.js Line Chart',
      },
    },
    scales: {
      x: {
        border: {
          dash: [7, 9],
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  }

  return (
    <div>
      <div>
        <Chart data={data} options={options} width={1900} height={300} />
      </div>
    </div>
  )
}
