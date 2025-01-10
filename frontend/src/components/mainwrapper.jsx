/* eslint-disable react/prop-types */

import { useState } from "react";
import CreateModal from "./createModal";
import DeleteModal from "./deleteModal";
import EditModal from "./editModal";
import NotesCard from "./notesCard";

// import toast from "react-hot-toast";

const MainWrapper = ({ data, showModal, setShowModal }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [idi, setId] = useState("");

  console.log(data);

  return (
    <section className="flex items-center ">
      {!Array.isArray(data) || data.length === 0 ? (
        <p className="flex items-center justify-center text-center text-gray-400 tracking-wide ">
          Create/make a note
        </p>
      ) : (
        <div className="grid grid-row-1 sm:grid-row-2 md:grid-cols-3 lg:grid-cols-4 m-4 gap-[20px] ">
          {showModal && <CreateModal onClose={() => setShowModal(false)} />}
          {deleteModal && (
            <DeleteModal idi={idi} onClose={() => setDeleteModal(false)} />
          )}

          {data.map((note) =>
            // <div key={note.id} className="text-white">
            //   {note.task}
            // </div>

            isEditing ? (
              <EditModal
                idi={idi}
                key={note.id}
                edit={note}
                setId={setId}
                onClose={() => setIsEditing(false)}
              />
            ) : (
              <div key={note.id} className="">
                <NotesCard
                  myNote={note}
                  setId={setId}
                  onOpen={() => setDeleteModal(true)}
                  onEdit={() => setIsEditing(true)}
                />
              </div>
            )
          )}
        </div>
      )}
    </section>
  );
};

export default MainWrapper;
