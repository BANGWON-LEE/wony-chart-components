import React, { useState } from 'react'
import { dummyData } from '../data/dummy'
import AskChart from '../components/chart/AskChart'
import { formatData } from '../components/chart/common/common'
// import '../global.css'

export default function App() {
  const [data, setData] = useState(formatData(dummyData))

  return (
    <React.Fragment>
      <AskChart
        type="line"
        data={data}
        width={1300}
        height={480}
        uniqueChartName={'test1'}
      />
      <AskChart
        type="mixed"
        data={data}
        width={1300}
        height={480}
        uniqueChartName={'test2'}
      />
      <AskChart
        type="bar"
        data={data}
        width={1300}
        height={480}
        uniqueChartName={'test3'}
      />
      <AskChart
        type="stackBar"
        data={data}
        width={1300}
        height={480}
        uniqueChartName={'test4'}
      />
      <AskChart
        type="mixedStackBar"
        data={data}
        width={1300}
        height={480}
        uniqueChartName={'test2M'}
      />
    </React.Fragment>
  )
}
