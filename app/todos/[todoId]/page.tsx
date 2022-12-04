import React from "react";
import { Todo } from "../../../typings";
import { notFound } from 'next/navigation'

export const dynamicParams = true; // learn or check this

type PageProps = {
    params: {
        todoId: string;
    }
}

// const fetchTodo = async (todoId: string) => {
//     const res = await fetch(
//         `https://jsonplaceholder.typicode.com/todos/${todoId}`, { next: { revalidate: 60} } 
//         )

//     const todo: Todo = await res.json();
//     return todo;
// }

async function TodoPage({ params: { todoId } }: PageProps) {
    // const todo = await fetchTodo(todoId);

    // if (!todo.id) return notFound()

    // console.log(todo)

    // return (
    //     <div>
    //         <p>
    //             TodoPage: {todo.id}
    //         </p>
    //     </div>
    // )

    return <div>TodoPage: {todoId}</div>
}

export default TodoPage;





// this SSR Example
// export async function generateStaticParams() {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`)
//     const todos: Todo[] = await res.json();

//     const splicedTodos = todos.splice(0, 10);

//     return splicedTodos.map(todo => ({
//         todoId: todo.id.toString()
//     }))

// }