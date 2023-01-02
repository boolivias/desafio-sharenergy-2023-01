import { useState } from "react"
import apiStatusCat from "../../services/statusCat"
import ImageByStatusCodeView from "./view"

const ImageByStatusCodePage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  async function handleOnSubmit(statusCode: string) {
    try {
      const resp = await apiStatusCat.get(statusCode)
      console.log('=============> RESPOSTA STATUS CAT')
      console.log(resp)
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <ImageByStatusCodeView
      data={imageUrl}
      onSubmit={handleOnSubmit}
    />
  )
}

export default ImageByStatusCodePage