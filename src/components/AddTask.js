import React, { useState } from "react";

function AddTask() {
  const [text, setText] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setText(event.target[0].value);
  };

  return (
    <div className="AddTask">
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddTask;