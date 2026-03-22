import { Nav, NavItem } from "./styles";

export default function SidemenuNav() {
  return (
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="tasks">Friends</NavItem>
    </Nav>
  );
}