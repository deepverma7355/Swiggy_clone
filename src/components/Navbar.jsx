import logo from "../assets/swiggy_logo_white.avif";
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-16 py-4 bg-orange-500">
      
      <img
        src={logo}
        alt="Swiggy Logo"
        className="h-10 cursor-pointer"
      />
  <Link to="/login">
        <button className="bg-black px-4 py-2 rounded-lg text-white">
          Sign In
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
