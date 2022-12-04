import React from "react";
import Todos from "./todoList";


async function TestPageTodosComponent() {

    return (
       <div>
        {/* @ts-ignore */}
            <Todos />
       </div>
    )
}

export default TestPageTodosComponent;