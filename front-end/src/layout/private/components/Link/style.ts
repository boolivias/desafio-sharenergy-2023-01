const styledBy = (property: any, mapping: any) => (props: any) => mapping[props[property]]

const useStyle = {
  root: {
    padding: '15px 20px',
    color: styledBy('type', {
      default: '#000',
      logout: '#DD0808',
    }),
    borderRadius: '4px',
    transition: '.2s all linear',
    marginTop: styledBy('type', {
      default: '5px',
      logout: 'auto',
    }),
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    alignItems: 'center',
    gridColumnGap: '10px',
    '&:hover': {
      backgroundColor: styledBy('type', {
        default: '#EEAF22',
        logout: '#DD0808',
      }),
      textDecoration: 'none',
      color: '#fff'
    },
  }
}

export default useStyle