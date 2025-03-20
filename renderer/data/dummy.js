export const dummyData = {
  data: [
    {
      time: '2024-03-18 10:00',
      temperature: 22.5,
      humidity: 55,
    },
    {
      time: '2024-03-18 10:01',
      temperature: 22.7,
      humidity: 54,
    },
    {
      time: '2024-03-18 10:02',
      temperature: 22.8,
      humidity: 53,
    },
    {
      time: '2024-03-18 10:03',
      temperature: 22.8,
      humidity: 53,
    },
    {
      time: '2024-03-18 10:04',
      temperature: 22.8,
      humidity: 53,
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
