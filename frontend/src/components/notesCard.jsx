/* eslint-disable react/prop-types */
import { EyeIcon, PenLine, Trash2 } from "lucide-react";
import { useState } from "react";

const NotesCard = ({
  myNote,
  setId,

  toggleCompleted,
  onOpen,
  onEdit,
}) => {
  const [completed, setCompleted] = useState(myNote.complete);

  // console.log(myNote);

  const handleToggleCompleted = (id) => {
    console.log(id);
    setCompleted((prev) => !prev);
    toggleCompleted(id);
    // toast("Marked as done 🙂");
  };

  const handleStaff = (id) => {
    setId(id);
    onOpen();
  };

  const handleEdit = (id) => {
    setId(id);
    onEdit();
  };

  return (
    <div className="flex items-start flex-col justify-between bg-white p-4 w-[200px] h-[220px] rounded-md tracking-wider">
      <div className="flex flex-col space-y-3">
        <h2
          className={`${
            completed
              ? "line-through text-gray-500 "
              : "font-medium tracking-wider underline underline-offset-2"
          }`}
        >
          {myNote.title}
        </h2>
        <p
          className={`${
            completed ? "line-through text-gray-500 " : "decoration "
          }`}
        >
          {myNote.content}
        </p>
      </div>

      <div className="flex justify-between items-center ml-auto ">
        <div className="flex gap-x-4 items-center">
          <EyeIcon
            onClick={() => handleToggleCompleted(myNote.id)}
            className="text-emerald-400 py-[2px] cursor-pointer px-[3px]  hover:bg-black hover:text-white rounded-sm transition-all duration-200 ease-in-out"
          />
          <PenLine
            onClick={() => handleEdit(myNote._id)}
            className="text-yellow-300  py-[2px] px-[3px] cursor-pointer  hover:bg-black hover:text-white rounded-sm transition-all duration-200 ease-in-out"
          />
          <Trash2
            onClick={() => {
              handleStaff(myNote._id);
            }}
            className="text-rose-400 p-[2px] hover:bg-black cursor-pointer rounded-sm transition-all duration-200 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default NotesCard;

// ("font-medium tracking-wider underline underline-offset-2");
