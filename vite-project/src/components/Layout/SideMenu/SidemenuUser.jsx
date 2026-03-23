import { UserBox, Avatar, Name, Email } from "./styles";
import { useCurrentUser } from "../../../hooks/useCurrentUser";

export default function SidemenuUser() {

  const { isPending, error, data } = useCurrentUser();

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No user data available</p>;

  return (
    <UserBox>
      <Avatar src="https://i.pravatar.cc/100" />
      <Name>{data.name}</Name>
      <Email>{data.email}</Email>
    </UserBox>
  );
}