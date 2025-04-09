export function generateDataArray(length = 30) {
  const dataArray = []
  const getRandomValue = (min, max) =>
    (Math.random() * (max - min) + min).toFixed(1)

  for (let i = 0; i < length; i++) {
    const time = new Date()
    time.setMinutes(time.getMinutes() + i * 10) // 10분 간격 데이터

    dataArray.push({
      time: time.toISOString().slice(0, 16).replace('T', ' '), // 시간 형식: 'YYYY-MM-DD HH:MM'
      temperature: parseFloat(getRandomValue(20, 30)), // 온도: 20 ~ 30도
      humidity: parseFloat(getRandomValue(40, 60)), // 습도: 40 ~ 60%
      co2: parseFloat(getRandomValue(30, 50)), // CO2: 30 ~ 50ppm
    })
  }

  return dataArray
}

export const dummyData = {
  data: [
    {
      time: '2024-03-18 10:00',
      temperature: 22.5,
      humidity: 55,
      co2: 33,
    },
    {
      time: '2024-03-18 10:01',
      temperature: 22.7,
      humidity: 54,
      co2: 23,
    },
    {
      time: '2024-03-18 10:02',
      temperature: 22.8,
      humidity: 53,
      co2: 39,
    },
    {
      time: '2024-03-18 10:03',
      temperature: 22.8,
      humidity: 53,
      co2: 55,
    },
    {
      time: '2024-03-18 10:04',
      temperature: 22.8,
      humidity: 53,
      co2: 44,
    },
  ],
}

export const newDummyData = {
  labels: ['2024-03-18 10:00', '2024-03-18 10:01', '2024-03-18 10:02'],
  datasets: [
    {
      name: '온도',
      unit: '°C',
      data: [22.5, 22.7, 22.8],
    },
    {
      name: '습도',
      unit: '%',
      data: [55, 54, 53],
    },
  ],
}
