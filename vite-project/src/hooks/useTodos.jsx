import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useTodos = () => {
    const queryClient = useQueryClient();

    const todosQuery =  useQuery({
        queryKey: ['todos'],
        queryFn: async () => {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/todos'
        );
        if (!response.ok) {
            throw new Error('Failed to fetch todos');
        }
        return response.json();
        },
    });

    const editTodo = useMutation({
        mutationFn: async (updatedTodo) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`,
            {
            method: 'PUT',
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
            body: JSON.stringify(updatedTodo),
            }
        );
            if (!response.ok) {
                throw new Error('Failed to edit todo');
            }
            return response.json();
        },
        onSuccess: (editTodo) => {
            queryClient.setQueryData(['todos'], (oldTodos = []) => {
                return oldTodos.map((todo) =>
                    todo.id === editTodo.id ? editTodo : todo
                );
            });
        },
    });

    const deleteTodo = useMutation({
        mutationFn: async (todoId) => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete todo');
            }
            return todoId;
        },
        onSuccess: (deletedTodoId) => {
            queryClient.setQueryData(['todos'], (oldTodos) => {
                return oldTodos.filter((todo) => todo.id !== deletedTodoId);
            });
        },
    });

    const addTodo = useMutation({
        mutationFn: async (newTodo) => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
                    method: 'POST',
                    body: JSON.stringify(newTodo),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                });
                console.log("Add Todo Response:", response.json());
            if (!response.ok) {
                throw new Error('Failed to add todo');
            }
            return response.json();
        },
        onSuccess: () => {
            console.log("New todo added:", newTodo);
            queryClient.setQueryData(['todos'], (oldTodos = []) => {
                return [newTodo, ...oldTodos];
            });
        },
    });

    return { ...todosQuery, editTodo, deleteTodo, addTodo };
};