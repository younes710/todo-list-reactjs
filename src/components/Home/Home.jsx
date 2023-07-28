import TodoList from "../TodoList/TodoList";
import Select from "../Select/Select";
import Button from "@mui/material/Button";
import "../../assets/styles/components/home/home.css";

export default function Home() {
    function getTodoStatus(status) {
        console.log(status);
    }

    return (
        <div className="todos-container">
            <h1 className="page-name">TODO LIST</h1>
            <div className="todo-list-actions">
                <Button variant="contained">Add Task</Button>
                <Select todoStatus={getTodoStatus} />
            </div>
            <TodoList />
        </div>
    )
}