import { ReactComponent as CheckSVG } from "./Check.svg";
import { ReactComponent as DeleteSVG } from "./Delete.svg";
import "./TodoIcon.css";

//una forma de hacer un condicional para mas opciones y no solo el operador ternario
const IconTypes = {
  check: (color) => <CheckSVG className="Icon-svg" fill={color} />,
  delete: (color) => <DeleteSVG className="Icon-svg" fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
  return (
    <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
      {/* //condicionales reducidos */}
      {IconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
