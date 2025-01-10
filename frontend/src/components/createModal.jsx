/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const CreateModal = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  // Check if the toast has been triggered after a page reload
  useEffect(() => {
    const toastMessageShown = localStorage.getItem("toastMessageShown");

    if (toastMessageShown) {
      // Show the toast message
      // toast.success("Note successfully created! 🙂", {
      //   duration: 5000, // Adjust the duration as needed
      // });

      // Clear the flag after showing the toast
      localStorage.removeItem("toastMessageShown");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error message before submission

    // Validate the fields before submitting the form
    if (!title || !content) {
      setError("Invalid fields: title and content are required.");
      return;
    }

    try {
      const noteData = { title, content };
      console.log(noteData);

      // Sending the data to the backend
      await axios.post(`http://localhost:5555/api/notes`, noteData);
      toast.success("Note successfully created! 🙂", {
        duration: 5000, // Adjust the duration as needed
      });

      // Save the flag in localStorage to trigger the toast after reload

      // Close the modal on successful submission
      onClose();
      window.location.reload(); // Reload the page to show the new note
      localStorage.setItem("toastMessageShown", "true");
      alert("Note was created 🙂");
    } catch (err) {
      console.error("Error submitting your note", err);

      // Display error from the backend if it exists
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="border border-emerald-500 bg-black bg-opacity-95 rounded-md shadow-md flex flex-col justify-between  p-[20px] w-[400px] md:w-[500px] lg:w-[600px] text-white  "
      >
        <div className="">
          <input
            type="text"
            className="mb-4 w-full outline-none  bg-gray-700 p-3 rounded-md "
            placeholder="Create note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Create note content"
            className="w-full outline-none border  bg-gray-700 border-gray-700 p-3 rounded-sm mb-4 "
          ></textarea>
        </div>

        {/* Show the error message if the fields are invalid */}
        {error && (
          <p className=" bg-gray-700 border border-rose-500 text-rose-500 rounded-md p-4 mb-4">
            {error}
          </p>
        )}

        <div className="flex justify-between items-center mt-5">
          <button
            onClick={onClose}
            className="bg-rose-500 px-[20px] py-[10px] rounded-md text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-emerald-500 px-[20px] py-[10px] rounded-md text-white"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateModal;
