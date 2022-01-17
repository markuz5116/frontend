import { useState } from "react";

function ToDoForm({addTask}) {
    const [ userInput, setUserInput ] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    };
    
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} onKeyPress={handleKeyPress}>
            <input 
                value={userInput}
                type="text"
                onChange={handleChange}
                placeholder="Enter new task..."
            />
            <button style={{margin: '5px'}}>Submit</button>

            </form>
        </div>
    );
}

export default ToDoForm;