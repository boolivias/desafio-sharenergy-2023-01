import { TextField } from "@material-ui/core"

interface IInputText {
  label: string,
}

const InputText: React.FC<IInputText> = ({ label }) => {
  return (
    <TextField
      label={label}
      variant="outlined"
    />
  )
}

export default InputText