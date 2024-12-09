/* eslint-disable react/prop-types */
import { Link } from "react-router";

const SideBar = ({ onOpen }) => {
  return (
    <main className="">
      <div className="flex flex-col justify-between h-[550px] bg-black w-fit p-[20px]">
        <div>
          <h2 className="text-white">Notes</h2>
        </div>

        <div className="">
          <Link onClick={onOpen}>
            <img src={"src/assets/circle.svg"} alt="" className="size-12 " />
          </Link>

          {/* <ColorPalete /> */}
          {/* <CreateModal /> */}
        </div>
      </div>
    </main>
  );
};

export default SideBar;
