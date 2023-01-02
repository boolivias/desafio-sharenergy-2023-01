import { Grid } from "@material-ui/core"
import Button from "../../components/Button"
import InputText from "../../components/InputText"
import Image from "./components/Image"
import ErrorIcon from '@material-ui/icons/Error';
import { useState } from "react";

interface IImageByStatusCodeView {
  data: string | null,
  onSubmit(statusCode: string): void,
}

const ImageByStatusCodeView: React.FC<IImageByStatusCodeView> = ({ onSubmit, data }) => {
  const [statusCode, setStatusCode] = useState('')

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
          marginBottom: '1rem',
        }}
      >
        <InputText
          label="Status code"
          onChangeText={setStatusCode}
        />
        <Button
          text="Pesquisar"
          onClick={() => { onSubmit(statusCode) }}
        />
      </Grid>
      <Grid item>
        {
          data
            ? (<Image src={data} />)
            : (
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem'}}>
                <ErrorIcon />
                <p>Não foi encontrada uma imagem para o status digitado</p>
              </div>
            )
        }
      </Grid>
    </Grid>
  )
}

export default ImageByStatusCodeView