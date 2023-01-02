import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2.4rem',
    display: 'grid',
    gridRowGap: '1rem',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
    [theme.breakpoints.down('sm')]: {
      boxShadow: 'none',
      backgroundColor: 'transparent',
    },
  },
}));

export default useStyles