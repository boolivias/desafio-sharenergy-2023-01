import { Image as ImgStyled } from './styles'

interface IImage {
  src: string,
}

const Image: React.FC<IImage> = ({ src }) => {
  return (
    <ImgStyled src={src} />
  )
}

export default Image