// import { makeStyles } from '@material-ui/core/styles';
import { default as ModalMaterial } from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import useStyles from './styles';

interface IModal {
  open: boolean,
  onClose(): void,
  children?: React.ReactNode,
}

const Modal: React.FC<IModal> = ({ open, onClose, children }) => {
  const classes = useStyles()

  return(
    <ModalMaterial
      className={classes.modal}
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.content}>{children}</div>
      </Fade>
    </ModalMaterial>
  )
}

export default Modal