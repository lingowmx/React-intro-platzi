import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";
import React from "react";

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)
  return totalTodos === completedTodos ? (
    <h2 
    className="TodoCounter">
     No tienes tareas pendientes.
      </h2>
  ) : (
    <h2 
    className="TodoCounter">
      Tareas Completadas 
       <span> {completedTodos} </span> de <span>{totalTodos}</span></h2>
  );
}

export { TodoCounter };
