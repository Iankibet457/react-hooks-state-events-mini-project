import React from "react";

function Task({ task, text, category, onDelete }) {
  
  const displayText = task ? task.text : text;
  const displayCategory = task ? task.category : category;

  return (
    <div className="task">
      <div className="label">{displayCategory}</div>
      <div className="text">{displayText}</div>
      <button className="delete" onClick={onDelete}>X</button>
    </div>
  );
}

export default Task;
