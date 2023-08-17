import Todo from "../Todo/Todo";
import "../../assets/styles/components/todoList/todoList.css";

export default function TodoList(props) {
    const { todos, todoStatusFilter, todoStatusChange, removeTodo, editTodo } = props;

    function statusChangeId(id) {
        todoStatusChange(id);
    }

    function removeTodoId(id) {
        removeTodo(id);
    }

    function editTodoId(id) {
        editTodo(id);
    }

    return (
        <div className="todos">
            <div className={`no-todos ${todos.length > 0 ? 'd-none' : ''}`}>
                <span>No Todos</span>
            </div>
            {todoStatusFilter === 'all'
                ? todos.map((todo, index) => {
                    return (
                        <Todo key={index} id={todo.id} todoTitle={todo.todoTitle} todoDate={todo.date} todoStatus={todo.todoStatus} statusChange={statusChangeId} removeTodoId={removeTodoId} editTodoId={editTodoId} />
                    )
                })
                : todos.filter(todo => todo.todoStatus === todoStatusFilter).map((todo, index) => {
                    return (
                        <Todo key={index} id={todo.id} todoTitle={todo.todoTitle} todoDate={todo.date} todoStatus={todo.todoStatus} statusChange={statusChangeId} removeTodoId={removeTodoId} editTodoId={editTodoId} />
                    )
                })
            }
        </div>
    )
}