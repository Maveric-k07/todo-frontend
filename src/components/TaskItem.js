import React, { useState } from 'react'
import { deleteTodo, toggleComplete } from '../API/api'
import '../styles/taskitem.css';


const TaskItem = ({ id, name, completed, index }) => {

	const [complete, setComplete] = useState(completed);

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
		<div className='col-lg-4 col-md-6'>
			<div className={complete === true ? 'card completed-card' : 'card incomplete-card'}>
				<div className='card-body'>
					<h5 className="card-title taskname">{name}</h5>
					<hr className="solid"/>
					<button onClick={handleCompleteClick} className={complete === false ? 'incomplete' : 'complete'}>{complete === false ? 'Mark as completed' : 'Mark as incomplete'}</button>
					<span onClick={handleDeleteClick} >Delete</span>
				</div>
			</div>
		</div>
	);
}

export default TaskItem