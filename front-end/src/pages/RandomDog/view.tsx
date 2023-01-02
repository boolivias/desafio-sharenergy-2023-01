import { Grid } from "@material-ui/core"
import Button from "../../components/Button"
import Image from "./components/Image"

const RandomDogView: React.FC = () => {
  return(
    <Grid
      container
      alignContent="center"
      direction="column"
    >
      <Grid
        item
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '2rem',
        }}
      >
        <Button
          text="Atualizar"
        />
      </Grid>
      <Grid item>
        <Image src="http://localhost:3000/logo192.png" />
      </Grid>
    </Grid>
  )
}

export default RandomDogView