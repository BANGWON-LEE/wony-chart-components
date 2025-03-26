import { useState } from 'react'
import ChartType from './ChartType'
import { formatData, setInitialStyle, setLineData } from './line/lineData'
import StyleCustomFilter from './StyleCustomFilter'
import { colorArr } from './style/styleElement'

export default function AskChart(props) {
  const { type, data } = props

  return (
    <>
      <ChartType type={type} data={data} />
    </>
  )
}
