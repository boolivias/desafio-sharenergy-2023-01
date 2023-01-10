import { useEffect, useState } from "react"
import useAuthContext from "../../contexts/auth"
import { ICustomer } from "../../entities/ICustomer"
import { toastError } from "../../helpers/toastify"
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

  async function handleOnCreate(data_customer: Omit<ICustomer, 'id'>) {
    try {
      const resp = await api.post('/customer', data_customer)

      data.push(resp.data)
      setData([...data])

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  return (
    <ClientsCRUDView
      data={data}
      onCreate={handleOnCreate}
    />
  )
}

export default ClientsCRUDPage