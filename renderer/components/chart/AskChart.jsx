import dynamic from 'next/dynamic'

const Pipe = dynamic(() => import('./Pipe'), {
  ssr: false, // 서버사이드 렌더링 비활성화!
})

export default function AskChart(props) {
  const { type, data, width, height, uniqueChartName, timePropertyName } = props

  return (
    <Pipe
      type={type}
      data={data}
      width={width}
      height={height}
      uniqueChartName={uniqueChartName}
      timePropertyName={timePropertyName}
    />
  )
}
