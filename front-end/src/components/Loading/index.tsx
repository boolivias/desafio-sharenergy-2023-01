import { CircularProgress } from "@material-ui/core"
import { Container, ProgressCSS } from "./styles"

const Loading: React.FC = () => {
  const classes = ProgressCSS()

  return (
    <Container>
      <CircularProgress classes={classes} />
      <span>Carregando...</span>
    </Container>
  )
}

export default Loading