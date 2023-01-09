import { Grid } from "@material-ui/core"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useAuthContext from "../../contexts/auth"
import SideMenu from "./components/Menu"
import useStyle from "./style"

interface IPrivateLayout {
  children: React.ReactNode,
}

const PrivateLayout: React.FC<IPrivateLayout> = ({ children }) => {
  const { user, loading } = useAuthContext()
  const navigate = useNavigate()
  const classes = useStyle()

  useEffect(() => {
    if (!loading && !user) navigate('/')
  }, [loading])

  return (
    <Grid
      container
      direction="row"
      classes={{
        container: classes.container,
      }}
    >
      <SideMenu />
      <Grid
        item
        container
        xs
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Grid>
    </Grid>
  )
}

export default PrivateLayout