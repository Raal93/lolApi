import { HeaderContainer } from "./HeaderComponent.styles"
import LogoComponent from "../../atoms/Logo/LogoComponent";
import MenuComponent from "../../molecules/Menu/MenuComponent";

const HeaderComponent = () => {
  return (
    <HeaderContainer>
      <LogoComponent/>
      <MenuComponent/>
    </HeaderContainer>
  )
}

export default HeaderComponent;