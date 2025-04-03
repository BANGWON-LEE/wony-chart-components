import { getStorage } from '../common/common'
import { colorArr } from '../style/styleElement'

export function setBarData(data, styleState) {
  const timePropertyName = 'time' // api를 통해서 받아오은 시간 값 프로퍼티 명을 입력하세요
  const labels = data[timePropertyName]

  const dataTitle = Object.keys(data)
  const notLabelTitleArr = dataTitle.filter(
    el => el.toString() !== timePropertyName
  )

  // console.log('styleState', styleState)

  return {
    labels,
    datasets: notLabelTitleArr.map((line, index) => ({
      type: 'bar',
      label: line.toString(), //그래프 분류되는 항목
      data: data[line], //실제 그려지는 데이터(Y축 숫자)
      backgroundColor: styleState?.[index].backgroundColor, //마우스 호버시 나타나는 분류네모 표시 bg
      borderRadius: styleState?.[index].borderRadius,
      barThickness: styleState?.[index].barThickness,
    })),
  }
}

export function setInitialBarStyle(lineData, uniqueChartName) {
  const timePropertyName = 'time' // api를 통해서 받아오은 시간 값 프로퍼티 명을 입력하세요
  const dataTitle = Object.keys(lineData)
  const notLabelTitleArr = dataTitle.filter(
    el => el.toString() !== timePropertyName
  )

  const styleArr = getStorage(uniqueChartName)

  const sizeLineData = Object.keys(notLabelTitleArr).length // time을 제외한 속성의 개수
  const styleStateObjArr = Array.from({ length: sizeLineData }, (_, index) => ({
    id: 'bar' + index,
    name: notLabelTitleArr[index],
    backgroundColor: styleArr?.[index].backgroundColor || colorArr[index].rgb, //마우스 호버시 나타나는 분류네모 표시 bg
    barThickness: styleArr?.[index].barThickness || 55,
    borderRadius: 10,
    type: 'bar',
  }))

  return styleStateObjArr
}
