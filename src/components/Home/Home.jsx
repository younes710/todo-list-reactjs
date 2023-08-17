import { useState } from "react";
import TodoList from "../TodoList/TodoList";
import Modal from "../Modal/Modal";
import Select from "../Select/Select";
import Button from "@mui/material/Button";
import "../../assets/styles/components/home/home.css";

export default function Home() {
    const [openModal, setOpenModal] = useState(false);
    const [todos, setTodos] = useState([]);
    const [todoStatusFilter, setTodoStatusFilter] = useState('all');
    const [editTodoDetail, setEditTodoDetail] = useState('');

    function closeModal() {
        setOpenModal(false);
    }

    function newTodo(todoTitle, todoStatus, date) {
        setTodos([...todos, { todoTitle: todoTitle, todoStatus: todoStatus, date: date, id: Date.now() }]);
    }

    function getTodoStatus(status) {
        setTodoStatusFilter(status);
    }

    function getTodoStatusChanged(id) {
        console.log(todos.filter(todo => todo.id === Number(id)));
        const todoCheck = todos.filter(todo => todo.id === Number(id));
        if (todoCheck[0].todoStatus === 'incomplete') {
            todoCheck[0].todoStatus = 'completed';
        } else {
            todoCheck[0].todoStatus = 'incomplete';
        }
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== Number(id)));
    }

    function editTodo(id) {
        setEditTodoDetail(...todos.filter(todo => todo.id === Number(id)));
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
            <TodoList todos={todos} todoStatusChange={getTodoStatusChanged} todoStatusFilter={todoStatusFilter} removeTodo={removeTodo} editTodo={editTodo} />
            <Modal openModal={openModal} closeModal={closeModal} addTodo={newTodo} editTodoModal={editTodoDetail} />
        </div>
    )
}