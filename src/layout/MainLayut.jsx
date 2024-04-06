import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function MainLayut() {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-lg w-full mx-auto px-2">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayut;
