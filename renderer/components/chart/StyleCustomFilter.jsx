import NumberInput from './style/NumberInput'
import { colorArr } from './style/styleElement'

export default function StyleCustomFilter(props) {
  const { styleState, setStyleState, type } = props

  function updateBorderWidth(event, index) {
    setStyleState(prev => {
      const newState = [...prev]
      newState[index] = { ...newState[index], borderWidth: Number(event) }
      return newState
    })
  }

  function updateBorderColor(event, index) {
    setStyleState(prev => {
      const newState = [...prev]
      newState[index] = {
        ...newState[index],
        borderColor: event,
        backgroundColor: event,
      }
      return newState
    })
  }

  function updateBarThicknessColor(event, index) {
    setStyleState(prev => {
      const newState = [...prev]
      newState[index] = {
        ...newState[index],
        barThickness: Number(event),
      }
      return newState
    })
  }

  function changeChartTypeInMixed(event, index) {
    setStyleState(prev => {
      const newState = [...prev]
      newState[index] = {
        ...newState[index],
        type: event,
      }
      return newState
    })
  }

  const chartType = ['line', 'bar']

  return (
    <div>
      {styleState.map((el, index) => (
        <div key={el.id}>
          <p>{el.name}</p>
          {el.type === 'line' && (
            <NumberInput
              title={'lineBorderWidth'}
              defaultValue={el.borderWidth}
              onChange={updateBorderWidth}
              index={index}
            />
          )}
          {el.type === 'bar' && (
            <NumberInput
              title={'barWidth'}
              defaultValue={el.barThickness}
              onChange={updateBarThicknessColor}
              index={index}
            />
          )}
          <label>color :</label>
          <select
            onChange={event =>
              updateBorderColor(event.currentTarget.value, index)
            }
          >
            <option>색상을 선택하세요</option>
            {colorArr.map(el => {
              return (
                <option key={el.name} value={el.rgb}>
                  {el.name}
                </option>
              )
            })}
          </select>
          {type === 'mixed' && (
            <>
              <label>chart type :</label>
              <select
                onChange={event =>
                  changeChartTypeInMixed(event.currentTarget.value, index)
                }
                defaultValue={styleState[index].type}
              >
                <option disabled>{styleState[index].type}</option>
                {chartType.map(el => {
                  return (
                    <option key={'chartTypeArr' + el} value={el}>
                      {el}
                    </option>
                  )
                })}
              </select>
            </>
          )}
        </div>
      ))}
    </div>
  )
}
