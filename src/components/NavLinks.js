const NavLinks = (props) => {
  return (
    <li className="nav-item">
        <a className="nav-link active" href={props.hrefA}>{props.title}</a>
    </li>
  )
}

export default NavLinks