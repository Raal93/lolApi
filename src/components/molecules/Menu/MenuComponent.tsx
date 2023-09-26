import { Menu, MenuHamburger, MenuItem, MenuList } from "./MenuComponent.styles";

const MenuComponent = () => {
  return (
    <Menu>
      <MenuHamburger>Hamburger</MenuHamburger>
        <MenuList>
          <MenuItem>first</MenuItem>
          <MenuItem>second</MenuItem>
          <MenuItem>third</MenuItem>
          <MenuItem>fourth</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default MenuComponent;