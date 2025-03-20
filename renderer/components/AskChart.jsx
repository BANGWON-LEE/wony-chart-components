import ChartMain from './chart/ChartMain'
import { setLineData } from './chart/line/lineData'
import StyleCustomFilter from './chart/StyleCustomFilter'

export default function AskChart(props) {
  const { type, data } = props

  const lineData = setLineData(data)

  return (
    <>
      <ChartMain type={type} data={lineData} />
      <StyleCustomFilter />
    </>
  )
}
