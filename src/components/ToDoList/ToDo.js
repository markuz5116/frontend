import React from "react";
import "../../styles/ToDo.css"

function ToDo({toDo, handleToggle}) {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    };

    return (
        <div 
            id={toDo.id}
            key={toDo.id + toDo.task}
            value={toDo.id}
            name="todo"
            className={toDo.complete ? "todo-done" : "todo"} 
            onClick={handleClick}
        >
            {toDo.task}
        </div>
    );
}

export default ToDo;