import { Menu, MenuHamburger, MenuItem, MenuList, StyledLink } from "./MenuComponent.styles";

const MenuComponent = () => {
  return (
    <Menu>
      <MenuHamburger>Hamburger</MenuHamburger>
      <MenuList>
        <MenuItem><StyledLink to="/">Home</StyledLink></MenuItem>
        <MenuItem><StyledLink to="/itemlist">Kupuj</StyledLink></MenuItem>
        <MenuItem><StyledLink to="/aboutsite">Kontakt</StyledLink></MenuItem>
      </MenuList>
    </Menu>
  )
}

export default MenuComponent;