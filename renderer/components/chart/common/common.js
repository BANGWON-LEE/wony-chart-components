export function getStorage(uniqueChartName) {
  if (typeof window === 'undefined') return

  const savedChartStyle =
    JSON.parse(localStorage.getItem(uniqueChartName)) || null

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
