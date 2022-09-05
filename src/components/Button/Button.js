import React from "react";
import './Button.css';

function Button({ todo }) {
  


  function completedTask({ todo }){
     let count = 0;
    // return todo.cheked ? count++ : count;
    todo.forEach(element => {
      if (element.cheked){
        count++
      } 
    })
    document.querySelector('.completedTaskNum').innerHTML = count;


   setTimeout (()=>{ document.querySelector('.completedTaskNum').innerHTML = ''}, 2000) 
  };

  return (
    <div className="completedTask">
      <button className="completedTaskBtn" onClick={() => completedTask({todo})}>
        Показать количество выполненных задач:
      </button>
      <p className="completedTaskNum"></p>
    </div>
  );
}

export default Button;
