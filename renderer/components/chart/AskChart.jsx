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
  const { type, data, width, height, uniqueChartName } = props

  const styleDataArr = function () {
    switch (type) {
      case 'line':
        return setInitialLineStyle(data, uniqueChartName)
      case 'mixed':
        return setInitialMixedStyle(data, uniqueChartName)
      case 'bar':
        return setInitialBarStyle(data, uniqueChartName)
      case 'stackBar':
        return setInitialStackBarStyle(data, uniqueChartName)
    }
  }
  const [styleState, setStyleState] = useState(styleDataArr)

  const resultLineData = setLineData(data, styleState)
  const resultMixedData = setMixedData(data, styleState)
  const resultBarData = setBarData(data, styleState)
  const resultStackBarData = setStackBarData(data, styleState)

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
              uniqueChartName={uniqueChartName}
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
              uniqueChartName={uniqueChartName}
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
              uniqueChartName={uniqueChartName}
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
              uniqueChartName={uniqueChartName}
            />
          )}
        </>
      )

    default:
      return <div>차트를 선택해주세요</div>
  }
}
