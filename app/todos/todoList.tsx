import Link from "next/link";
import React from "react"
import { Todo } from  '../../typings';

const fetchTodosTest = async () => {
const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const todos: Todo[] = await res.json();
    console.log("This is the todos", todos)
    return todos;
}

async function Todos() {
    const todos = await fetchTodosTest() 

    return <>
        {todos.map((todo) => (
            <p key={todo.id}>
                <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
            </p>
    ))}
</> 
}

export default Todos; 