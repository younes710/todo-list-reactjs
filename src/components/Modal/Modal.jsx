import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import "../../assets/styles/components/modal/modal.css";

export default function Modal() {
    return (
        <>
            <div className='modal d-none'>
                <div className='close-container'>
                    <button className='close-button'>
                        <CloseIcon />
                    </button>
                </div>
                <form className='modal-form'>
                    <h2 className='modal-form-title'>Add TODO</h2>
                    <div className='todo-title'>
                        <label className='form-label'>Title</label>
                        <input type="text" className='todo-title-input' />
                    </div>
                    <div className='todo-status'>
                        <label className='form-label'>Status</label>
                        <select className='todo-status-select'>
                            <option value="incomplete">Incomplete</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                    <div>
                        <Button variant="contained">Add Task</Button>
                        <Button variant="text" sx={{ backgroundColor: '#cccdde', color: '#646681', marginInlineStart: '0.5rem', width: '6rem' }}>Cancel</Button>
                    </div>
                </form>
            </div>
            <div className='overlay d-none'></div>
        </>
    )
}