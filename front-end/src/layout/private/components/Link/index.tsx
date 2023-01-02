import { Link, withStyles } from "@material-ui/core"
// import style from "./style"
import style from "./style"

interface ILinkMenu {
  children: React.ReactNode,
  href?: string,
  type?: 'default' | 'logout',
}

const LinkMenu: React.FC<ILinkMenu> = ({ children, href, type = 'default' }) => {
  const classes = (
    type === 'logout'
      ? style.logout
      : style.default
  )()

  return (
    <Link
      href={href}
      classes={classes} 
    >
      {children}
    </Link>
  )
}

export default LinkMenu