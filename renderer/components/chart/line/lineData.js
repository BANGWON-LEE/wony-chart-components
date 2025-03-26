import { colorArr } from '../style/styleElement'

export function formatLineData(data) {
  const result = data.data.reduce((acc, obj) => {
    Object.keys(obj).forEach(key => {
      acc[key] = acc[key] || []
      acc[key].push(obj[key])
    })
    return acc
  }, {})

  return result
}

export function setLineData(data, styleState) {
  const labels = data['time']

  const dataTitle = Object.keys(data)
  const notLabelTitleArr = dataTitle.filter(el => el.toString() !== 'time')

  return {
    labels,
    datasets: notLabelTitleArr.map((line, index) => ({
      type: 'line',
      label: line.toString(), //그래프 분류되는 항목
      data: data[line], //실제 그려지는 데이터(Y축 숫자)
      borderColor: styleState[index].borderColor, //그래프 선 color
      backgroundColor: styleState[index].backgroundColor, //마우스 호버시 나타나는 분류네모 표시 bg
      borderWidth: styleState[index].borderWidth,
    })),
  }
}

export function setInitialLineStyle(lineData) {
  const dataTitle = Object.keys(lineData)
  const notLabelTitleArr = dataTitle.filter(el => el.toString() !== 'time')

  const sizeLineData = Object.keys(notLabelTitleArr).length // time을 제외한 속성의 개수
  const styleStateObjArr = Array.from({ length: sizeLineData }, (_, index) => ({
    id: 'line' + index,
    name: notLabelTitleArr[index],
    borderColor: colorArr[index].rgb, //그래프 선 color
    backgroundColor: colorArr[index].rgb, //마우스 호버시 나타나는 분류네모 표시 bg
    borderWidth: 5,
    type: 'line',
  }))

  return styleStateObjArr
}
