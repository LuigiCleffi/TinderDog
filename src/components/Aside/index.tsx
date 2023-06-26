import { BuildingOffice2Icon, HomeIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";

interface AsideProps {
  isOpen: boolean;
}

const Aside: React.FC<AsideProps> = ({ isOpen }) => {
  return (
    <aside
      className={`md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 h-full w-56 bg-gradient-to-b from-slate-400 to-slate-300 transition-transform duration-300 ease-in-out z-10`}
    >
      <ul className="p-4">
        <li className="text-white flex items-center gap-3"><HomeIcon className="h-4" /><NavLink to="/">Home</NavLink> </li>
        <li className="text-white flex items-center gap-3"><BuildingOffice2Icon className="h-4" /><NavLink to="/employees">Funcionários</NavLink></li>
      </ul>
    </aside>
  );
};

export default Aside;