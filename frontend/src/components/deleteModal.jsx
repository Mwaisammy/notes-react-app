/* eslint-disable react/prop-types */
import axios from "axios";
import toast from "react-hot-toast";

const DeleteModal = ({ idi, onClose }) => {
  // const { id } = useParams();

  const id = idi;

  console.log("Deleting note with ID:", id); // Debugging
  const handleDeleteNote = () => {
    try {
      axios.delete(`http://localhost:5555/api/notes/${id}`).then(() => {
        toast("Note deleted 😭");
        alert("Note deleted 😭");
        onClose();
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
      // toast("Something went wrong 😢");
    }
  };

  return (
    <div className=" fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center h-screen">
      <div className="flex flex-col justify-between p-4 border border-rose-400  w-[500px] h-[150px]  bg-black bg-opacity-90 rounded-md ">
        <h3 className=" text-center  text-rose-500 font-medium">
          Are sure you want to delete this note?
        </h3>

        <div className="flex justify-between items-center mt-">
          <button
            onClick={onClose}
            className="bg-emerald-400 text-white p-3 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleDeleteNote}
            className="bg-rose-500 text-white p-3 rounded-md"
          >
            Yes , Delete it
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
