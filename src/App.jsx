import { Route, Routes } from "react-router";
import Home from "./components/home";
import { Toaster } from "react-hot-toast";
// import CreateModal from "./components/createModal";

const App = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-[30px] px-[20px] lg:px-0 overflow-y-hidden h-screen ">
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/create-note" element={<CreateModal />} /> */}
      </Routes>
    </div>
  );
};

export default App;
