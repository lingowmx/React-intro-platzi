import { TodoTitle } from "./TodoTitle";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
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
  const localStorageTodos = localStorage.getItem("TODOS_V1");

  let parsedTodos;
  if (!localStorageTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  // let parsedTodos = JSON.parse(localStorageTodos);
  const [todos, setTodos] = React.useState(parsedTodos);
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

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos);
  }

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
    <React.Fragment>
      <TodoTitle />
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          );
        })}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
