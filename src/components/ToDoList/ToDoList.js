import React from "react";
import ToDo from "./ToDo";

function ToDoList({ toDoList, handleToggle, handleDelete }) {
    return (
        <div>
            {toDoList.map(toDo => {
                return <ToDo
                    key={toDo.id}
                    toDo={toDo} 
                    handleToggle={handleToggle}
                />
            }
            )}
            <button style={{margin: '20px'}} onClick={handleDelete}>Clear Completed</button>
        </div>
    )
}

export default ToDoList;