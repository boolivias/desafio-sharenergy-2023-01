import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  rootContainer: {
    minHeight: '400px',
  },
  rootGrid: {
    border: `1px solid #f0f0f0`,
    color: 'rgba(0,0,0,.85)',
    WebkitFontSmoothing: 'auto',
    letterSpacing: 'normal',
    '& .MuiDataGrid-columnsContainer': {
      backgroundColor: '#fafafa',
    },
    '& .MuiDataGrid-iconSeparator': {
      display: 'none',
    },
    '& .MuiDataGrid-columnHeaderTitle': {
      fontWeight: 'bold',
      margin: '0px auto',
    },
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
      borderRight: `1px solid #f0f0f0`,
    },
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
      borderBottom: `1px solid #f0f0f0`,
    },
    '& .MuiDataGrid-cell': {
      justifyContent: 'center',
      color: 'rgba(0,0,0,.85)',
      WebkitFontSmoothing: 'auto',
      letterSpacing: 'normal',
      '& .MuiDataGrid-columnsContainer': {
        backgroundColor: '#fafafa',
      },
      '& .MuiDataGrid-iconSeparator': {
        display: 'none',
      },
      '& .MuiDataGrid-colCell, .MuiDataGrid-cell': {
        borderRight: `1px solid #f0f0f0`,
      },
      '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
        borderBottom: `1px solid #f0f0f0`,
      },
      '& .MuiDataGrid-cell': {
        color: 'rgba(0,0,0,.85)',
      },
      '& .MuiPaginationItem-root': {
        borderRadius: 0,
      },
      '& .MuiCheckbox-root svg': {
        width: 16,
        height: 16,
        backgroundColor: 'transparent',
        border: `1px solid #d9d9d9`,
        borderRadius: 2,
      },
      '& .MuiCheckbox-root svg path': {
        display: 'none',
      },
      '& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg': {
        backgroundColor: '#1890ff',
        borderColor: '#1890ff',
      },
      '& .MuiCheckbox-root.Mui-checked .MuiIconButton-label:after': {
        position: 'absolute',
        display: 'table',
        border: '2px solid #fff',
        borderTop: 0,
        borderLeft: 0,
        transform: 'rotate(45deg) translate(-50%,-50%)',
        opacity: 1,
        transition: 'all .2s cubic-bezier(.12,.4,.29,1.46) .1s',
        content: '""',
        top: '50%',
        left: '39%',
        width: 5.71428571,
        height: 9.14285714,
      },
      '& .MuiCheckbox-root.MuiCheckbox-indeterminate .MuiIconButton-label:after': {
        width: 8,
        height: 8,
        backgroundColor: '#1890ff',
        transform: 'none',
        top: '39%',
        border: 0,
      },
    },
  },
  footerContainerHidden: {
    display: 'none',
  }
});

export default useStyles;