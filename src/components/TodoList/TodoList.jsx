import Todo from "../Todo/Todo";
import "../../assets/styles/components/todoList/todoList.css";

export default function TodoList() {
    return (
        <div className="todos">
            <div className="no-todos">
                <span>No Todos</span>
            </div>
            {/* <Todo todoTitle={''} todoDate={''} /> */}
        </div>
    )
}