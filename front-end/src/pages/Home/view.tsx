import { Container } from "@material-ui/core";
import Button from "../../components/Button";
import DataGrid, { IColumnConfig } from "../../components/DataGrid";
import InputText from "../../components/InputText";

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

const MOCK_DATA = Array.from({length: 30}, ((_, i) => ({
  id: i,
  photo: 'http://localhost:3000/logo192.png',
  name: `Usuário silva ${i}`,
  email: `user.${i}@email.com`,
  username: `user ${i}`,
  age: Math.floor(Math.random() * 100),
})));

const HomeView: React.FC = () => {
  return (
    <>
      <Container
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
      </Container>
      <DataGrid
        columnsConfig={COLUMNS_CONFIG}
        data={MOCK_DATA}
      />
    </>
  )
}

export default HomeView