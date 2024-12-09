import { useState } from "react";
import MainWrapper from "./mainwrapper";
import SideBar from "./sidebar";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className=" flex bg-slate-800">
      <div>
        <SideBar onOpen={() => setShowModal(true)} />
      </div>

      <div className="flex items-start">
        <MainWrapper showModal={showModal} setShowModal={setShowModal} />
      </div>
    </div>
  );
};

export default Home;
