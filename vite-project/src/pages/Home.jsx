import FriendsList from "../features/friends/FriendsList";
import TodoList from "../features/todo/TodoList";
import {StyledCalendar, Container} from "./Home.styles";

export default function Home() {
    return (
        <Container>
            <div style={{display: 'flex', gap: '.5rem', height: '45vh'}}>
                <StyledCalendar />
                <FriendsList/>
            </div> 
            <TodoList/>
        </Container>
    );
}