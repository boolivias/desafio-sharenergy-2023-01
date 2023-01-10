import { useEffect, useState } from "react"
import useAuthContext from "../../contexts/auth"
import { ICustomer } from "../../entities/ICustomer"
import { toastError, toastSuccess } from "../../helpers/toastify"
import api from "../../services/api"
import ClientsCRUDView from "./view"

const ClientsCRUDPage: React.FC = () => {
  const { loading } = useAuthContext()
  const [data, setData] = useState<ICustomer[]>([])

  useEffect(() => { if (!loading) load() }, [loading])

  async function load() {
    try {
      const resp = await api.get('/customer')
      setData(resp.data)
    } catch (error) {
      console.log(error)

      toastError('Ocorreu um erro ao recuperar os dados.')
    }
  }

  async function handleOnEdit(data_customer: ICustomer) {
    try{
      await api.patch(`/customer/${data_customer.id}`, { ...data_customer , id: undefined})

      const index = data.findIndex(c => c.id === data_customer.id)
      data[index] = data_customer
      setData([...data])

      toastSuccess('Dados salvos com sucesso!')
      return true
    } catch(error) {
      toastError('Ocorreu um erro inesperado. Tente novamente mais tarde')

      console.log(error)
      return false
    }
  }

  async function handleOnCreate(data_customer: Omit<ICustomer, 'id'>) {
    try {
      const resp = await api.post('/customer', data_customer)

      data.push(resp.data)
      setData([...data])

      toastSuccess('Dados salvos com sucesso!')
      return true
    } catch (error) {
      toastError('Ocorreu um erro inesperado. Tente novamente mais tarde')

      console.log(error)
      return false
    }
  }

  async function handleOnDelete(id: ICustomer['id']) {
    try {
      await api.delete(`/customer/${id}`)

      const index = data.findIndex(c => c.id === id)
      data.splice(index, 1)
      setData([...data])

      toastSuccess('Cliente apagado com sucesso!')
    } catch (error) {
      toastError('Ocorreu um erro inesperado. Tente novamente mais tarde')

      console.log(error)
    }
  }

  return (
    <ClientsCRUDView
      data={data}
      onCreate={handleOnCreate}
      onEdit={handleOnEdit}
      onDelete={handleOnDelete}
    />
  )
}

export default ClientsCRUDPage