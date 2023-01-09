import { Link, withStyles } from "@material-ui/core"
// import style from "./style"
import style from "./style"

interface ILinkMenu {
  children: React.ReactNode,
  href?: string,
  type?: 'default' | 'logout',
  onClick?(): void,
}

const LinkMenu: React.FC<ILinkMenu> = ({ children, href, type = 'default', onClick }) => {
  const classes = (
    type === 'logout'
      ? style.logout
      : style.default
  )()

  return (
    <Link
      href={href}
      classes={classes}
      onClick={() => {
        if(onClick) onClick()
      }}
    >
      {children}
    </Link>
  )
}

export default LinkMenu