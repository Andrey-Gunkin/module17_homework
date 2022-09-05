import React from "react";
import "./ToDoList.css";

function ToDoList({ todo }) {
  function chekedToDo(item) {
    item.cheked = !item.cheked;
    console.log(item);
    addData(item);
  }

  function addData(item) {
    alert(`Вы изменили задачу ${item.name}  ${Date().toLocaleString("ru")}`);
  }

  return (
    <>
      <ul className="list">
        {todo.map((item) => (
          <li key={item.id} className="numTask">
            <input
              id="name"
              className="custom-checkbox"
              type="checkbox"
              onClick={() => chekedToDo(item)}
            />
            <label htmlFor="list">{item.name}</label>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
