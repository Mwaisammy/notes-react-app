import { Route, Routes } from "react-router";
import Home from "./pages/home/home";
import DeleteModal from "./components/deleteModal";
import EditModal from "./components/editModal";
import { Toaster } from "react-hot-toast";
import "./App.css";

const App = () => {
  // const { isLoaded, user } = useAuth();

  // console.log("Clerk isLoaded:", isLoaded);
  // console.log("Clerk user:", user);

  // if (!isLoaded) {
  //   return <div>Loading...</div>;
  // }

  // if (!user) {
  //   return <SignIn />;
  // }
  return (
    <div className="  max-w-screen-lg mx-auto py-[30px] px-[20px] lg:px-0 overflow-hidden  min-h-screen mb-[50px]">
      <Toaster
        toastOptions={{
          duration: 4000,
        }}
      />
      <Routes>
        {/* If no user, redirect to SignIn */}

        {/* <Route path="*" element={<SignIn />} /> */}

        <Route path="/" element={<Home />} />
        <Route path="/notes/:id/delete" element={<DeleteModal />} />
        <Route path="/notes/:id/edit" element={<EditModal />} />
      </Routes>
    </div>
  );
};

export default App;
