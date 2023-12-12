import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NAV_LINKS } from "../constants";
import Button from "./Button";
// import logo from ";
type Props = {};

const NavBar = (props: Props) => {
  // border-2 border-red-500
  return (
    <nav className=" flexBetween maxContainer padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="./hilink-logo.svg" width={74} height={29} alt="logo" />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((nav, id) => {
          return (
            <Link
              href={nav.href}
              key={nav.key}
              className="regular-16 gap-13 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {nav.label}
            </Link>
          );
        })}
      </ul>
      {/* <ul className="flex align-center flex-col h-full  h-full absolute top-full gap-12 lg:hidden">
        {NAV_LINKS.map((nav, id) => {
          return (
            <Link
              href={nav.href}
              key={nav.key}
              className="regular-16 gap-13 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {nav.label}
            </Link>
          );
        })}
      </ul> */}
      <div className="lg:flexCenter  hidden">
        <Button
          type="submit"
          value="login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        src="menu.svg"
        width={32}
        height={32}
        alt="menu"
        className="lg:hidden inline-block cursor-pointer"
      />
    </nav>
  );
};

export default NavBar;
