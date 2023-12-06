import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}) {
    // let parsedTodos = JSON.parse(localStorageTodos);
    const {
      item: todos, 
      saveItem: saveTodos, 
      loading, 
      error} = useLocalStorage("TODOS_V1", []);
    const [searchValue, setSearchValue] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);

    const searchedTodos = todos.filter(
      (todo) => {
        const todoText = todo.text.toLowerCase();
        const todoSearch = searchValue.toLowerCase();
        return todoText.includes(todoSearch);
      }
      // todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
    );
    // importante verificar como se hacen los returns con llaves sin llaves etc.
  
    const completedTodos = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length;
    // console.log("los usuarios buscan todos de " + searchValue);
  
    const addTodo = (text) => {
      const newTodos = [...todos];
      newTodos.push({
        text,
        completed:false,
      });
      saveTodos(newTodos);
    };

    const completeTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex((todo) => todo.text === text);
      newTodos[todoIndex].completed
        ? (newTodos[todoIndex].completed = false)
        : (newTodos[todoIndex].completed = true);
      saveTodos(newTodos);
    };
  
    const deleteTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex((todo) => todo.text === text);
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    };
  return (
  <TodoContext.Provider value={{
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    addTodo,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  
  }}>
    {children}
  </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider };
