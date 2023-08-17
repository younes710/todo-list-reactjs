import { Fragment, useContext } from 'react';
import { useState, useRef } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { editContext } from '../Home/Home';
import "../../assets/styles/components/modal/modal.css";

export default function Modal(props) {
    const { openModal, closeModal, addTodo } = props;
    const [todoTitle, setTodoTitle] = useState('');
    const [todoStatus, setTodoStatus] = useState('incomplete');
    const todoTitleVal = useRef();
    const editTodoContext = useContext(editContext);
    console.log(editTodoContext);

    function addNewTodo() {
        const newDate = new Date();
        const dateFormat =
            ("00" + (newDate.getMonth() + 1)).slice(-2) + "/" +
            ("00" + newDate.getDate()).slice(-2) + "/" +
            newDate.getFullYear() + " " +
            ("00" + newDate.getHours()).slice(-2) + ":" +
            ("00" + newDate.getMinutes()).slice(-2) + ":" +
            ("00" + newDate.getSeconds()).slice(-2)
        if (todoTitle) {
            addTodo(todoTitle, todoStatus, dateFormat);
            setTodoTitle('');
            todoTitleVal.current.value = ''
            closeModal();
        }
    }

    return (
        <Fragment>
            <div className={`modal ${openModal ? '' : 'd-none'}`}>
                <div className='close-container'>
                    <button className='close-button' onClick={closeModal}>
                        <CloseIcon />
                    </button>
                </div>
                <form className='modal-form'>
                    <h2 className='modal-form-title'>Add TODO</h2>
                    <div className='todo-title'>
                        <label className='form-label'>Title</label>
                        <input type="text" className='todo-title-input' ref={todoTitleVal} onChange={() => {
                            setTodoTitle(todoTitleVal.current.value);
                        }} required
                        />
                    </div>
                    <div className='todo-status'>
                        <label className='form-label'>Status</label>
                        <select className='todo-status-select' onChange={(e) => {
                            setTodoStatus(e.target.value);
                        }}>
                            <option value="incomplete">Incomplete</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                    <div>
                        <Button variant="contained" onClick={addNewTodo} type='submit'>Add Task</Button>
                        <Button variant="text" sx={{ backgroundColor: '#cccdde', color: '#646681', marginInlineStart: '0.5rem', width: '6rem' }} onClick={closeModal}>Cancel</Button>
                    </div>
                </form>
            </div>
            <div className={`overlay ${openModal ? '' : 'd-none'}`}></div>
        </Fragment>
    )
}