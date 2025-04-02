import { CategoryScale } from 'chart.js'
import { Chart } from 'chart.js/auto'
import LineMain from './line/LineMain'
import { useState } from 'react'
import { setInitialLineStyle, setLineData } from './line/lineData'
import StyleCustomFilter from './StyleCustomFilter'
import { setInitialMixedStyle, setMixedData } from './mixied/mixedData'
import MixedMain from './mixied/mixedMain'
import BarMain from './bar/BarMain'
import { setBarData, setInitialBarStyle } from './bar/barData'
import StackBarMain from './stack_bar/StackBarMain'
import {
  setInitialStackBarStyle,
  setStackBarData,
} from './stack_bar/stackBarData'
import { formatData } from './common/common'

export default function AskChart(props) {
  const { type, data, width, height, chartName } = props
  // console.log('key b', chartName)

  const lineData = formatData(data) // 데이터를 차트에 넣기위 해 정리함
  const mixiedData = formatData(data) // 데이터를 차트에 넣기위 해 정리함
  const barData = formatData(data) // 데이터를 차트에 넣기위 해 정리함
  const stackBarData = formatData(data) // 데이터를 차트에 넣기위 해 정리함

  const styleDataArr = function () {
    switch (type) {
      case 'line':
        return setInitialLineStyle(lineData, chartName)
      case 'mixed':
        return setInitialMixedStyle(mixiedData, chartName)
      case 'bar':
        return setInitialBarStyle(barData, chartName)
      case 'stackBar':
        return setInitialStackBarStyle(stackBarData, chartName)
    }
  }
  const [styleState, setStyleState] = useState(styleDataArr)

  const resultLineData = setLineData(lineData, styleState)
  const resultMixedData = setMixedData(lineData, styleState)
  const resultBarData = setBarData(lineData, styleState)
  const resultStackBarData = setStackBarData(lineData, styleState)

  const [openCustomFilterModalState, setOpenCustomFilterModalState] =
    useState(false)

  function handleOpenStyleFilterModal() {
    setOpenCustomFilterModalState(!openCustomFilterModalState)
  }

  switch (type) {
    case 'line':
      return (
        <>
          <LineMain data={resultLineData} width={width} height={height} />
          <button onClick={() => handleOpenStyleFilterModal()}>open</button>
          {openCustomFilterModalState && (
            <StyleCustomFilter
              closeModalBtn={handleOpenStyleFilterModal}
              styleState={styleState}
              setStyleState={setStyleState}
              type={type}
              chartName={chartName}
            />
          )}
        </>
      )

    case 'mixed':
      return (
        <>
          <MixedMain data={resultMixedData} width={width} height={height} />
          <div>
            <button onClick={() => handleOpenStyleFilterModal()}>open</button>
          </div>
          {openCustomFilterModalState && (
            <StyleCustomFilter
              closeModalBtn={handleOpenStyleFilterModal}
              styleState={styleState}
              setStyleState={setStyleState}
              type={type}
            />
          )}
        </>
      )
    case 'bar':
      return (
        <>
          <BarMain data={resultBarData} width={width} height={height} />
          <div>
            <button onClick={() => handleOpenStyleFilterModal()}>open</button>
          </div>
          {openCustomFilterModalState && (
            <StyleCustomFilter
              closeModalBtn={handleOpenStyleFilterModal}
              styleState={styleState}
              setStyleState={setStyleState}
              type={type}
            />
          )}
        </>
      )
    case 'stackBar':
      return (
        <>
          <StackBarMain
            data={resultStackBarData}
            width={width}
            height={height}
          />
          <div>
            <button onClick={() => handleOpenStyleFilterModal()}>open</button>
          </div>
          {openCustomFilterModalState && (
            <StyleCustomFilter
              closeModalBtn={handleOpenStyleFilterModal}
              styleState={styleState}
              setStyleState={setStyleState}
              type={type}
            />
          )}
        </>
      )

    default:
      return <div>차트를 선택해주세요</div>
  }
}
