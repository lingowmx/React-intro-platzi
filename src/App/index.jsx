import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";
// import { useLocalStorage } from "./useLocalStorage";
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
  return (
    <TodoProvider>

    <AppUI
      // loading={loading}
      // error={error}
      // completedTodos={completedTodos}
      // totalTodos={totalTodos}
      // searchValue={searchValue}
      // setSearchValue={setSearchValue}
      // searchedTodos={searchedTodos}
      // completeTodo={completeTodo}
      // deleteTodo={deleteTodo}
      />
      </TodoProvider>
  );
}

export default App;
