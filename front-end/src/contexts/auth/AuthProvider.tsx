import { ReactNode, useEffect, useState } from "react"
import { IUser } from "../../entities/IUser"
import { toastError } from "../../helpers/toastify"
import api from "../../services/api"
import AuthContext from "./AuthContext"

interface IData {
  user: IUser | null,
  loading: boolean,
  refreshToken: string,
}

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<IData>({
    user: null,
    refreshToken: '',
    loading: true,
  })

  useEffect(() => {
    setData({ ...data, loading: true })
    const userStorage = sessionStorage.getItem('@auth:user')
    const refreshStorage = sessionStorage.getItem('@auth:refresh')

    if (userStorage && refreshStorage) {
      setLoginData(JSON.parse(userStorage), refreshStorage)
    } else
      setData({ ...data, loading: false, })
  }, [])

  async function setLoginData(user: IUser, refresh_token: string) {
    api.interceptors.request.use(
      async function (config) {
        if (config.url === 'user/refresh-token') return config

        const resp = await api.post('user/refresh-token', {
          refresh_token: refresh_token,
        });

        (config.headers as any) = {
          ...config.headers,
          authorization: `Bearer ${resp.data.token}`,
        }

        return config
      },
      async function (error) {
        console.log(error)

        if (error.response.status === 401) {
          clearLoginData()
        }
      },
    )

    setData({
      user,
      refreshToken: refresh_token,
      loading: false,
    })
  }

  function clearLoginData() {
    api.interceptors.request.clear()

    if (sessionStorage.getItem('@auth:user')) sessionStorage.removeItem('@auth:user')
    if (sessionStorage.getItem('@auth:refresh')) sessionStorage.removeItem('@auth:refresh')

    setData({
      user: null,
      loading: false,
      refreshToken: '',
    })
  }

  async function signIn(user: string, password: string) {
    setData({ ...data, loading: true })
    try {
      const { data } = await api.post('user/auth', {
        user,
        password,
      })

      sessionStorage.setItem('@auth:user', JSON.stringify(data.user))
      sessionStorage.setItem('@auth:refresh', data.refreshToken)

      await setLoginData(data.user, data.refreshToken)

      return true
    } catch (error: any) {
      console.log(error)

      if (error?.response?.status === 401)
        toastError('Usuário e/ou senha inválidas')
      else
        toastError('Ocorreu um erro inesperado. Tente novamente mais tarde.')

      setData({ ...data, loading: false })

      return false
    }
  }

  async function signOut() {
    try {
      await api.post('user/logout', {
        refresh_token: data.refreshToken
      })

      clearLoginData()
    } catch (error: any) {
      console.log(error)

      toastError('Ocorreu um erro inesperado. Tente novamente mais tarde.')
    }
  }

  return (
    <AuthContext.Provider value={{
      user: data.user,
      loading: data.loading,
      signIn,
      signOut,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider