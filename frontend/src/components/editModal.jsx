/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const EditModal = ({ onClose, idi }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState("");

  const id = idi;

  useEffect(() => {
    const editNote = async () => {
      try {
        const res = await axios.get(`http://localhost:5555/api/notes/${id}`);
        const data = res.data;

        setTitle(data.title);
        setContent(data.content);
      } catch (error) {
        alert("An error occured , check your console");
        console.log(error);
      }
    };

    editNote();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const noteData = {
        title,
        content,
      };
      console.log(noteData);

      axios.put(`http://localhost:5555/api/notes/${id}`, noteData).then(() => {
        toast("Note successfully edited!🙂");
        window.location.reload();
      });
    } catch (error) {
      console.log(error, "Error submiting your note");
    }

    onClose();
  };
  return (
    <div className=" fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="border bg-black bg-opacity-95 border-gray-200 rounded-md shadow-md p-[20px] w-[500px]"
      >
        <input
          type="text"
          className="mb-4 w-full outline-none p-3 rounded-md"
          placeholder="Create note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name=""
          value={content}
          onChange={(e) => setContent(e.target.value)}
          id=""
          placeholder="Create note content"
          className="w-full outline-none border border-gray-200 p-3 rounded-sm "
        ></textarea>

        <div className="flex justify-between items-center mt-5">
          <button
            onClick={onClose}
            className="bg-rose-500 px-[20px] py-[10px] rounded-md text-white"
          >
            Cancel
          </button>
          <button
            type={"submit"}
            className="bg-yellow-500 px-[20px] py-[10px] rounded-md text-white"
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditModal;
