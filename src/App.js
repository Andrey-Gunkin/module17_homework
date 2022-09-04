import { React, useState } from "react";
import "./App.css";
import ToDoList from "./ToDoList";
import Button from "./Button";



function App() {
  const [todo, setToDo] = useState([
    {id: 1, name: "task1", cheked: false },
    {id: 2, name: "task2", cheked: false },
    {id: 3, name: "task3", cheked: false },
  ]);


  return (
    <div className="App">
      <h1>ToDoList</h1>
      <ToDoList todo={todo} setToDo={setToDo} />
      <Button todo={todo} setToDo={setToDo} />
    </div>
  );
}

export default App;
