import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Navbar = () => {
  const [open, isOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center relative p-4">
        <Link to="/" className="text-primary text-2xl font-bold">
          Mourola Blog
        </Link>

        <div className="space-x-4 hidden md:block">
          <Link to="/" className="text-primary text-base font-semibold">
            Home
          </Link>
          <Link to="/blogs" className="text-primary text-base font-semibold">
            Blogs
          </Link>
          <Link
            to="/categories"
            className="text-primary text-base font-semibold"
          >
            Categories
          </Link>
          <Link to="/tags" className="text-primary text-base font-semibold">
            Tags
          </Link>
          <Link to="/about" className="text-primary text-base font-semibold">
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-primary text-base font-semibold"
          >
            Contact
          </Link>
          <Link
            to="/dashboard"
            className="text-primary text-base font-semibold"
          >
            Dashboard
          </Link>
          <Link
            to="/login"
            className="primaryBtn"
          >
            Login
          </Link>
        </div>
        <p className="block md:hidden" onClick={() => isOpen(!open)}>
          <MenuIcon className="scale-105 text-black" />
        </p>

        <div
          className={`
          space-y-3 md:hidden flex flex-col absolute bg-white w-full shadow-md p-5 left-0
          transition-all duration-500 ease-in-out ${open ? "top-0" : "-top-96"}
        `}
        >
          <p
            className="flex justify-between items-center"
            onClick={() => isOpen(!open)}
          >
            <Link to="/" className="text-primary text-2xl font-bold">
              Mourola Blog
            </Link>
            <CloseIcon />
          </p>
          <Link to="/" className="text-primary text-base font-semibold">
            Home
          </Link>
          <Link to="/blogs" className="text-primary text-base font-semibold">
            Blogs
          </Link>
          <Link
            to="/categories"
            className="text-primary text-base font-semibold"
          >
            Categories
          </Link>
          <Link to="/tags" className="text-primary text-base font-semibold">
            Tags
          </Link>
          <Link to="/about" className="text-primary text-base font-semibold">
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-primary text-base font-semibold"
          >
            Contact
          </Link>
          <Link
            to="/dashboard"
            className="text-primary text-base font-semibold"
          >
            Dashboard
          </Link>
          <Link
            to="/login"
            className="text-base font-semibold text-center border bg-primary text-white px-4 py-2 rounded hover:bg-transparent hover:text-primary hover:border hover:border-primary transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
