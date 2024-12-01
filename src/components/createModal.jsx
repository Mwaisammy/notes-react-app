import { useState } from "react";

const CreateModal = () => {
  const [note, setNote] = useState("");
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(note);
  };
  console.log(data);
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="border border-gray-200 rounded-md shadow-md p-[20px] w-[500px]"
      >
        <textarea
          name=""
          value={note}
          onChange={(e) => setNote(e.target.value)}
          id=""
          placeholder="Create a note"
          className="w-full outline-none border border-gray-200 p-3 rounded-sm "
        ></textarea>

        <div className="flex justify-between items-center mt-5">
          <button className="bg-rose-400 px-[20px] py-[10px] rounded-md text-white">
            Cancel
          </button>
          <button
            type="submit"
            className="bg-emerald-400 px-[20px] py-[10px] rounded-md text-white "
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateModal;
