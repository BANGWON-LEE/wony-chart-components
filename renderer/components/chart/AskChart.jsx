import ChartType from './ChartType'
import { formatLineData, setLineData } from './line/lineData'
import StyleCustomFilter from './StyleCustomFilter'

export default function AskChart(props) {
  const { type, data } = props
  const lineData = setLineData(formatLineData(data))

  return (
    <>
      <ChartType type={type} data={lineData} />
      <StyleCustomFilter />
    </>
  )
}
