import React from "react";
// Importing Components
import Todo from "./Todo";

function TodoList({todos, setTodos, filteredTodos}) {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo setTodos={setTodos} todos={todos} key={todo.id} todo={todo} text={todo.text}/>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;