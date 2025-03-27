import ChartType from './ChartType'

export default function AskChart(props) {
  const { type, data, width, height } = props

  return (
    <>
      <ChartType type={type} data={data} width={width} height={height} />
    </>
  )
}
