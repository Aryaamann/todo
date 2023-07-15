import React, { useState } from "react";
import { useRef } from "react";

const Todo = () => {
    const [task,settask]=useState([]);
    const taskInputRef = useRef(null);
    const addTask=() =>{
            // eslint-disable-next-line no-restricted-globals
            event.preventDefault();
            const taskText= taskInputRef.current.value.trim();
            if(taskText!==""){
                settask((prevtasks) => [...prevtasks,taskText]);
                taskInputRef.current.value="";
            }
            console.log("task are",task)
    }
    return (
        <>
        <div className="container">
        <h1>To Do List</h1>
        <div className="input-container">
            <input type="text" placeholder="Enter text" className="task-input" ref={taskInputRef}/>
            <button className="add-button" onClick={addTask}>ADD</button>
        </div>
        </div>
        </>
    )
}
export default Todo;