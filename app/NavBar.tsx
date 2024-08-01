"use client";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug } from "react-icons/fa";
import Skeleton from "@/app/components/Skeleton";
const NavBar = () => {
  return (
    <nav className=" border-b-2 px-6 py-4 items-center bg-zinc-800">
      <Container>
        <Flex justify={"between"}>
          <Flex align={"center"} gap={"4"}>
            <Link className="text-white" href={"/"}>
              <FaBug />
            </Link>
            <NavLinks />
          </Flex>
          <AuthDropDown />
        </Flex>
      </Container>
    </nav>
  );
};

///Dropdown for Auth Status
const AuthDropDown = () => {
  const { status, data: session } = useSession();

  if (status === "unauthenticated")
    return (
      <Link href={"/api/auth/signin"} className="nav-links">
        Log In
      </Link>
    );

  if (status === "loading") return <Skeleton width={"3rem"} />;
  return (
    <Box>
      {status === "authenticated" && (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Avatar
              src={session.user?.image!}
              fallback="?"
              size={"2"}
              radius="full"
              className="cursor-pointer"
            />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Label>
              <Text size={"3"}>{session.user?.email}</Text>
            </DropdownMenu.Label>
            <DropdownMenu.Item>
              <Link href={"/api/auth/signout"} className="text-zinc-300">
                Log Out
              </Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      )}
    </Box>
  );
};

///Components for Nav Links
const NavLinks = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Bugs", href: "/bugs" },
  ];

  const currentPath = usePathname();
  return (
    <ul className="flex space-x-6">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            className={classNames({
              "nav-links": true,
              "!text-white": currentPath === link.href,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
