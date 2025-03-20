import { Chart, Line } from 'react-chartjs-2'
import { setLineData } from './lineData'

export default function LineMain(props) {
  const { data } = props

  const options = {
    responsive: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  }

  return (
    <div>
      <div>fef</div>
      <div>
        <Chart data={data} options={options} width={1900} height={300} />
      </div>
    </div>
  )
}
