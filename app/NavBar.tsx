import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Bugs", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b-2 px-6 h-14 items-center mb-5 bg-black">
      <Link className="text-white" href={"/"}>
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link, index) => (
          <Link
            className="text-zinc-300 hover:text-white transition-colors font-semibold"
            key={index}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
