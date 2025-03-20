import React, { useState } from 'react'
import { formatLineData } from '../components/chart/line/lineData'
import { dummyData } from '../data/dummy'
import AskChart from '../components/AskChart'

export default function HomePage() {
  const [data, setData] = useState(dummyData)

  const resultFormatLineData = formatLineData(data)

  console.log('result', resultFormatLineData)

  return (
    <React.Fragment>
      <AskChart type="line" data={resultFormatLineData} />
    </React.Fragment>
  )
}
