import { Container, IconButton } from "@material-ui/core";
import Button from "../../components/Button";
import DataGrid, { IColumnConfig } from "../../components/DataGrid";
import InputText from "../../components/InputText";
import IUser from "../../types/user";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const COLUMNS_CONFIG: IColumnConfig[] = [
  {
    field: 'photo',
    headerName: 'Foto',
    type: "image",
  },
  {
    field: 'name',
    headerName: 'Nome completo',
  },
  {
    field: 'email',
    headerName: 'Email',
  },
  {
    field: 'username',
    headerName: 'Username',
  },
  {
    field: 'age',
    headerName: 'Idade',
  },
]
interface IHomeView {
  data: IUser[],
  page: number,
  onNextPage(): void,
  onBeforePage(): void,
}

const HomeView: React.FC<IHomeView> = ({ data, onBeforePage, onNextPage, page }) => {
  return (
    <>
      {/* <Container
        style={{
          display: 'flex',
          marginBottom: '1rem',
        }}
      >
        <div style={{ marginRight: '20px' }} >
          <InputText
            label="Nome, email ou username"
          />
        </div>
        <Button
          text="Buscar"
        />
      </Container> */}
      <DataGrid
        columnsConfig={COLUMNS_CONFIG}
        data={data}
        showFooter={false}
      />
      <Container
        style={{
          display: 'flex',
          marginTop: '1rem',
          justifyContent: 'space-around'
        }}
      >
        <IconButton onClick={() => {
          if (page > 1) onBeforePage()
        }}>
          <NavigateBeforeIcon />
        </IconButton>
        <p>Página: {page}</p>
        <IconButton onClick={onNextPage}>
          <NavigateNextIcon />
        </IconButton>
      </Container>
    </>
  )
}

export default HomeView