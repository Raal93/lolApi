import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Menu = styled.nav`
`
export const MenuList = styled.ul`
list-style-type: none;
display: none;
@media (min-width: 600px) {
  display: flex;
}`
export const MenuItem = styled.li`
padding: 10px;
cursor: pointer;
&:hover {
  text-decoration: underline;
  font-weight: bold;
}`

export const MenuHamburger = styled.div`
@media (min-width: 600px) {
  display: none;
}`

export const StyledLink = styled(NavLink)`
color: inherit;
text-decoration: inherit;
`
