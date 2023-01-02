import { Grid } from "@material-ui/core"
import SideMenu from "./components/Menu"
import useStyle from "./style"

interface IPrivateLayout {
  children: React.ReactNode,
}

const PrivateLayout: React.FC<IPrivateLayout> = ({ children }) => {
  const classes = useStyle()

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