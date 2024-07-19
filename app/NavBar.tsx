"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug } from "react-icons/fa";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Bugs", href: "/bugs" },
  ];

  return (
    <nav className="flex space-x-6 border-b-2 px-6 h-14 items-center mb-5 bg-zinc-800">
      <Link className="text-white" href={"/"}>
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link, index) => (
          <Link
            className={classNames({
              "text-white": currentPath === link.href,
              "text-zinc-300": currentPath != link.href,
              "hover:text-white font-medium transition-colors": true,
            })}
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
