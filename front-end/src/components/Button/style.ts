import { makeStyles } from "@material-ui/styles";

const BaseCSS_Contained = {
  color: '#fff',
  fontWeight: 'bold' as any, // fix bug
  boxShadow: 'none',
};

const styleDefault = makeStyles({
  contained: {
    ...BaseCSS_Contained,
    backgroundColor: '#EEAF22',
  },
  root: {
    '&:hover': {
      backgroundColor: '#EEAF22',
    }
  }
});

const styleSuccess = makeStyles({
  contained: {
    ...BaseCSS_Contained,
    backgroundColor: '#219653',
  },
  root: {
    '&:hover': {
      backgroundColor: '#219653',
    }
  }
});

const styleDanger = makeStyles({
  contained: {
    ...BaseCSS_Contained,
    backgroundColor: '#dd1717',
  },
  root: {
    '&:hover': {
      backgroundColor: '#dd1717',
    }
  }
});

export default {
  default: styleDefault,
  success: styleSuccess,
  danger: styleDanger,
}