import { AppUI } from "./AppUI";
import { useLocalStorage } from "./useLocalStorage";
import React from "react";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: false },
//   { text: "Aplicar los datos", completed: true },
//   { text: "Correr 1000 kms", completed: false },
//   { text: "Correr 10 kms", completed: true },
//   { text: "Cocinar para navidad", completed: false },
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function App() {
  // let parsedTodos = JSON.parse(localStorageTodos);
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
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
  console.log("los usuarios buscan todos de " + searchValue);

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
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
