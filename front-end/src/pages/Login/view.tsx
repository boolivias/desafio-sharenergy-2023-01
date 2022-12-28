import Button from "../../components/Button"
import Checkbox from "../../components/Checkbox"
import InputText from "../../components/InputText"
import LoginComponents from "./components"

const LoginView: React.FC = () => {
  return (
    <LoginComponents.Container>
      <LoginComponents.Card>
        <InputText
          label="Username"
        />
        <InputText
          label="Senha"
        />
        <Checkbox
          label="Lembrar de mim"
          name="remember-me"
        />
        <Button text="Entrar" />
      </LoginComponents.Card>
    </LoginComponents.Container>
  )
}

export default LoginView