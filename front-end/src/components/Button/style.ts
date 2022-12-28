import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  contained: {
    backgroundColor: '#EEAF22',
    color: '#fff',
    fontWeight: 'bold',
    boxShadow: 'none',
  },
  root: {
    '&:hover': {
      backgroundColor: '#EEAF22',
    }
  }
});

export default useStyles