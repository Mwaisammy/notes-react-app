/* eslint-disable react/prop-types */
import { EyeIcon, PenLine, Trash2 } from "lucide-react";
import { useState } from "react";

const NotesCard = ({ myNote, editNote, deleteNote, toggleCompleted }) => {
  const [completed, setCompleted] = useState(myNote.complete);

  const handleToggleCompleted = (id) => {
    setCompleted((prev) => !prev);
    toggleCompleted(id);
  };
  return (
    <div className="flex items-start flex-col justify-between bg-white p-4 w-[200px] h-[220px] rounded-md tracking-wider">
      <p
        className={`${
          completed
            ? "line-through text-gray-500 "
            : "font-medium tracking-wider"
        }`}
      >
        {myNote.task}
      </p>

      <div className="flex justify-between items-center ml-auto ">
        <div className="flex gap-x-4 items-center">
          <EyeIcon
            onClick={() => handleToggleCompleted(myNote.id)}
            className="text-emerald-400 py-[2px] cursor-pointer px-[3px]  hover:bg-black hover:text-white rounded-sm transition-all duration-200 ease-in-out"
          />
          <PenLine
            onClick={() => editNote(myNote.id)}
            className="text-yellow-300  py-[2px] px-[3px] cursor-pointer  hover:bg-black hover:text-white rounded-sm transition-all duration-200 ease-in-out"
          />
          <Trash2
            onClick={() => deleteNote(myNote.id)}
            className="text-rose-400 p-[2px] hover:bg-black cursor-pointer rounded-sm transition-all duration-200 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
