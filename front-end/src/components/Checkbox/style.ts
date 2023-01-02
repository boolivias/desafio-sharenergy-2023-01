import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    // color: '#F3B72F',
    '&$checked': {
      color: '#EEAF22',
    },
  },
  checked: {},
})

export default useStyles