import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = "underline underline-offset-4";

  return (
    <nav className=" static absolute flex justify-between items-center fixed z-90 top-0 w-full  py-5 px-8 text-sm font-light bg-gradient-to-r from-lime-300 to-green-400">
      <ul className="flex items-center gap-3">
       
        <li className="text-lg ">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
             Bicycle 
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3"> 
        <li>
          <NavLink
            to="/my-order"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Order
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/usuarios"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Usuarios
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
