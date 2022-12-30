import { Button as BtnMaterial } from "@material-ui/core";
import style from "./style";

interface IButton {
  text: string,
  type?: 'default' | 'success' | 'danger',
  onClick?(): void,
}
// const ButtonStyled: React.ComponentType<any> = withStyles(style)((props) => (<BtnMaterial {...props} />))

const Button: React.FC<IButton> = ({ text, type = 'default', onClick }) => {
  const classes = (
    type === 'success'
      ? style.success
      : type === 'danger'
        ? style.danger
        : style.default
  )();

  return (
    <BtnMaterial
      variant="contained"
      classes={classes}
      onClick={() => {
        if (onClick)
          onClick()
      }}
    >
      {text}
    </BtnMaterial>
  )
}

export default Button