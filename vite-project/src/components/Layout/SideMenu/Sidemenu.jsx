import SidemenuUser from "./SidemenuUser";
import SidemenuNav from "./SidemenuNav";
import { Container } from "./styles";

export default function Sidebar() {
  return (
    <Container>
      <SidemenuUser />
      <SidemenuNav />
    </Container>
  );
}