import React, { useState, useEffect } from "react";
import { addTodos } from "../API/api";
import "../styles/addtask.css";

function AddTask({tasks ,setTask}) {

  const [message, setMessage] = useState("");
  const [text, setText] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = addTodos({name:text});
    setText("");
    setMessage("Added task in to-do list");
    setTask([...tasks, newTodo]);
  };


  useEffect(() => {
    setInterval(() => {
      setMessage("");
    }, 10000);
  },[message]);

  return (
    <>
      <form onSubmit={handleSubmit} className="row g-3">
        <label className='sr-only'>Add new task in the list</label>
        <div className="col-auto">
        <input
            type='text'
            className='form-control mb-2 mr-sm-2'
            placeholder='Enter the task here'
            value={text}
            onChange={(event) => setText(event.target.value)}
        ></input>
        </div>
        <div className="col-auto">
        <button type='submit'>
            Submit
        </button>
        </div>
    </form>
    <label className='message'>{message}</label>
    </>
);
}

export default AddTask;