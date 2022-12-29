import useStyles from "./style";
import { DataGrid as DGMaterial } from '@mui/x-data-grid';
import { Container } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';

export interface IColumnConfig {
  field: string,
  headerName?: string,
  type?: 'text' | 'image',
}

interface IDataGrid {
  columnsConfig: IColumnConfig[],
  data: { [x: string]: any }[],
}

const DataGrid: React.FC<IDataGrid> = ({ columnsConfig, data }) => {
  const classes = useStyles()

  return(
    <Container
      classes={{
        root: classes.rootContainer,
      }}
    >
      <DGMaterial
        // className={isAntDesign ? antDesignClasses.root : undefined}
        classes={{
          root: classes.rootGrid,
        }}
        columns={
          columnsConfig.map((col) => ({
            ...col,
            flex: 1,
            renderCell: col.type === 'image'
              ? (params) => (
                <Avatar 
                  alt="Imagem"
                  style={{
                    margin: 'auto',
                  }}
                  src={params.value?.toString()}
                />
              )
              : undefined
          }))
        }
        rows={data}
        // loading={loading}
        disableSelectionOnClick
        pagination
        pageSize={10}
        // rowsPerPageOptions={[5, 10, 20]}
      />
    </Container>
  );
}

export default DataGrid