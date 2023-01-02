import { Grid } from "@material-ui/core";
import useStyles from "./style";

interface ILoginContainer {
  children: React.ReactNode,
}

const LoginContainer: React.FC<ILoginContainer> = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      classes={{
        container: classes.container,
      }}
    >
      {children}
    </Grid>
  )
}

export default LoginContainer