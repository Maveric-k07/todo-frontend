import React, {useState, useEffect} from 'react';
import { getTodos } from '../API/api';
import TaskItem from './TaskItem';

// const fetch = require('node-fetch');
// const axios = require('axios');

const TaskList = () => {
  
    let [tasks, setTasks] = useState([]);
    
    useEffect(() => {
       const newTodo = getTodos();
       console.log(newTodo);
       setTasks(newTodo);
    }, [])

    // let getTasks = async () => {
    //     let response = await fetch("/api/");
    //     let data = await response.json();
    //     setTasks(data);
    
    //     // try {
    //     //     const response = await axios.get("/api/notes/");
    //     //     let data = await response.json();
    //     //     setNotes(data);
    //     //   } catch (error) {
    //     //     console.error(error);
    //     // }
    // }

    return (
		<ul className='list-group'>
			{tasks.map((todo) => (
				<TaskItem id={todo.id} name={todo.name} completed={todo.completed} />
			))}
		</ul>
	);
}

export default TaskList;