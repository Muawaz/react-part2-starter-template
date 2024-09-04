import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "./useTodos";
import axios from "axios";
import { CACHE_KEY_TODOS } from "../constants";

interface addTodoContext {
    previousTodos: Todo[];
  }

const useAddTodo = (onAdd: () => void) => {
    const queryClient = useQueryClient();

    return useMutation<Todo, Error, Todo, addTodoContext>({
        mutationFn: (todo: Todo) =>
        axios
            .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
            .then((res) => res.data),

        onMutate: (newTodo: Todo) => {
        const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];

        // Second Approach: Update data in Cache, directly
        queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
            newTodo,
            ...todos,
        ]);

        onAdd();

        return { previousTodos };
        },
        onSuccess: (savedTodo, newTodo) => {
        queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
            todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
        );
        },
        onError: (error, newTodo, context) => {
        if (!context) return;

        queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
        },
    });
}

export default useAddTodo;