import "../../assets/styles/components/select/select.css";

export default function Select(props) {
    const { todoStatus } = props;
    const optionChange = (e) => {
        todoStatus(e.target.value);
    }

    return (
        <select onChange={optionChange} className="select-box">
            <option value="all">All</option>
            <option value="incomplete">Incomplete</option>
            <option value="completed">Completed</option>
        </select>
    )
}