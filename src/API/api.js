import { nanoid } from "nanoid";

export const getTodos = (
    async() => {
        const response = await fetch('/api/');
        if (response.ok) {
            const todos = await response.json();
            return { todos };
        }
    }
)

export const addTodos = (
    async(newTodo) => {
        const response = await fetch('/api/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: nanoid(), name: newTodo.name, completed: false })
        });
        if (response.ok) {
            const todos = await response.json();
            return { todos };
        }
    }
)