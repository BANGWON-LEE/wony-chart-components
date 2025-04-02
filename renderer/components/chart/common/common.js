export function getStorage(chartName) {
  if (typeof window === 'undefined') return

  const savedChartStyle = JSON.parse(localStorage.getItem(chartName)) || null

  return savedChartStyle
}

export function formatData(data) {
  const result = data.data.reduce((acc, obj) => {
    Object.keys(obj).forEach(key => {
      acc[key] = acc[key] || []
      acc[key].push(obj[key])
    })
    return acc
  }, {})

  return result
}
