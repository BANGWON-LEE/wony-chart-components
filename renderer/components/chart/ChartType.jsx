import { CategoryScale } from 'chart.js'
import { Chart } from 'chart.js/auto'
import LineMain from './line/LineMain'

export default function ChartMain(props) {
  const { type, data } = props

  switch (type) {
    case 'line':
      return <LineMain data={data} />

    case 'mixed':
      return <div>개발 중 입니다</div>
    default:
      return <div>차트를 선택해주세요</div>
  }
}
