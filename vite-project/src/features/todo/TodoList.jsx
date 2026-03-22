import { Container, ContainerRow, Description, Status, Title } from "./styles";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useTodos } from "../../hooks/useTodos";
import Button from "../../components/Button/Button";

export default function TodoList() {
    const {isPending: isTodoPending, error: todosError, data: todoData, editTodo, deleteTodo, addTodo} = useTodos();
    const {isPending: isUserPending, error: userError, data: currentUserData} = useCurrentUser();

    if(isTodoPending || isUserPending) return <p>Loading...</p>;
    if(todosError || userError) return <p>Error: {todosError?.message || userError?.message || "An error occurred"}</p>;
    if (!todoData || !currentUserData) return <p>No data available</p>;

    const handleEdit = (todo) => {
        const updatedTodo = { ...todo, title: prompt("Edit title:", todo.title) || todo.title };
        editTodo.mutate(updatedTodo);
    };

    const handleDelete = (todoId) => {
        if (window.confirm("Are you sure you want to delete this todo?")) {
            deleteTodo.mutate(todoId);
        }
    };

    const handleAdd = () => {
        const title = prompt("Enter new todo title:");
        if (!title) {
            alert("Todo title cannot be empty!");
            return;
        }
        const newTodo = {
            userId: currentUserData.id,
            title,
            completed: false,
        };
        console.log("Adding new todo:", newTodo);
        addTodo.mutate(newTodo);
    }

    return (
        <Container>
            <div style={{display: 'flex', justifyContent: 'space-between', margin: '.5rem 0 1rem'}}>
                <Title>My ToDo List</Title>
                <Button 
                    type="success"
                    onClick={() => {handleAdd()}}>+</Button>
            </div>
            {todoData
            .filter(t => t.userId === currentUserData.id)
            .map(filteredTodo => (
                <ContainerRow key={filteredTodo.id}>
                    <Description>{filteredTodo.title}</Description>
                    <Status completed={filteredTodo.completed}>
                        {filteredTodo.completed ? 'Completed' : 'Not Completed'}
                    </Status>
                    <Button type="warning" onClick={() => handleEdit(filteredTodo)}>Edit</Button>
                    <Button type="error" onClick={() => handleDelete(filteredTodo.id)}>Delete</Button>
                </ContainerRow>
            ))}
        </Container>
    );
}