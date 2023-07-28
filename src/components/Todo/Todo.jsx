import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import "../../assets/styles/components/todo/todo.css";

export default function Todo(props) {
    const { todoTitle, todoDate } = props;

    return (
        <div className="todo-container">
            <div className="todo-info-container">
                <Checkbox />
                <div className="todo-info">
                    <span>{todoTitle}dfds</span>
                    <span className="date-text">{todoDate}dfas</span>
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