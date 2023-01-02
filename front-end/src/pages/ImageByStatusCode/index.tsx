import { useState } from "react"
import { toastError } from "../../helpers/toastify"
import api from "../../services/api"
import ImageByStatusCodeView from "./view"

const ImageByStatusCodePage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  async function handleOnSubmit(statusCode: string) {
    try {
      const resp = await api.get(`http-cat/${statusCode}`, { responseType: 'blob' })
      let reader = new window.FileReader()
      reader.readAsDataURL(resp.data)
      reader.onload = function () {
        let imageDataUrl = reader.result
        setImageUrl(imageDataUrl as string)
      };
    } catch (error: any) {
      console.log(error)
      toastError(JSON.parse(await error?.response?.data.text()).message)
      setImageUrl(null)
    }
  }

  return (
    <ImageByStatusCodeView
      data={imageUrl}
      onSubmit={handleOnSubmit}
    />
  )
}

export default ImageByStatusCodePage