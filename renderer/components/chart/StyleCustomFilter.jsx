import NumberInput from './style/NumberInput'
import { colorArr } from './style/styleElement'

export default function StyleCustomFilter(props) {
  const { styleState, setStyleState, type, closeModalBtn } = props

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
    <div className="fixed inset-0 flex items-center justify-center bg-slate-500 bg-opacity-20">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[70vw]">
        {styleState.map((el, index) => (
          <div key={el.id} className="flex justify-between">
            <p className="w-[110px]">{el.name}</p>
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
            <div>
              <label className="mr-[15px]">color :</label>
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
            </div>
            {type === 'mixed' && (
              <div>
                <label className="mr-[15px]">chart type :</label>
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
              </div>
            )}
          </div>
        ))}
        <div className="w-full text-center mt-6">
          <button
            className="px-4 py-2 rounded-md bg-blue-400 text-white font-semibold "
            onClick={() => closeModalBtn()}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  )
}
