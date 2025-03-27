import { CategoryScale } from 'chart.js'
import { Chart } from 'chart.js/auto'
import LineMain from './line/LineMain'
import { useState } from 'react'
import {
  formatLineData,
  setInitialLineStyle,
  setLineData,
} from './line/lineData'
import StyleCustomFilter from './StyleCustomFilter'
import {
  formatMixedData,
  setInitialMixedStyle,
  setMixedData,
} from './mixied/mixedData'
import MixedMain from './mixied/mixedMain'
import BarMain from './bar/BarMain'
import { formatBarData, setBarData, setInitialBarStyle } from './bar/barData'
import StackBarMain from './stack_bar/StackBarMain'
import {
  formatStackBarData,
  setInitialStackBarStyle,
  setStackBarData,
} from './stack_bar/stackBarData'

export default function ChartType(props) {
  const { type, data, width, hegiht } = props

  const lineData = formatLineData(data) // 데이터를 속성별로 정리
  const mixiedData = formatMixedData(data) // 데이터를 속성별로 정리
  const barData = formatBarData(data) // 데이터를 속성별로 정리
  const stackBarData = formatStackBarData(data) // 데이터를 속성별로 정리

  const styleDataArr = function () {
    switch (type) {
      case 'line':
        return setInitialLineStyle(lineData)
      case 'mixed':
        return setInitialMixedStyle(mixiedData)
      case 'bar':
        return setInitialBarStyle(barData)
      case 'stackBar':
        return setInitialStackBarStyle(stackBarData)
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
          <LineMain data={resultLineData} width={width} hegiht={hegiht} />
          <button onClick={() => handleOpenStyleFilterModal()}>open</button>
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

    case 'mixed':
      return (
        <>
          <MixedMain data={resultMixedData} width={width} hegiht={hegiht} />
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
          <BarMain data={resultBarData} width={width} hegiht={hegiht} />
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
            hegiht={hegiht}
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
