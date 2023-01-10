import { Grid } from "@material-ui/core"
import { useState } from "react"
import Button from "../../../../components/Button"
import InputText from "../../../../components/InputText"
import { ICustomer } from "../../../../entities/ICustomer"

interface IForms {
  onSubmit(data: Omit<ICustomer, 'id'>): void,
  onCancel(): void,
}

const Forms: React.FC<IForms> = ({ onSubmit, onCancel }) => {
  const [data, setData] = useState({
    name: '',
    cpf: '',
    email: '',
    phone: '',
    street: '',
    number: '',
    city: '',
    state: '',
    complement: '',
  })

  function handleOnChange(value: string, key: keyof typeof data) {
    data[key] = value
    setData({ ...data })
  }

  return (
    <Grid
      container
      direction="column"
      spacing={2}
    >
      <Grid item container spacing={4}>
        <Grid item xs={6}>
          <InputText fullWidth={true} label="Nome" onChangeText={(v) => handleOnChange(v, 'name')} />
        </Grid>
        <Grid item xs={6}>
          <InputText fullWidth={true} label="CPF" onChangeText={(v) => handleOnChange(v, 'cpf')} />
        </Grid>
      </Grid>
      <Grid item container spacing={4}>
        <Grid item xs={6}>
          <InputText fullWidth={true} label="Email" onChangeText={(v) => handleOnChange(v, 'email')} />
        </Grid>
        <Grid item xs={6}>
          <InputText fullWidth={true} label="Telefone" onChangeText={(v) => handleOnChange(v, 'phone')} />
        </Grid>
      </Grid>
      <Grid item container spacing={4}>
        <Grid item xs={12}>
          <InputText fullWidth={true} label="Endereço" onChangeText={(v) => handleOnChange(v, 'street')} />
        </Grid>
      </Grid>
      <Grid item container spacing={4}>
        <Grid item xs={2}>
          <InputText fullWidth={true} label="Número" onChangeText={(v) => handleOnChange(v, 'number')} />
        </Grid>
        <Grid item xs={3}>
          <InputText fullWidth={true} label="Cidade" onChangeText={(v) => handleOnChange(v, 'city')} />
        </Grid>
        <Grid item xs={3}>
          <InputText fullWidth={true} label="Estado" onChangeText={(v) => handleOnChange(v, 'state')} />
        </Grid>
        <Grid item xs={4}>
          <InputText fullWidth={true} label="Complemento" onChangeText={(v) => handleOnChange(v, 'complement')} />
        </Grid>
      </Grid>

      <Grid item container justifyContent="space-evenly">
        <Grid item>
          <Button
            text="Salvar"
            type="success"
            onClick={() => onSubmit(data)}
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