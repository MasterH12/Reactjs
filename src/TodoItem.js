import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeteleIcon";

function TodoItem({sort, text, completed, onToggle, onDelete}){
  return(
    <li className="TodoItem">
      <CompleteIcon 
        onClick={onToggle}
        completed={completed}
      />
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{sort}. {text}</p>
      <DeleteIcon 
        onClick={onDelete}
      />
    </li>
  )
}
export {TodoItem}