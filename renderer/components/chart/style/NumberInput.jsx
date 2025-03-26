export default function NumberInput(props) {
  const { title, defaultValue, onChange, index } = props

  return (
    <>
      <label>{title} : </label>
      <input
        type="number"
        defaultValue={defaultValue}
        onChange={event => onChange(event.currentTarget.value, index)}
      />
    </>
  )
}
