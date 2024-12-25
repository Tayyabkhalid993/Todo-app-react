import { useContext, createContext, ReactNode } from "react";

type Todo = {
    id: number;
    todo: string;
    completed: boolean;
};

type TodoContextType = {
    todos: Todo[];
    addTodos: (todo: Todo) => void;
    updateTodos: (todo: Todo, id: number) => void;
    deleteTodos: (id: number) => void;
    toggleComplete: (id: number) => void;
};

export const TodoContext = createContext<TodoContextType>({
    todos: [
        {
            id: 1,
            todo: "First Message",
            completed: false
        }
    ],
    addTodos: () => {},
    updateTodos: () => {},
    deleteTodos: () => {},
    toggleComplete: () => {}
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
};