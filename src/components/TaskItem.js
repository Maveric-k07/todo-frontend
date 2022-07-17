import React, { useState } from 'react'
import { deleteTodo, toggleComplete } from '../API/api'



const TaskItem = ({ id, name, completed }) => {

	const [complete, setComplete] = useState(false);

    const handleDeleteClick = () => {
		deleteTodo(id);
	}

    const handleCompleteClick = () => {
		toggleComplete(id, complete);
		if(complete === true){
			setComplete(false);
		} else {
			setComplete(true);
		}
	}
    
    return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					{name}
				</span>
				<button onClick={handleCompleteClick} className={complete === false ? 'btn btn-primary' : 'btn btn-danger'} >Mark as complete</button>
				<button onClick={handleDeleteClick} className='btn btn-danger'>Delete</button>

			</div>
		</li>
	);
}

export default TaskItem