import React, { useState } from 'react'
import { dummyData, generateDataArray } from '../data/dummy'
import AskChart from '../components/chart/AskChart'
import { formatData } from '../components/chart/common/common'

export default function App() {
  const manyDummyData = generateDataArray()
  const [data, setData] = useState(formatData(manyDummyData))

  return (
    <React.Fragment>
      <div style={{ margin: '210px 0px', overflow: 'scroll' }}>
        <AskChart
          type="line"
          data={data}
          width={1700}
          height={480}
          uniqueChartName={'test1'}
          timePropertyName={'time'}
        />
      </div>
      <div style={{ margin: '210px 0px', overflow: 'scroll' }}>
        <AskChart
          type="line"
          data={data}
          width={1700}
          height={480}
          uniqueChartName={'test12'}
          timePropertyName={'time'}
        />
      </div>
      <div style={{ margin: '210px 0px' }}>
        <AskChart
          type="mixed"
          data={data}
          width={1700}
          height={480}
          uniqueChartName={'test2'}
          timePropertyName={'time'}
        />
      </div>
      <div style={{ margin: '210px 0px' }}>
        <AskChart
          type="bar"
          data={data}
          width={1700}
          height={480}
          uniqueChartName={'test3'}
          timePropertyName={'time'}
        />
      </div>
      <div style={{ margin: '210px 0px' }}>
        <AskChart
          type="stackBar"
          data={data}
          width={1700}
          height={480}
          uniqueChartName={'test4'}
          timePropertyName={'time'}
        />
      </div>
      <div style={{ margin: '210px 0px', overflow: 'scroll' }}>
        {' '}
        <AskChart
          type="mixedStackBar"
          data={data}
          width={1700}
          height={480}
          uniqueChartName={'test2S'}
          timePropertyName={'time'}
        />
      </div>
    </React.Fragment>
  )
}
