import { UserBox, Avatar, Name, Email } from "./styles";

export default function SidemenuUser() {
  return (
    <UserBox>
      <Avatar src="https://i.pravatar.cc/100" />
      <Name>John Doe</Name>
      <Email>john@example.com</Email>
    </UserBox>
  );
}