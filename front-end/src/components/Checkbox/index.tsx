import { Checkbox as CkboxMaterial, FormControlLabel } from "@material-ui/core";
import useStyles from "./style";

interface ICheckbox {
  label: string,
  name: string,
}

const Checkbox: React.FC<ICheckbox> = ({ label, name }) => {
  const classes = useStyles()

  return (
    <FormControlLabel
      control={
        <CkboxMaterial
          // checked={state.checkedF}
          // onChange={handleChange}
          name={name}
          classes={{
            root: classes.root,
            checked: classes.checked,
          }}
        />
      }
      label={label}
    />
  )
}

export default Checkbox;