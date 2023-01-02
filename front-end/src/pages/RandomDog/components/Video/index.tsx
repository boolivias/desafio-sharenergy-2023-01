import { Video as VideoStyled } from './styles'

interface IVideo {
  src: string,
}

const Video: React.FC<IVideo> = ({ src }) => {
  return (
    <VideoStyled src={src} controls autoPlay />
  )
}

export default Video