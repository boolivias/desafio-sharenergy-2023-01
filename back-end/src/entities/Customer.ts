export interface Customer {
  id: string,
  cpf: string,
  name: string,
  email: string,
  phone: string,
  address: {
    street: string,
    number: string,
    city: string,
    state: string,
    complement: string | null,
  },
}