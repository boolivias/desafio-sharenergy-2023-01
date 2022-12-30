import { Grid, IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

interface IActionsCell {
  params: any,
  onEdit(row: any): void,
  onDelete(row: any): void,
}

const ActionsCell: React.FC<IActionsCell> = ({ params, onEdit, onDelete }) => {
  function handleOnClickAction(callback: (p: any) => void) {
    callback(params.row);
  }

  return (
    <Grid
      container
      justifyContent="space-around"
    >
      <IconButton
        onClick={() => {
          handleOnClickAction(onEdit)
        }}
      >
        <EditIcon />
      </IconButton>
      <IconButton
        onClick={() => {
          handleOnClickAction(onDelete)
        }}
      >
        <DeleteIcon />
      </IconButton>
    </Grid>
  )
}

export default ActionsCell