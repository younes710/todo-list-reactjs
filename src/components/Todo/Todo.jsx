import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import "../../assets/styles/components/todo/todo.css";

export default function Todo(props) {
    const { todoTitle, todoDate, todoStatus, id, statusChange, removeTodoId, editTodoId } = props;
    const [newTodoStatus, setNewTodoStatus] = useState(todoStatus);

    function checkboxChange(e) {
        statusChange(e.target.closest('.todo-container').id);
        if (e.target.checked) {
            setNewTodoStatus('completed');
        } else {
            setNewTodoStatus('incomplete');
        }
    }

    function removeTodoClick(e) {
        removeTodoId(e.target.closest('.todo-container').id);
    }

    function editTodo(e) {
        editTodoId(e.target.closest('.todo-container').id);
    }

    return (
        <div className={`todo-container`} id={id}>
            <div className="todo-info-container">
                <Checkbox onChange={checkboxChange} checked={newTodoStatus === 'completed' ? true : false} />
                <div className="todo-info">
                    <span className={`${newTodoStatus === 'completed' ? 'todo-checked' : ''}`}>{todoTitle}</span>
                    <span className="date-text">{todoDate}</span>
                </div>
            </div>
            <div className="todo-icon-container">
                <div>
                    <button className="todo-icon" onClick={removeTodoClick}>
                        <DeleteIcon sx={{ color: '#585858' }} fontSize="small" />
                    </button>
                </div>
                <div>
                    <button className="todo-icon" onClick={editTodo}>
                        <EditIcon sx={{ color: '#585858' }} fontSize="small" />
                    </button>
                </div>
            </div>
        </div>
    )
}