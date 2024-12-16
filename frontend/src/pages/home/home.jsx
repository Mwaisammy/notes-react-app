import { useEffect, useState } from "react";
import MainWrapper from "../../components/mainwrapper";
import SideBar from "../../components/sidebar";
import axios from "axios";
import Loading from "../../components/loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

      <div className=" flex  bg-slate-800">
        <div>
          <SideBar onOpen={() => setShowModal(true)} />
        </div>

        <div className="flex-1 overflow-y-hidden  ">
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
      </div>
    </>
  );
};

export default Home;
