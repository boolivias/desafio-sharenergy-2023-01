import { Container } from "@material-ui/core";
import { useState } from "react";
import Button from "../../components/Button";
import DataGrid, { IColumnConfig } from "../../components/DataGrid";
import Modal from "../../components/Modal";
import { ICustomer } from "../../entities/ICustomer";
import Forms from "./components/Forms";

const COLUMNS_CONFIG: IColumnConfig[] = [
  {
    field: 'name',
    headerName: 'Nome completo',
  },
  {
    field: 'email',
    headerName: 'Email',
  },
  {
    field: 'cpf',
    headerName: 'CPF',
  },
  {
    field: 'phone',
    headerName: 'Telefone',
  },
  {
    field: 'address',
    headerName: 'Endereço',
  },
]

interface IClientsCRUDView {
  data: ICustomer[]
}

const ClientsCRUDView: React.FC<IClientsCRUDView> = ({ data }) => {
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
        data={
          data.map(({ id, name, email, cpf, phone, street, number, city, state }) => ({
            id, name, cpf, phone, email,
            address: `${street}, ${number}, ${city} - ${state}`
          }))
        }
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