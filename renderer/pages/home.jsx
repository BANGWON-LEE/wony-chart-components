import React, { useState } from 'react'
import { dummyData } from '../data/dummy'
import AskChart from '../components/chart/AskChart'

export default function HomePage() {
  const [data, setData] = useState(dummyData)

  return (
    <React.Fragment>
      <AskChart type="line" data={data} />
      <AskChart type="mixed" data={data} />
    </React.Fragment>
  )
}
