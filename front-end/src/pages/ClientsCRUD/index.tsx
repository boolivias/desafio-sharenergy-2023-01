import { useEffect, useState } from "react"
import useAuthContext from "../../contexts/auth"
import { ICustomer } from "../../entities/ICustomer"
import { toastError } from "../../helpers/toastify"
import api from "../../services/api"
import ClientsCRUDView from "./view"

const ClientsCRUDPage: React.FC = () => {
  const {loading} = useAuthContext()
  const [data, setData] = useState<ICustomer[]>([])

  useEffect(() => { if(!loading) load() }, [loading])

  async function load() {
    try {
      const resp = await api.get('/customer')
      setData(resp.data)
    } catch (error) {
      console.log(error)

      toastError('Ocorreu um erro ao recuperar os dados.')
    }
  }

  return <ClientsCRUDView data={data} />
}

export default ClientsCRUDPage