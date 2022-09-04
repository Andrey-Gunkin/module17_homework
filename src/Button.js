import React from "react";



function Button(todo, setToDo) {

function chekedToDo (id){
  let newToDo = [...todo].filter(item => {
    if (item.id === id) {
      item.cheked = !item.cheked;
    }
    return item
  })
  setToDo(newToDo);
}
console.log (todo)
  return (
    <div>
      <button className="completedTaskBtn" onClick={() => chekedToDo()}>
        Показать количество выполненных задач:
      </button>
      <p className="completedTaskNum"></p>
    </div>
  );
}

export default Button;
