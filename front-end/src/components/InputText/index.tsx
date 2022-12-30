import { TextField } from "@material-ui/core"
import useStyles from "./style"

interface IInputText {
  label: string,
  fullWidth?: boolean,
}

const InputText: React.FC<IInputText> = ({ label, fullWidth }) => {
  const classes = useStyles()

  return (
    <TextField
      label={label}
      variant="outlined"
      classes={fullWidth ? { root: classes.root } : undefined}
    />
  )
}

export default InputText