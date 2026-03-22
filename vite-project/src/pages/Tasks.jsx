import TodoCard from "../features/todo/TodoCard";
import { useUsers } from "../hooks/useUsers";
import { useTodos } from "../hooks/useTodos";
import { 
    PageWrapper,  
    SearchContainer, 
    SearchButton, 
    SearchInput,
    FilterContainer,
    FilterButton,
    FilterOption,
    Container
} from "./Tasks.styles";
import { StyledButton } from "../components/Button/styles";

export default function Tasks() {

    const {isPending: isTodoPending, error: todosError, data: todoData} = useTodos();
    const {isPending: isUsersPending, error: usersError, data: usersData} = useUsers();

    if(isTodoPending || isUsersPending) return <p>Loading...</p>;
    if(todosError || usersError) return <p>Error: {(todosError || usersError).message}</p>;

    return (
        <Container>
            <FilterContainer>
                <FilterButton>
                    <FilterOption value="" selected>All Tasks</FilterOption>
                    <FilterOption value="completed">Completed</FilterOption>
                    <FilterOption value="notCompleted">Not Completed</FilterOption>
                </FilterButton>
                <StyledButton onClick={() => {}} type="warning">My tasks</StyledButton>
                <SearchContainer>
                    <SearchInput type="text" placeholder="Search friends..." />
                    <SearchButton>Search</SearchButton>
                </SearchContainer>
            </FilterContainer>
            <PageWrapper>
                {todoData.map(todo => {
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