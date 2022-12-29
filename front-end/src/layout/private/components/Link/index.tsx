import { Link, withStyles } from "@material-ui/core"
// import style from "./style"
import style from "./style"

interface ILinkMenu {
  children: React.ReactNode,
  href?: string,
  type?: 'default' | 'logout',
}

const LinkStyled = withStyles(style)((props) => (<Link {...props} />))

const LinkMenu: React.FC<ILinkMenu> = ({ children, href, type = 'default' }) => {

  return (
    <LinkStyled
      href={href}
      type={type}
    >
      {children}
    </LinkStyled>
  )
}

export default LinkMenu