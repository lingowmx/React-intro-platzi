// import React, { useState } from "react";
import "./TodoSearch.css";

function TodoSearch({searchValue, setSearchValue}) {

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
