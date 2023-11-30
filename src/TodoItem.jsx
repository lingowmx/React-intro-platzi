import "./TodoItem.css";
import { CompleteIcon } from './CompleteIcon.jsx';
import { DeleteIcon } from './DeleteIcon.jsx';

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="TodoItem">
      <CompleteIcon 
        completed={completed}
        onComplete={onComplete}
      />
      {/* <span
        className={`Icon Icon-check 
        ${completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        V
      </span> */}
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <DeleteIcon 
        onDelete={onDelete}
      />
      
      {/* <span className="Icon Icon-delete" onClick={onDelete}>
        X
      </span> */}
    </li>
  );
}

export { TodoItem };
