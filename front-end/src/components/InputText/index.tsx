import { TextField } from "@material-ui/core"
import useStyles from "./style"

interface IInputText {
  label: string,
  type?: 'default' | 'password'
  fullWidth?: boolean,
  onChangeText?(text: string): void,
}

const InputText: React.FC<IInputText> = ({ label, fullWidth, onChangeText, type = 'default' }) => {
  const classes = useStyles()

  return (
    <TextField
      label={label}
      variant="outlined"
      type={type === 'password' ? 'password' : 'text'}
      classes={fullWidth ? { root: classes.root } : undefined}
      onChange={(e) => {
        if(onChangeText)
          onChangeText(e.target.value)
      }}
    />
  )
}

export default InputText