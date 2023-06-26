import { Bars3BottomLeftIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import Aside from "../Aside";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const toggleAside = () => {
    setIsAsideOpen(!isAsideOpen);
  };

  return (
    <nav className="bg-slate-100 p-4">
      <div className="flex justify-between items-center">
        <div className="text-black w-full">
          <ul className="flex w-full items-center gap-4">
            <li className="text-md md:text-xl font-bold">Dog Match</li>
            <li className="hidden md:flex"><NavLink to="/">Home</NavLink></li>
            <li className="hidden md:flex"><NavLink to="/employees">Funcionários</NavLink></li>
            <li className="hidden md:flex"><NavLink to="/register">CADASTRO2</NavLink></li>
          </ul>
        </div>

        <button
          className="text-white focus:outline-none md:hidden"
          onClick={toggleAside}
        >
          <Bars3BottomLeftIcon className="h-8 text-black" />
        </button>
        <button className="text-white focus:outline-none hidden md:flex">
          <UserCircleIcon className="h-8 text-black" />
        </button>
      </div>
      <Aside isOpen={isAsideOpen} />
    </nav>
  );
};

export default Navbar;