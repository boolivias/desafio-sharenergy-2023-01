import { useEffect, useState } from "react"
import Loading from "../../components/Loading"
import { toastError } from "../../helpers/toastify"
import api from "../../services/api"
import RandomDogView from "./view"

export interface IData {
  type: 'image' | 'video',
  src: string | ArrayBuffer,
}

const RandomDogPage: React.FC = () => {
  const [data, setData] = useState<IData>({
    type: 'image',
    src: '',
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => { handleOnSubmit() }, [])

  async function handleOnSubmit() {
    setIsLoading(true)
    try {
      const resp = await api.get(`random-dog`, { responseType: 'blob' })
      let reader = new window.FileReader()
      reader.readAsDataURL(resp.data)
      reader.onload = function () {
        let imageDataUrl = reader.result
        if (imageDataUrl)
          setData({
            type: (resp.headers.getContentType as () => string)().split('/')[0] === 'image' ? 'image' : 'video',
            src: imageDataUrl,
          })

        setIsLoading(false)
      };
    } catch (error: any) {
      setIsLoading(false)
      console.log(error)
      toastError(JSON.parse(await error?.response?.data.text()).message)
    }
  }

  return isLoading
    ? <Loading />
    : (
      <RandomDogView
        data={data}
        onSubmit={() => handleOnSubmit()}
      />
    )
}

export default RandomDogPage