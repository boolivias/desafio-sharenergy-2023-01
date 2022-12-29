import { Grid, Link } from '@material-ui/core'
import DnsIcon from '@material-ui/icons/Dns'
import HomeIcon from '@material-ui/icons/Home'
import PeopleIcon from '@material-ui/icons/People'
import PetsIcon from '@material-ui/icons/Pets'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import LinkMenu from "../Link"
import useStyle from './style'

const SideMenu: React.FC = () => {
  const classes = useStyle()

  return (
    <Grid
      item
      container
      direction="column"
      classes={{
        item: classes.item,
      }}
    >
      <LinkMenu
        href="#"
      >
        <HomeIcon />Inicio
      </LinkMenu>
      <LinkMenu
        href="#"
      >
        <DnsIcon /> Imagem por status code
      </LinkMenu>
      <LinkMenu
        href="#"
      >
        <PetsIcon /> Random dog
      </LinkMenu>
      <LinkMenu
        href="#"
      >
        <PeopleIcon /> Clientes
      </LinkMenu>

      <LinkMenu type='logout'>
        <PowerSettingsNewIcon /> Sair
      </LinkMenu>
    </Grid>
  )
}

export default SideMenu