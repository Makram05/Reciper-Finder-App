import { Link } from "react-router-dom";
import logo from "./../assets/images/logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {

    const [isMenuOpen,setIsMenuOpen]=useState(false);


  return (
    <div className="bg-light-neutral-100 backdrop-blur-md shadow-md stick top-0 z-50 border-b border-light-neutral-100">
      <div className="container px-4 py-4 mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center space-x-3 
            hover:opacity-80 transition-all duration-300"
        >
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="relative text-gray-600 font-medium
                py-3 px-2 transition-all duration-300 hover:text-primary group"
          >
            Home
            <span
              className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary
                 transition-all duration-300 group-hover:w-full"
            ></span>
          </Link>
          <Link
            to="/about"
            className="relative text-gray-600 font-medium
                py-3 px-2 transition-all duration-300 hover:text-primary group"
          >
            About
            <span
              className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary
                 transition-all duration-300 group-hover:w-full"
            ></span>
          </Link>
          <Link
            to="/recipes"
            className="relative text-gray-600 font-medium
                py-3 px-2 transition-all duration-300 hover:text-primary group"
          >
            Receipes
            <span
              className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary
                 transition-all duration-300 group-hover:w-full"
            ></span>
          </Link>
        </nav>

        <Link
          to="/recipes"
          className="hidden md:block bg-primary text-light-neutral-0 py-3 px-6
            rounded-xl hover:bg-secondary transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Browse Recipes
        </Link>
        <button
          className="md:hidden p-2 text-gray-600 hover:text-gray-800 transition-all"
          aria-label="toggle-menu" onClick={()=>setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-6 w-6" />
        </button>

      </div>
      {/* {Mobile Menu Rendering} */}
      {isMenuOpen && <div
        className="md:hidden bg-light-neutral-0 border-t
            border-light-neutral-100 shadow-sm text-xs"
      >
        <nav className=" flex flex-col space-y-2 py-2 px-4">
          <Link
            to="/"
            className="text-gray-700 hover:text-primary transition-all border border-transparent font-medium
              hover:border-primary pb-1"
              onClick={()=>setIsMenuOpen(false)}
          >
            home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-primary transition-all border border-transparent font-medium
              hover:border-primary pb-1"
              onClick={()=>setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/recipes"
            className="text-gray-700 hover:text-primary transition-all border border-transparent font-medium
              hover:border-primary pb-1"
              onClick={()=>setIsMenuOpen(false)}
          >
            Receipes
          </Link>
          <Link
          to="/recipes"
          className=" bg-primary text-light-neutral-0 py-2 px-2
            rounded-xl hover:bg-secondary transition-all duration-300 font-semibold text-center shadow-lg"
            onClick={()=>setIsMenuOpen(false)}
        >
          Browse Recipes
        </Link>
        </nav>
      </div>}
    </div>
  );
};

export default Header;
