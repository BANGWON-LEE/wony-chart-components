import { colorArr } from '../style/styleElement'

export function formatMixedData(data) {
  const result = data.data.reduce((acc, obj) => {
    Object.keys(obj).forEach(key => {
      acc[key] = acc[key] || []
      acc[key].push(obj[key])
    })
    return acc
  }, {})

  return result
}

export function setMixedData(data, styleState) {
  const timePropertyName = 'time' // api를 통해서 받아오은 시간 값 프로퍼티 명을 입력하세요
  const labels = data[timePropertyName]

  const dataTitle = Object.keys(data)
  const notLabelTitleArr = dataTitle.filter(
    el => el.toString() !== timePropertyName
  )

  return {
    labels,
    datasets: notLabelTitleArr.map((line, index) => ({
      type: styleState[index].type,
      label: line.toString(), //그래프 분류되는 항목
      data: data[line], //실제 그려지는 데이터(Y축 숫자)
      borderColor: styleState[index].borderColor, //그래프 선 color
      backgroundColor: styleState[index].backgroundColor, //마우스 호버시 나타나는 분류네모 표시 bg
      borderWidth: styleState[index].borderWidth,
      barThickness: styleState[index].barThickness,
    })),
  }
}

export function setInitialMixedStyle(lineData) {
  const timePropertyName = 'time' // api를 통해서 받아오은 시간 값 프로퍼티 명을 입력하세요
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

  const styleStateObjArr = Array.from({ length: sizeLineData }, (_, index) => ({
    id: 'mixed' + index,
    name: notLabelTitleArr[index],
    borderColor: colorArr[index].rgb, //그래프 선 color
    backgroundColor: colorArr[index].rgb, //마우스 호버시 나타나는 분류네모 표시 bg
    borderWidth: 5,
    barThickness: 55,
    type: mixedType[index],
  }))

  return styleStateObjArr
}
