import "../../assets/styles/components/select/select.css";

export default function Select(props) {
    const { todoStatus } = props;
    const optionChange = (e) => {
        todoStatus(e.target.value);
    }

    return (
        <select onChange={optionChange} className="select-box">
            <option value="all" className="select-option">All</option>
            <option value="incomplete" className="select-option">Incomplete</option>
            <option value="completed" className="select-option">Completed</option>
        </select>
    )
}