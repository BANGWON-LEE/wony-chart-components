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

export function setLineData(data) {
  const labels = data['time']

  const dataTitle = Object.keys(data)
  const notLabelTitleArr = dataTitle.filter(el => el.toString() !== 'time')

  return {
    labels,
    datasets: notLabelTitleArr.map(line => ({
      type: 'line',
      label: line.toString(), //그래프 분류되는 항목
      data: data[line], //실제 그려지는 데이터(Y축 숫자)
      borderColor: 'rgb(255, 99, 132)', //그래프 선 color
      backgroundColor: 'rgba(255, 99, 132, 0.5)', //마우스 호버시 나타나는 분류네모 표시 bg
    })),
  }
}
