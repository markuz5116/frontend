import { useState } from "react";
import data from "../components/ToDoList/data.json";
import Header from "../components/ToDoList/Header";
import ToDoList from "../components/ToDoList/ToDoList";
import ToDoForm from "../components/ToDoList/ToDoForm";

function ToDoListPage() {
    const [ toDoList, setToDoList ] = useState(data)

    const handleToggle = id => {
      let newList = toDoList.map(task => {
        return task.id === Number(id) 
          ? { ...task, complete: !task.complete }
          : { ...task };
      });
  
      setToDoList(newList);
    }
  
    const handleDelete = () => {
      let newList = toDoList.filter(task => !task.complete);
  
      setToDoList(newList);
    }
  
    const addTask = (userInput) => {
      let newList = [...toDoList];
      newList = [...newList, { id: newList.length + 1, task: userInput, complete: false }];
      setToDoList(newList);
    };
  
    return (
      <div className="App">
        <Header />
        <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleDelete={handleDelete} />
        <ToDoForm addTask={addTask}/>
      </div>
    );
}

export default ToDoListPage;