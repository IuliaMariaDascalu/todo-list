import { useUsers } from "../../hooks/useUsers";
import {
    Container, 
    Name, 
    Avatar, 
    Row, 
    Column, 
    Text
} from "./styles";

export default function FriendsList() {

    const { isPending, error, data } = useUsers();

    if(isPending) return <p>Loading...</p>;
    if(error) return <p>An error has occurred: {error.message}</p>;

    return (
        <Container>
            <h2>Friends List</h2>
            {data.map(friend => (
                <Row key={friend.id}>
                    <Avatar src={`https://i.pravatar.cc/100?img=${friend.id}`} />
                    <Name>{friend.name}</Name>
                    <Column>
                        <Text>{friend.email}</Text>
                        <Text>{friend.phone}</Text>
                    </Column>
                </Row>
            ))}
        </Container>
    );
}