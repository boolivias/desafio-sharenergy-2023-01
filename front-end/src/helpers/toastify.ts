import { toast } from "react-toastify";

export const toastError = (msg: string) => {
  toast(msg, {
    type: 'error',
  })
}

export const toastSuccess = (msg: string) => {
  toast(msg, {
    type: 'success',
  })
}