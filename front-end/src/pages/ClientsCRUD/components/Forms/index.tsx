import { Grid } from "@material-ui/core"
import Button from "../../../../components/Button"
import InputText from "../../../../components/InputText"

interface IForms {
  onSubmit(): void,
  onCancel(): void,
}

const Forms: React.FC<IForms> = ({ onSubmit, onCancel }) => {
  return (
    <Grid
      container
      direction="column"
      spacing={2}
    >
      <Grid item container spacing={4}>
        <Grid item xs={6}>
          <InputText fullWidth={true} label="Nome" />
        </Grid>
        <Grid item xs={6}>
          <InputText fullWidth={true} label="CPF" />
        </Grid>
      </Grid>
      <Grid item container spacing={4}>
        <Grid item xs={6}>
          <InputText fullWidth={true} label="Email" />
        </Grid>
        <Grid item xs={6}>
          <InputText fullWidth={true} label="Telefone" />
        </Grid>
      </Grid>
      <Grid item container spacing={4}>
        <Grid item xs={12}>
          <InputText fullWidth={true} label="Endereço" />
        </Grid>
      </Grid>
      <Grid item container spacing={4}>
        <Grid item xs={4}>
          <InputText fullWidth={true} label="Número" />
        </Grid>
        <Grid item xs={4}>
          <InputText fullWidth={true} label="Cidade - Estado" />
        </Grid>
        <Grid item xs={4}>
          <InputText fullWidth={true} label="Complemento" />
        </Grid>
      </Grid>

      <Grid item container justifyContent="space-evenly">
        <Grid item>
          <Button
            text="Salvar"
            type="success"
            onClick={() => onSubmit()}
          />
        </Grid>
        <Grid item>
          <Button
            text="Cancelar"
            type="danger"
            onClick={() => onCancel()}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Forms