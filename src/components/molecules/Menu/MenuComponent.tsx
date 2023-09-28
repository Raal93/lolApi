import { Menu, MenuHamburger, MenuItem, MenuList, StyledLink } from "./MenuComponent.styles";

const MenuComponent = () => {
  return (
    <Menu>
      <MenuHamburger>Hamburger</MenuHamburger>
      <MenuList>
        <MenuItem><StyledLink to="/">home</StyledLink></MenuItem>
        <MenuItem><StyledLink to="/itemlist">Przedmioty</StyledLink></MenuItem>
        <MenuItem><StyledLink to="/aboutsite">O stronie</StyledLink></MenuItem>
      </MenuList>
    </Menu>
  )
}

export default MenuComponent;