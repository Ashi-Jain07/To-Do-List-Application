import "./style.css";
import ToDoItems from "./ToDoItems.jsx";
import { useState } from "react";

function ToDoList(props) {
    const [inputValue, setInputValue] = useState("");
    const [todo, setTodo] = useState(props.todotask);

    //Handle event for Add a task
    function handleAdd() {
        if (inputValue == "") {
            alert("Write a task you want to add")
        }
        else {
            setTodo([...todo, { task: inputValue, completed: false }]);
            setInputValue("");
        }
    }

    //Handle event for Edit a task
    function editTask(index, newText) {
        const updatedTodos = todo.map((task, id) =>
            id === index ? { ...task, task: newText } : task
        );
        setTodo(updatedTodos);
    }

    //Handle event for Delete a task
    function deleteTask(index) {
        const updatedTodos = todo.filter((_, id) => id !== index);
        setTodo(updatedTodos);
    }

    return (
        <>
            <div className="add-task-div">
                <input
                    type="text"
                    value={inputValue}
                    placeholder="Add Task"
                    onChange={(e) => setInputValue(e.target.value)}
                    className="add-task "
                />

                <button onClick={handleAdd} className="add-btn">ADD</button>
            </div>

            {/* Render task using map function */}
            <div className="task-field-div">
                {todo.map((data, index) => (
                    <ToDoItems
                        key={index}
                        seperateTask={data}
                        onDeleteTask={() => deleteTask(index)}
                        onToggleComplete={() => toggleComplete(index)}
                        onEditTask={(newText) => editTask(index, newText)}
                    />
                ))}
            </div>
        </>
    );
}

export default ToDoList;
