import { Card } from "@material-ui/core"
import useStyles from "./style"

interface ILoginCard {
  children: React.ReactNode,
}

const LoginCard: React.FC<ILoginCard> = (
  {
    children,
  }
) => {
  const classes = useStyles()

  return (
    <Card
      classes={{
        root: classes.root,
      }}
    >
      {children}
    </Card>
  )
}

export default LoginCard