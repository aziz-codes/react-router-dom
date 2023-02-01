import React from "react";
import { NavLink } from "react-router-dom";
import { links } from "./data";
const Navbar = () => {
  const activeLink = "text-sky-500 font-semibold p-1 tracking-tight";
  const normalLink = "text-black font-semibold p-1 ";
  return (
    <div className="flex w-full h-12 shadow-sm border-b bg-white flex-row items-center justify-center gap-4">
      {links.map((link, index) => (
        <NavLink
          to={link.path}
          key={index}
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
