import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    background: '#F7F7FC',
    height: '100vh',
    [theme.breakpoints.down('sm')]: {
      boxShadow: 'none',
      backgroundColor: '#fff',
    },
  },
}));

export default useStyles