import { TextField } from "@material-ui/core"
import { useEffect, useState } from "react"
import useStyles from "./style"

interface IInputText {
  label: string,
  value?: string,
  type?: 'default' | 'password'
  fullWidth?: boolean,
  onChangeText?(text: string): void,
}

const InputText: React.FC<IInputText> = ({ label, fullWidth, onChangeText, value = '', type = 'default' }) => {
  const [valueInput, setValueInput] = useState('')

  const classes = useStyles()

  useEffect(() => {
    if (value !== valueInput) setValueInput(value)
  }, [value])

  function handleOnChange(e: any) {
    setValueInput(e.target.value)
    if (onChangeText)
      onChangeText(e.target.value)
  }

  return (
    <TextField
      label={label}
      value={valueInput}
      variant="outlined"
      type={type === 'password' ? 'password' : 'text'}
      classes={fullWidth ? { root: classes.root } : undefined}
      onChange={handleOnChange}
    />
  )
}

export default InputText