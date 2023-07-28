import Todo from "../Todo/Todo";
import "../../assets/styles/components/todoList/todoList.css";

export default function TodoList(props) {
    const { todos } = props;
    return (
        <div className="todos">
            <div className={`no-todos ${todos.length > 0 ? 'd-none' : ''}`}>
                <span>No Todos</span>
            </div>
            {todos.map((todo, index) => {
                return (
                    <Todo key={index} todoTitle={todo.todoTitle} todoDate={todo.date} todoStatus={todo.todoStatus} />
                )
            })}
        </div>
    )
}