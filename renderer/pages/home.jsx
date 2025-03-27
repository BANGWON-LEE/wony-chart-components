import React, { useState } from 'react'
import { dummyData } from '../data/dummy'
import AskChart from '../components/chart/AskChart'
// import '../global.css'

export default function App() {
  const [data, setData] = useState(dummyData)

  return (
    <React.Fragment>
      <AskChart type="line" data={data} width={1300} height={480} />
      <AskChart type="mixed" data={data} width={1300} height={480} />
      <AskChart type="bar" data={data} width={1300} height={480} />
      <AskChart type="stackBar" data={data} width={1300} height={480} />
    </React.Fragment>
  )
}
