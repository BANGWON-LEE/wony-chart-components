import {
  Chart as ChartJS,
  LineController,
  LineElement,
  BarController,
  BarElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  LineController,
  LineElement,
  BarController,
  BarElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
)
import zoomPlugin from 'chartjs-plugin-zoom'

import LineMain from './line/LineMain'
import { useState } from 'react'
import {
  setInitialLineStyle,
  setInitialOption,
  setLineData,
  setOptionLineData,
} from './line/lineData'
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

export default function Pipe(props) {
  const { type, data, width, height, uniqueChartName, timePropertyName } = props

  const styleDataArr = function () {
    // 타입에 결정되며, 초기 환경을 설정해주는 함수의 리턴값을 가져옴
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

  const [styleState, setStyleState] = useState(styleDataArr()) // 위에서 할당한 함수 리턴값을 초기값으로 잡아준다.

  const initialOptionData = setInitialOption(uniqueChartName)

  // StyleCustomFilter 컴포넌트에서 수정 및 변경한 값([styleState, setStyleState]) 및 차트에 들어 갈 값을 아래 코드, 변수들에 할당한다.
  // 그리고 chartUi의 각 컴포넌트에 데이터로 넘겨준다.
  const [chartOptionState, setChartOptionState] = useState(initialOptionData)
  const resultLineData = setLineData(data, styleState, timePropertyName)
  // const resultLineOptionData = setOptionLineData(chartOptionState)
  const resultMixedData = setMixedData(data, styleState, timePropertyName)
  const resultBarData = setBarData(data, styleState, timePropertyName)
  const resultStackBarData = setStackBarData(data, styleState, timePropertyName)
  const resultMixedStackBarData = setMixedStackBarData(
    data,
    styleState,
    timePropertyName
  )
  // 차트의 옵션에 관한 설정을 담은 state

  console.log('resultC', chartOptionState)
  const [openCustomFilterModalState, setOpenCustomFilterModalState] =
    useState(false)

  function handleOpenStyleFilterModal() {
    setOpenCustomFilterModalState(!openCustomFilterModalState)
  }

  const chartUi = function () {
    // 조건에 따라 차트 컴포넌트를 return 해주는 함수 표현식
    switch (type) {
      case 'line':
        return (
          <LineMain
            data={resultLineData}
            options={chartOptionState}
            width={width}
            height={height}
          />
        )

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
      <button onClick={() => handleOpenStyleFilterModal()}>open</button>
      {chartUi()}
      {openCustomFilterModalState && (
        <StyleCustomFilter
          closeModalBtn={handleOpenStyleFilterModal}
          styleState={styleState}
          chartOptionState={chartOptionState}
          setStyleState={setStyleState}
          setChartOptionState={setChartOptionState}
          type={type}
          uniqueChartName={uniqueChartName}
        />
      )}
    </>
  )
}
