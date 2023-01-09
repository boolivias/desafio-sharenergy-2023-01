import { useState } from "react"
import Button from "../../components/Button"
import Checkbox from "../../components/Checkbox"
import InputText from "../../components/InputText"
import LoginComponents from "./components"

interface ILoginView {
  onSubmit(user: string, pass: string, remember?: boolean): void,
}

const LoginView: React.FC<ILoginView> = ({ onSubmit }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <LoginComponents.Container>
      <LoginComponents.Card>
        <InputText
          label="Username"
          onChangeText={setUsername}
        />
        <InputText
          label="Senha"
          type="password"
          onChangeText={setPassword}
        />
        <Checkbox
          label="Lembrar de mim"
          name="remember-me"
        />
        <Button
          text="Entrar"
          onClick={() => onSubmit(username, password)}
        />
      </LoginComponents.Card>
    </LoginComponents.Container>
  )
}

export default LoginView