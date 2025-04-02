import { getStorage } from '../common/common'
import { colorArr } from '../style/styleElement'

export function setMixedData(data, styleState, timePropertyName) {
  const labels = data[timePropertyName]

  const dataTitle = Object.keys(data)
  const notLabelTitleArr = dataTitle.filter(
    el => el.toString() !== timePropertyName
  )

  return {
    labels,
    datasets: notLabelTitleArr.map((line, index) => ({
      type: styleState?.[index].type,
      label: line.toString(), //그래프 분류되는 항목
      data: data[line], //실제 그려지는 데이터(Y축 숫자)
      borderColor: styleState?.[index].borderColor, //그래프 선 color
      backgroundColor: styleState?.[index].backgroundColor, //마우스 호버시 나타나는 분류네모 표시 bg
      borderWidth: styleState?.[index].borderWidth,
      barThickness: styleState?.[index].barThickness,
    })),
  }
}

export function setInitialMixedStyle(
  lineData,
  uniqueChartName,
  timePropertyName
) {
  const dataTitle = Object.keys(lineData)
  const notLabelTitleArr = dataTitle.filter(
    el => el.toString() !== timePropertyName
  )
  const sizeLineData = Object.keys(notLabelTitleArr).length // time을 제외한 속성의 개수
  const mixedTypeArr = Array.from(
    { length: sizeLineData - 1 },
    (_, index) => 'bar'
  )
  const mixedType = ['line', ...mixedTypeArr]

  const styleArr = getStorage(uniqueChartName)

  const styleStateObjArr = Array.from({ length: sizeLineData }, (_, index) => ({
    id: 'mixed' + index,
    name: notLabelTitleArr[index],
    borderColor: styleArr?.[index].borderColor || colorArr[index].rgb, //그래프 선 color
    backgroundColor: styleArr?.[index].backgroundColor || colorArr[index].rgb, //마우스 호버시 나타나는 분류네모 표시 bg
    borderWidth: styleArr?.[index].borderWidth || 5,
    barThickness: styleArr?.[index].barThickness || 55,
    type: styleArr?.[index].type || mixedType[index],
  }))

  return styleStateObjArr
}
