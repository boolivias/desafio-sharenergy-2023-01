import { Button as BtnMaterial } from "@material-ui/core"
import useStyles from "./style"

interface IButton {
  text: string,
}

const Button: React.FC<IButton> = ({ text }) => {
  const classes = useStyles()

  return (
    <BtnMaterial
      variant="contained"
      classes={{
        contained: classes.contained,
        root: classes.root,
      }}
    >
      {text}
    </BtnMaterial>
  )
}

export default Button