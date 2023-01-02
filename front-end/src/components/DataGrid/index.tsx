import { Container } from "@material-ui/core";
import { DataGrid as DGMaterial } from '@mui/x-data-grid';
import ActionsCell from "./components/ActionsCell";
import ImageCell from "./components/ImageCell";
import useStyles from "./style";

export interface IColumnConfig {
  field: string,
  headerName?: string,
  type?: 'text' | 'image',
}

interface IDataGrid {
  columnsConfig: IColumnConfig[],
  data: { [x: string]: any }[],
  showFooter?: boolean,
  actions?: {
    onEdit(row: any): void,
    onDelete(row: any): void,
  }
}

const DataGrid: React.FC<IDataGrid> = ({
  columnsConfig,
  data,
  showFooter = true,
  actions,
}) => {
  const classes = useStyles()

  return (
    <Container
      classes={{
        root: classes.rootContainer,
      }}
    >
      <DGMaterial
        classes={{
          root: classes.rootGrid,
        }}
        hideFooter={!showFooter}
        columns={
          (
            actions
              ? [...columnsConfig, { field: 'actions', headerName: 'Ações', type: 'actions' }]
              : columnsConfig
          ).map((col) => ({
            ...col,
            flex: 1,
            renderCell: col.type === 'image'
              ? (params) => (<ImageCell params={params} />)
              : col.type === 'actions' && actions
                ? (params) => (<ActionsCell params={params} {...actions} />)
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