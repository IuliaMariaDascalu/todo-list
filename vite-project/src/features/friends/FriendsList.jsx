import { useUsers } from "../../hooks/useUsers";
import {
    Container, 
    Name, 
    Avatar, 
    Row, 
    Column, 
    Text,
    CloseButton
} from "./styles";
import { 
    FilterButton,
    FilterContainer,
    FilterOption
} from "../../styles/filterButton";
import { Title } from "../../styles/title";
import { useDispatch, useSelector } from "react-redux";
import { setSortedState } from "../../features/filters/sortSlice";

export default function FriendsList() {

    const { isPending, error, data } = useUsers();
    const dispatch = useDispatch();
    const sortOrder = useSelector(state => state.sort.sortedState);

    if(isPending) return <p>Loading...</p>;
    if(error) return <p>An error has occurred: {error.message}</p>;

    const getSortedData = () => {
        let sorted = [...data];
        if(sortOrder === 'asc') {
            sorted.sort((a, b) => a.name.localeCompare(b.name));
        } else if(sortOrder === 'desc') {
            sorted.sort((a, b) => b.name.localeCompare(a.name));
        }
        return sorted;
    };

    return (
        <Container>
            <div style={{display: 'flex', justifyContent: 'space-between', margin: '.5rem 0 1.5rem'}}>
                <Title>Friends List</Title>
                <FilterContainer>
                    <FilterButton value={sortOrder} onChange={(e) => dispatch(setSortedState(e.target.value))}>
                        <FilterOption value="">Default</FilterOption>
                        <FilterOption value="asc">A-Z</FilterOption>
                        <FilterOption value="desc">Z-A</FilterOption>
                    </FilterButton>
                    {sortOrder && (
                        <CloseButton type="secondary" onClick={() => dispatch(setSortedState(''))}>X</CloseButton>
                    )}
                </FilterContainer>
            </div>
            {getSortedData().map(friend => (
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