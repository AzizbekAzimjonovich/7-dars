import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between max-w-screen-lg w-full mx-auto mt-10 btn-lg mb-10">
      <Link to="/" className="btn btn-primary font-bold text-2xl">
        myK
      </Link>
      <Link to="/create" className="btn btn-neutral">
        Create
      </Link>
    </div>
  );
}

export default Navbar;
