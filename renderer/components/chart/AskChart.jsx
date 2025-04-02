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
import {
  setInitialMixedStackBarStyle,
  setMixedStackBarData,
} from './mixed_stack_bar/mixedStackBarData'
import MixedStackBarMain from './mixed_stack_bar/mixedStackBarMain'

export default function AskChart(props) {
  const { type, data, width, height, uniqueChartName, timePropertyName } = props

  const styleDataArr = function () {
    switch (type) {
      case 'line':
        return setInitialLineStyle(data, uniqueChartName, timePropertyName)
      case 'mixed':
        return setInitialMixedStyle(data, uniqueChartName, timePropertyName)
      case 'bar':
        return setInitialBarStyle(data, uniqueChartName, timePropertyName)
      case 'stackBar':
        return setInitialStackBarStyle(data, uniqueChartName, timePropertyName)
      case 'mixedStackBar':
        return setInitialMixedStackBarStyle(
          data,
          uniqueChartName,
          timePropertyName
        )
    }
  }
  const [styleState, setStyleState] = useState(styleDataArr)

  const resultLineData = setLineData(data, styleState, timePropertyName)
  const resultMixedData = setMixedData(data, styleState, timePropertyName)
  const resultBarData = setBarData(data, styleState, timePropertyName)
  const resultStackBarData = setStackBarData(data, styleState, timePropertyName)
  const resultMixedStackBarData = setMixedStackBarData(
    data,
    styleState,
    timePropertyName
  )

  const [openCustomFilterModalState, setOpenCustomFilterModalState] =
    useState(false)

  function handleOpenStyleFilterModal() {
    setOpenCustomFilterModalState(!openCustomFilterModalState)
  }

  const chartUi = function () {
    switch (type) {
      case 'line':
        return <LineMain data={resultLineData} width={width} height={height} />

      case 'mixed':
        return (
          <MixedMain data={resultMixedData} width={width} height={height} />
        )
      case 'bar':
        return <BarMain data={resultBarData} width={width} height={height} />
      case 'stackBar':
        return (
          <StackBarMain
            data={resultStackBarData}
            width={width}
            height={height}
          />
        )
      case 'mixedStackBar':
        return (
          <MixedStackBarMain
            data={resultMixedStackBarData}
            width={width}
            height={height}
          />
        )

      default:
        return <div>차트를 선택해주세요</div>
    }
  }

  return (
    <>
      {chartUi()}
      <button onClick={() => handleOpenStyleFilterModal()}>open</button>
      {openCustomFilterModalState && (
        <StyleCustomFilter
          closeModalBtn={handleOpenStyleFilterModal}
          styleState={styleState}
          setStyleState={setStyleState}
          type={type}
          uniqueChartName={uniqueChartName}
        />
      )}
    </>
  )
}
