/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import CreateModal from "./createModal";
import NotesCard from "./notesCard";
import EditNote from "./editNote";
import toast from "react-hot-toast";

const MainWrapper = ({ showModal, setShowModal }) => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    try {
      setNotes([
        ...notes,
        { id: uuidv4(), task: note, completed: false, isEditing: false },
      ]);
      toast.success("Note created 🙂");
    } catch (error) {
      console.log(error);
      toast.error("Error creating the note 😢");
    }
  };

  const editNote = (id) => {
    try {
      setNotes(
        notes.map((note) =>
          note.id === id
            ? {
                ...note,
                isEditing: !note.isEditing,
              }
            : note
        )
      );

      toast.success("Note was edited 😁");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong😢");
    }
  };

  const editTask = (task, id) => {
    setNotes(
      notes.map((note) =>
        note.id === id
          ? {
              ...note,
              task,
              isEditing: !note.isEditing,
            }
          : note
      )
    );

    toast.success("Note was edited 😁");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));

    toast.success("Note deleted 😭😭");
  };

  const toggleCompleted = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id
          ? {
              ...note,
              completed: !note.completed,
            }
          : note
      )
    );
  };
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-4 gap-[20px]">
      {showModal && (
        <CreateModal addNote={addNote} onClose={() => setShowModal(false)} />
      )}
      {notes.map((note) =>
        // <div key={note.id} className="text-white">
        //   {note.task}
        // </div>

        note.isEditing ? (
          <EditNote
            key={note.id}
            editNote={editTask}
            task={note}
            onClose={() => setShowModal(false)}
          />
        ) : (
          <div key={note.id} className="">
            <NotesCard
              myNote={note}
              editNote={editNote}
              deleteNote={deleteNote}
              toggleCompleted={toggleCompleted}
            />
          </div>
        )
      )}
    </div>
  );
};

export default MainWrapper;
