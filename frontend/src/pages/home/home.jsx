import { useEffect, useState } from "react";
import MainWrapper from "../../components/mainwrapper";
import SideBar from "../../components/sidebar";
import axios from "axios";
import Loading from "../../components/loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [notes, setNotes] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5555/api/notes`);
        const data = await response.data.data;
        setNotes(data);
        setLoading(false);
      } catch (error) {
        console.log(error, "Could not fetch books");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* <div>
        <Header />
      </div> */}

      <div className=" flex flex-col md:flex-row  gap-x-[30px] py-[20px] px-[30px] justify-between   h-[550px]  bg-slate-800">
        <div className=" flex md:hidden font-medium text-xl text-white tracking-wide mb-[20px] ">
          <h3>Notes</h3>
        </div>

        <div className="hidden md:flex w-[50px]">
          <SideBar onOpen={() => setShowModal(true)} />
        </div>

        <div className=" flex-1 overflow-y-scroll   ">
          <ToastContainer />
          {loading ? (
            <div className="flex items-center justify-center  h-full">
              <Loading />
            </div>
          ) : (
            <MainWrapper
              data={notes}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          )}
        </div>

        <div className="flex ml-auto   md:hidden rounded-full">
          <Link onClick={() => setShowModal(true)}>
            <img src={"src/assets/circle.svg"} alt="" className="size-14 " />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
