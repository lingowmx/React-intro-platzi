import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const {
    addTodo,
    setOpenModal,
    setSearchValue,
  } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) =>{
    event.preventDefault();
    setOpenModal(false);
    addTodo(newTodoValue);
    setSearchValue('')
  };
  const onCancel = () => {
    setOpenModal(false)
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nueva tarea</label>
      <textarea 
      value = {newTodoValue}
      placeholder="Aprender React" 
      onChange = {onChange}
      required
      />
      
      <div className="TodoForm-button--container">
        <button
        onClick={onCancel} 
        type="button"
        className="TodoForm-button TodoForm-button--cancel">
          Cancelar
        </button>
        <button 
        type="submit"
        className=" TodoForm-button TodoForm-button--add">
          Agregar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
