import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '3rem',
  },
})

export default useStyles