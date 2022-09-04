import React from "react";



function ToDoList({ todo, setToDo }) {

  function chekedToDo (id){
    let newToDo = [...todo].filter(item => {
      if (item.id === id) {
        item.cheked = !item.cheked;
      }
      // return "item"
    })
    setToDo(newToDo);
  } 

  return (
    <ul>
      {todo.map((item) => (
        <>
        <li className="numTask" key={item.id}>
          <input type="checkbox" value="task"></input>
          <label htmlFor="task">{item.name}</label>
        </li>
        <button className="completedTaskBtn" onClick={() => chekedToDo(item.id)}>
        Показать количество выполненных задач:
        </button>
        </>
      ))}
    </ul>
  );
}

export default ToDoList;
 