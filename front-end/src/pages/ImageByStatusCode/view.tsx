import { Grid } from "@material-ui/core"
import Button from "../../components/Button"
import InputText from "../../components/InputText"
import Image from "./components/Image"

const ImageByStatusCodeView: React.FC = () => {
  return(
    <Grid
      container
      alignContent="center"
      direction="column"
    >
      <Grid
        item
        direction="column"
        style={{
          display:'flex',
          width: '300px',
          marginBottom: '1rem',
        }}
      >
        <InputText
          label="Status code"
        />
        <Button
          text="Pesquisar"
        />
      </Grid>
      <Grid item>
        <Image src="http://localhost:3000/logo192.png" />
      </Grid>
    </Grid>
  )
}

export default ImageByStatusCodeView