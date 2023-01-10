import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 font-bold capitalize`,
  liComplete: `flex justify-between bg-gradient-to-r from-green-400 to-green-200 p-4 my-2 font-bold capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: ` ml-2 cursor-pointer decoration-2 line-through`,
  button: "cursor-pointer flex items-center",
};

const ToDo = ({ todo, onComplete, deleteTodo }) => {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          onChange={() => onComplete(todo)}
          checked={todo.completed ? "checked" : ""}
          type="checkbox"
        />
        <p
          onClick={() => onComplete(todo)}
          className={todo.completed ? style.textComplete : style.text}
        >
          {todo.text}
        </p>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>{<FaRegTrashAlt />}</button>
    </li>
  );
};

export default ToDo;
