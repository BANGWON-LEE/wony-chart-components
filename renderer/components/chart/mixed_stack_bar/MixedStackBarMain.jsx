import { Chart } from 'react-chartjs-2'

export default function MixedStackBarMain(props) {
  const { data, width, height } = props

  const zoomOptions = {
    pan: {
      enabled: true,
      mode: 'x',
    },
    zoom: {
      wheel: {
        enabled: false,
      },
      pinch: {
        enabled: true,
      },
      mode: 'x',
    },
  }

  const options = {
    responsive: false,
    plugins: {
      zoom: zoomOptions,
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        position: 'top',
        text: 'Chart.js MixedStackBar Chart',
      },
    },
    scales: {
      x: {
        stacked: true,
        border: {
          dash: [7, 9],
        },
      },
      y: {
        stacked: true,
        grid: {
          display: false,
        },
      },
    },
  }

  return (
    <div>
      <div>
        <Chart data={data} options={options} width={width} height={height} />
      </div>
    </div>
  )
}
