import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredState } from "../features/filters/filterSlice";
import TodoCard from "../features/todo/TodoCard";
import { useUsers } from "../hooks/useUsers";
import { useTodos } from "../hooks/useTodos";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { 
    PageWrapper,  
    SearchContainer, 
    SearchInput,
    Container
} from "./Tasks.styles";
import {
    FilterContainer,
    FilterButton,
    FilterOption
} from '../styles/filterButton';
import Button from "../components/Button/Button";


export default function Tasks() {

    const dispatch = useDispatch();
    const status = useSelector(state => state.filter.filteredState);

    const [searchedUser, setSearchedUser] = useState('');
    const [myTasksOnly, setMyTasksOnly] = useState(false);

    const {isPending: isTodoPending, error: todosError, data: todoData} = useTodos();
    const {isPending: isUsersPending, error: usersError, data: usersData} = useUsers();
    const {data: currentUserData} = useCurrentUser();
    

    if(isTodoPending || isUsersPending) return <p>Loading...</p>;
    if(todosError || usersError) return <p>Error: {(todosError || usersError).message}</p>;

    const filteredUsers = usersData.filter(user => user.name.toLowerCase().includes(searchedUser.toLowerCase()));
    const filteredUserIds = filteredUsers.map(user => user.id);

    let filteredTodos = todoData;
    if (searchedUser) {
        filteredTodos = todoData.filter(todo => filteredUserIds.includes(todo.userId));
    }
    if (status === 'completed') {
        filteredTodos = filteredTodos.filter(todo => todo.completed);
    } else if (status === 'notCompleted') {
        filteredTodos = filteredTodos.filter(todo => !todo.completed);
    }
    if (myTasksOnly) {
        filteredTodos = filteredTodos.filter(todo => todo.userId === currentUserData.id);
    }

    return (
        <Container>
            <FilterContainer>
                <SearchContainer>
                    <SearchInput 
                        type="text" 
                        placeholder="Search user..." 
                        value={searchedUser}
                        onChange={(e) => setSearchedUser(e.target.value)}
                    />
                </SearchContainer>
                <FilterButton onChange={(e) => dispatch(setFilteredState(e.target.value))} value={status}>
                    <FilterOption value="">All Tasks</FilterOption>
                    <FilterOption value="completed">Completed</FilterOption>
                    <FilterOption value="notCompleted">Not Completed</FilterOption>
                </FilterButton>
                <Button type="primary" onClick={() => setMyTasksOnly((myTasksOnly) => !myTasksOnly)}>
                    {myTasksOnly ? "All Tasks" : "My Tasks"}
                </Button>
            </FilterContainer>
            <PageWrapper>
                {filteredTodos.map(todo => {
                    const user = usersData.find(u => u.id === todo.userId);
                    return (
                        <TodoCard
                            key={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                            userName={user?.name}
                            userEmail={user?.email}
                            userId={user?.id}
                        />
                    );
                })}
            </PageWrapper>
        </Container>
    );
}