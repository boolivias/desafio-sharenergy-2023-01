import { Container } from "@material-ui/core";
import { useState } from "react";
import Button from "../../components/Button";
import DataGrid, { IColumnConfig } from "../../components/DataGrid";
import Modal from "../../components/Modal";
import Forms from "./components/Forms";

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

const MOCK_DATA = Array.from({ length: 30 }, ((_, i) => ({
  id: i,
  photo: 'http://localhost:3000/logo192.png',
  name: `Usuário silva ${i}`,
  email: `user.${i}@email.com`,
  username: `user ${i}`,
  age: Math.floor(Math.random() * 100),
})));

const ClientsCRUDView: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function handleCloseModal() {
    setModalIsOpen(false)
  }

  function handleOpenModal(_row = null) {
    setModalIsOpen(true)
  }

  return (
    <>
      <Container
        style={{
          display: 'flex',
          marginBottom: '1rem',
        }}
      >
        <Button
          text="Cadastrar cliente"
          type='success'
          onClick={() => handleOpenModal()}
        />
      </Container>
      <DataGrid
        columnsConfig={COLUMNS_CONFIG}
        data={MOCK_DATA}
        actions={{
          onDelete: (row) => console.log(row),
          onEdit: handleOpenModal,
        }}
      />
      <Modal
        open={modalIsOpen}
        onClose={handleCloseModal}
      >
        <Forms
          onSubmit={handleCloseModal}
          onCancel={handleCloseModal}
        />
      </Modal>
    </>
  )
}

export default ClientsCRUDView