import { useState } from "react";
import TodoList from "../TodoList/TodoList";
import Modal from "../Modal/Modal";
import Select from "../Select/Select";
import Button from "@mui/material/Button";
import "../../assets/styles/components/home/home.css";

export default function Home() {
    const [openModal, setOpenModal] = useState(false);
    const [todos, setTodos] = useState([]);

    function closeModal() {
        setOpenModal(false);
    }

    function newTodo(todoTitle, todoStatus, date) {
        setTodos([...todos, { todoTitle: todoTitle, todoStatus: todoStatus, date: date }]);
    }

    function getTodoStatus(status) {
        console.log(status);
    }

    return (
        <div className="todos-container">
            <h1 className="page-name">TODO LIST</h1>
            <div className="todo-list-actions">
                <Button variant="contained" onClick={() => {
                    setOpenModal(true);
                }}>Add Task</Button>
                <Select todoStatus={getTodoStatus} />
            </div>
            <TodoList todos={todos} />
            <Modal openModal={openModal} closeModal={closeModal} addTodo={newTodo} />
        </div>
    )
}