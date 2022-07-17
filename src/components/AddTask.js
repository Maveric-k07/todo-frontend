import React, { useState } from "react";
import { addTodos } from "../API/api";

function AddTask({tasks ,setTask}) {

  const [text, setText] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = addTodos({name:text});
    setText("");
    setTask([...tasks, newTodo])
  };

  return (
    <form onSubmit={handleSubmit} className='form-inline mt-3 mb-3'>
        <label className='sr-only'>Name</label>
        <input
            type='text'
            className='form-control mb-2 mr-sm-2'
            placeholder='Enter the task here'
            value={text}
            onChange={(event) => setText(event.target.value)}
        ></input>

        <button type='submit' className='btn btn-primary mb-2'>
            Submit
        </button>
    </form>
);
}

export default AddTask;