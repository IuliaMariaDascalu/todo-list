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
            const data = await response.json();
            console.log("Add Todo Response:", data);
            if (!response.ok) {
                throw new Error('Failed to add todo');
            }
            return data;
        },
        onSuccess: (newTodoData) => {
            console.log("New todo added:", newTodoData);
            queryClient.setQueryData(['todos'], (oldTodos = []) => {
                return [newTodoData, ...oldTodos];
            });
        },
    });

    return { ...todosQuery, editTodo, deleteTodo, addTodo };
};