function TodoItem({sort, text, completed, onToggle, onDelete}){
  return(
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onToggle}
      >
        {completed ? "✔" : "❌"}
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{sort}. {text}</p>
      <span 
        className="Icon Icon-delete"
        onClick={onDelete}
      >
        X
      </span>
    </li>
  )
}
export {TodoItem}