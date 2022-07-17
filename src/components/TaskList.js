import React, {useState, useEffect} from 'react';
import { getTodos } from '../API/api';
import AddTask from './AddTask';
import TaskItem from './TaskItem';

const TaskList = () => {
  
    let [tasks, setTasks] = useState([]);
    
    let getTasks = async () => {
        const newTodo = await getTodos();
        console.log(newTodo.todos);
        setTasks(newTodo.todos);
     }

    useEffect(() => {
        getTasks();
      }, [])

    useEffect(() => {
        getTasks();
    },[tasks])

    return (
		<ul className='list-group'>
            <AddTask tasks={tasks} setTasks={setTasks}/>
			{tasks?.map((task) => (
				<TaskItem id={task._id} name={task.name} completed={task.completed} />
			))}
		</ul>
	);
}

export default TaskList;