import { useEffect, useState } from "react"
import apiRandomUsers from "../../services/randomUsers"
import HomeView from "./view"

interface IRequestInfo {
  cur_page: number,
  seed: string | null,
}

const HomePage: React.FC = () => {
  const [users, setUsers] = useState<any[]>([])
  const [requestInfo, setRequestInfo] = useState<IRequestInfo>({ cur_page: 1, seed: null })

  useEffect(() => { loadPage() }, [])

  async function loadPage(page = 1) {
    const fields = 'picture,name,email,login,registered';
    const results = 10

    try {
      const resp = await apiRandomUsers.get(`/?inc=${fields}&results=${results}&page=${page}${requestInfo.seed && `&seed=${requestInfo.seed}`}`)
      setUsers(
        resp.data.results.map((u: any) => ({
          id: u.login.uuid,
          username: u.login.username,
          photo: u.picture.medium,
          email: u.email,
          name: `${u.name.title}. ${u.name.first} ${u.name.last}`,
          age: u.registered.age,
        }))
      )

      if (!requestInfo.seed) requestInfo.seed = resp.data.info.seed
      requestInfo.cur_page = page
      setRequestInfo({ ...requestInfo })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <HomeView
      data={users}
      page={requestInfo.cur_page}
      onNextPage={() => loadPage(requestInfo.cur_page + 1)}
      onBeforePage={() => loadPage(requestInfo.cur_page - 1)}
    />
  )
}

export default HomePage