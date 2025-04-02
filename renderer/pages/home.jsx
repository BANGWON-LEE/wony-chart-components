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
        timePropertyName={'time'}
      />
      <AskChart
        type="mixed"
        data={data}
        width={1300}
        height={480}
        uniqueChartName={'test2'}
        timePropertyName={'time'}
      />
      <AskChart
        type="bar"
        data={data}
        width={1300}
        height={480}
        uniqueChartName={'test3'}
        timePropertyName={'time'}
      />
      <AskChart
        type="stackBar"
        data={data}
        width={1300}
        height={480}
        uniqueChartName={'test4'}
        timePropertyName={'time'}
      />
      <AskChart
        type="mixedStackBar"
        data={data}
        width={1300}
        height={480}
        uniqueChartName={'test2M'}
        timePropertyName={'time'}
      />
    </React.Fragment>
  )
}
