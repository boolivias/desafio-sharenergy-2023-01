import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useAuthContext from "../../contexts/auth"
import LoginView from "./view"

const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const { signIn, user, loading } = useAuthContext()

  useEffect(() => {
    if (!loading && user)
      navigate('/inicio')
  }, [loading])

  async function handleSubmit(user: string, pass: string, _remember = false) {
    const success = await signIn(user, pass)

    if (success)
      navigate('/inicio')
    else
      console.log('consolou')
  }

  return <LoginView onSubmit={handleSubmit} />
}

export default LoginPage