import { TextField } from "@material-ui/core"
import useStyles from "./style"

interface IInputText {
  label: string,
  fullWidth?: boolean,
  onChangeText?(text: string): void,
}

const InputText: React.FC<IInputText> = ({ label, fullWidth, onChangeText }) => {
  const classes = useStyles()

  return (
    <TextField
      label={label}
      variant="outlined"
      classes={fullWidth ? { root: classes.root } : undefined}
      onChange={(e) => {
        if(onChangeText)
          onChangeText(e.target.value)
      }}
    />
  )
}

export default InputText