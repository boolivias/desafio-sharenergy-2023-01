import { makeStyles } from "@material-ui/styles"

const BaseCSS = {
  padding: '15px 20px',
  borderRadius: '4px',
  transition: '.2s all linear',
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  alignItems: 'center',
  gridColumnGap: '10px',
  '&:hover': {
    textDecoration: 'none',
    color: '#fff'
  },
}

const useStyleDefault = makeStyles({
  root: {
    ...BaseCSS,
    color: '#000',
    marginTop: '5px',
    '&:hover': {
      ...(BaseCSS['&:hover']),
      backgroundColor: '#EEAF22',
    },
  }
})

const useStyleLogout = makeStyles({
  root: {
    ...BaseCSS,
    color: '#DD0808',
    marginTop: 'auto',
    '&:hover': {
      ...(BaseCSS['&:hover']),
      backgroundColor: '#DD0808',
    },
  }
})

export default {
  default: useStyleDefault,
  logout: useStyleLogout,
}