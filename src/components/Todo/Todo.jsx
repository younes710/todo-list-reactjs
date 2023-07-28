import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import "../../assets/styles/components/todo/todo.css";

export default function Todo(props) {
    const { todoTitle, todoDate, todoStatus } = props;
    const [newTodoStatus, setNewTodoStatus] = useState(todoStatus);
    const [todoComplete, setTodoComplete] = useState(false);
    function checkboxChange(e) {
        if (e.target.checked) {
            setTodoComplete(true);
        } else {
            setTodoComplete(false);
        }
    }

    return (
        <div className="todo-container">
            <div className="todo-info-container">
                <Checkbox onChange={checkboxChange} />
                <div className="todo-info">
                    <span className={`${todoComplete ? 'todo-checked' : ''}`}>{todoTitle}</span>
                    <span className="date-text">{todoDate}</span>
                </div>
            </div>
            <div className="todo-icon-container">
                <div>
                    <button className="todo-icon">
                        <DeleteIcon sx={{ color: '#585858' }} fontSize="small" />
                    </button>
                </div>
                <div>
                    <button className="todo-icon">
                        <EditIcon sx={{ color: '#585858' }} fontSize="small" />
                    </button>
                </div>
            </div>
        </div>
    )
}