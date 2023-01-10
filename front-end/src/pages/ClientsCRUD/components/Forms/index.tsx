import { Grid } from "@material-ui/core"
import { useEffect, useState } from "react"
import Button from "../../../../components/Button"
import InputText from "../../../../components/InputText"
import { ICustomer } from "../../../../entities/ICustomer"

interface IDataState extends Omit<ICustomer, 'id'> {
  id?: ICustomer['id']
}
interface IForms {
  data?: ICustomer | null,
  onSubmit(data: Omit<ICustomer, 'id'>): void,
  onCancel(): void,
}

const Forms: React.FC<IForms> = ({ onSubmit, onCancel, data: editData = null }) => {
  const [data, setData] = useState<IDataState>({
    name: '',
    cpf: '',
    email: '',
    phone: '',
    street: '',
    number: '',
    city: '',
    state: '',
    complement: null,
  })

  useEffect(() => {
    if (editData) setData(editData)
  }, [editData])

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
          <InputText
            fullWidth={true}
            label="Nome"
            value={data.name}
            onChangeText={(v) => handleOnChange(v, 'name')}
          />
        </Grid>
        <Grid item xs={6}>
          <InputText
            fullWidth={true}
            label="CPF"
            value={data.cpf}
            onChangeText={(v) => handleOnChange(v, 'cpf')}
          />
        </Grid>
      </Grid>
      <Grid item container spacing={4}>
        <Grid item xs={6}>
          <InputText
            fullWidth={true}
            label="Email"
            value={data.email}
            onChangeText={(v) => handleOnChange(v, 'email')}
          />
        </Grid>
        <Grid item xs={6}>
          <InputText
            fullWidth={true}
            label="Telefone"
            value={data.phone}
            onChangeText={(v) => handleOnChange(v, 'phone')}
          />
        </Grid>
      </Grid>
      <Grid item container spacing={4}>
        <Grid item xs={12}>
          <InputText
            fullWidth={true}
            label="Endereço"
            value={data.street}
            onChangeText={(v) => handleOnChange(v, 'street')}
          />
        </Grid>
      </Grid>
      <Grid item container spacing={4}>
        <Grid item xs={2}>
          <InputText
            fullWidth={true}
            label="Número"
            value={data.number}
            onChangeText={(v) => handleOnChange(v, 'number')}
          />
        </Grid>
        <Grid item xs={3}>
          <InputText
            fullWidth={true}
            label="Cidade"
            value={data.city}
            onChangeText={(v) => handleOnChange(v, 'city')}
          />
        </Grid>
        <Grid item xs={3}>
          <InputText
            fullWidth={true}
            label="Estado"
            value={data.state}
            onChangeText={(v) => handleOnChange(v, 'state')}
          />
        </Grid>
        <Grid item xs={4}>
          <InputText
            fullWidth={true}
            label="Complemento"
            value={data.complement??undefined}
            onChangeText={(v) => handleOnChange(v, 'complement')}
          />
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