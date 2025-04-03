import React, { useState } from 'react'
import { dummyData, generateDataArray } from '../data/dummy'
import AskChart from '../components/chart/AskChart'
import { formatData } from '../components/chart/common/common'
// import '../global.css'

export default function App() {
  const manyDummyData = generateDataArray()
  const [data, setData] = useState(formatData(manyDummyData))

  console.log('정렬한 데이터 형식', data)

  return (
    <React.Fragment>
      <AskChart
        type="line"
        data={data}
        width={1700}
        height={480}
        uniqueChartName={'test1'}
        timePropertyName={'time'}
      />
      <AskChart
        type="mixed"
        data={data}
        width={1700}
        height={480}
        uniqueChartName={'test2'}
        timePropertyName={'time'}
      />
      <AskChart
        type="bar"
        data={data}
        width={1700}
        height={480}
        uniqueChartName={'test3'}
        timePropertyName={'time'}
      />
      <AskChart
        type="stackBar"
        data={data}
        width={1700}
        height={480}
        uniqueChartName={'test4'}
        timePropertyName={'time'}
      />
      <AskChart
        type="mixedStackBar"
        data={data}
        width={1700}
        height={480}
        uniqueChartName={'test2S'}
        timePropertyName={'time'}
      />
    </React.Fragment>
  )
}
