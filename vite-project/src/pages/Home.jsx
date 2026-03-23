import FriendsList from "../features/friends/FriendsList";
import TodoList from "../features/todo/TodoList";
import {StyledCalendar, TopRow, BottomRow} from "./Home.styles";

export default function Home() {
    return (
        <>
            <TopRow>
                <StyledCalendar />
                <FriendsList />
            </TopRow>
            <BottomRow>
                <TodoList />
            </BottomRow>
        
        </>
    );
}