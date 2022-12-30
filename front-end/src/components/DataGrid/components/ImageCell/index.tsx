import Avatar from '@material-ui/core/Avatar';

interface IActionsCell {
  params: { value: any },
}

const ImageCell: React.FC<IActionsCell> = ({ params }) => {
  return(
    <Avatar
      alt="Imagem"
      style={{
        margin: 'auto',
      }}
      src={params.value?.toString()}
    />
  )
}

export default ImageCell