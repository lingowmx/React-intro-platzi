// import React, { useState } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";
import React from "react";

function TodoSearch() {
const {
  searchValue,
  setSearchValue,
} = React.useContext(TodoContext)
  return (
    <input
      placeholder="Escribe aqui tu tarea"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        // console.log("Escribiste en Todo Search");
        // console.log(event);
        // console.log(event.target);
        console.log(event.target.value);
        setSearchValue(event.target.value)
      }}
    />
  );
}

export { TodoSearch };
