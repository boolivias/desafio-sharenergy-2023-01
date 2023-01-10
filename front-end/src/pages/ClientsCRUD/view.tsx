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
  data: ICustomer[],
  onCreate(data: Omit<ICustomer, 'id'>): Promise<boolean>,
  onEdit(data: ICustomer): Promise<boolean>,
  onDelete(id: ICustomer['id']): void,
}

const ClientsCRUDView: React.FC<IClientsCRUDView> = ({ data, onCreate, onEdit, onDelete }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [editData, setEditData] = useState<ICustomer | null>(null)

  function handleCloseModal() {
    setModalIsOpen(false)
  }

  function handleOpenModal(row = null) {
    if(row) {
      const index = data.findIndex((c) => c.id === (row as ICustomer).id)
      setEditData(data[index])
    } else {
      setEditData(null)
    }

    setModalIsOpen(true)
  }

  async function handleOnSubmit(data: Omit<ICustomer, 'id'> & { id: ICustomer['id'] }) {
    const success = editData ? await onEdit(data) : await onCreate(data)

    if (success) handleCloseModal()
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
          onDelete: (row) => onDelete(row.id),
          onEdit: handleOpenModal,
        }}
      />
      <Modal
        open={modalIsOpen}
        onClose={handleCloseModal}
      >
        <Forms
          data={editData}
          onSubmit={handleOnSubmit}
          onCancel={handleCloseModal}
        />
      </Modal>
    </>
  )
}

export default ClientsCRUDView