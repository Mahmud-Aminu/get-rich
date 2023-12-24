import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";

function Root() {
  return (
    <div className="">
      <Navigation />
      <main className="bg-[#0b1b2b] px-2 py-4 md:px-8">
        <Outlet />
      </main>
      <div className="px-2 py-8 flex justify-center items-center">
        <footer>all right reserved 2023</footer>
      </div>
    </div>
  );
}

export default Root;
