/* eslint-disable react/prop-types */
import { useState } from "react";

const EditNote = ({ editNote, onClose, task }) => {
  const [input, setInput] = useState(task.task);
  // const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    editNote(input, task.id);
    onClose();
  };
  return (
    <div className=" fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="border border-gray-200 rounded-md shadow-md p-[20px] w-[500px]"
      >
        <textarea
          name=""
          value={input}
          onChange={(e) => setInput(e.target.value)}
          id=""
          placeholder="Create a note"
          className="w-full outline-none border border-gray-200 p-3 rounded-sm "
        ></textarea>

        <div className="flex justify-between items-center mt-5">
          <button
            onClick={onClose}
            className="bg-rose-400 px-[20px] py-[10px] rounded-md text-white"
          >
            Cancel
          </button>
          <button
            type={"submit"}
            className="bg-emerald-400 px-[20px] py-[10px] rounded-md text-white"
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditNote;
