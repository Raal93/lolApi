import { HeaderContainer } from "./HeaderComponent.styles"
import LogoComponent from "../../atoms/Logo/LogoComponent";
import MenuComponent from "../../molecules/Menu/MenuComponent";
import SearchInputComponent from "../../molecules/SearchInputComponent/SearchInputComponent";


const HeaderComponent = () => {
  return (
    <HeaderContainer>
      <LogoComponent />
      <SearchInputComponent />
      <MenuComponent/>
    </HeaderContainer>
  )
}

export default HeaderComponent;