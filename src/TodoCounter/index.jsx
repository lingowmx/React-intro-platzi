import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  return total === completed ? (
    <h2 className="TodoCounter">Tomate una chela, no tienes tareas pendientes</h2>
  ) : (
    <h2 className="TodoCounter">Tareas Completadas <span>{completed}</span> de <span>{total}</span></h2>
  );
}

export { TodoCounter };
