import { Grid } from "@material-ui/core"
import { IData } from "."
import Button from "../../components/Button"
import Image from "./components/Image"
import Video from "./components/Video"

interface IRandomDogView {
  data: IData,
  onSubmit(): void,
}

const RandomDogView: React.FC<IRandomDogView> = ({ onSubmit, data }) => {
  return (
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
          onClick={() => onSubmit()}
        />
      </Grid>
      <Grid item style={{ maxWidth: '500px' }}>
        {
          data?.type === 'image'
            ? <Image src={data.src as string} />
            : <Video src={data?.src as string} />
        }
      </Grid>
    </Grid>
  )
}

export default RandomDogView