"use client";
import { useState } from "react";
import Link from "next/link";
import { MENULINKS } from "@/constants";
const Navbar = ({ activeTab }) => {
  const [sidemenu, setSidemenu] = useState(false);
  return (
    <>
      <header className="flex md:items-start lg:items-center justify-between h-[10vh] lg:h-[20vh] ml-[5%]">
        <div className="lg:flex-1 flex items-start md:items-center relative mt-6 ml-4 lg:mt-0 lg:ml-0">
          <img src="/assets/shared/logo.svg" alt="logo" />
          <span className="hidden lg:block h-[1px] bg-lightBlue/[.20] w-[80%] z-20 absolute right-[-30px]"></span>
        </div>
        <nav className="hidden md:flex justify-center bg-lightBlue/[.10] lg:flex-1 backdrop-blur py-8 px-20">
          <ul className={`navlinks`}>
            {MENULINKS.map((link, index) => (
              <li className="nav-link group" key={link.ref}>
                <Link href={`/${link.ref}`}>
                  <span className="font-bold tracking-widest mr-2">
                    0{index}
                  </span>{" "}
                  {link.name}
                </Link>
                <div
                  className={`absolute bottom-[-30px] w-full duration-150 ${
                    link.name === activeTab
                      ? "border-b-2"
                      : "group-hover:border-b-2 group-hover:border-blue-50"
                  }`}
                ></div>
              </li>
            ))}
          </ul>
        </nav>
        <div className="block md:hidden mt-8 mr-6 lg:mt-0 lg:mr-0">
          <img
            src="/assets/shared/icon-hamburger.svg"
            alt="Menu"
            onClick={() => setSidemenu(!sidemenu)}
          />
        </div>
      </header>
      <div
        className={`block md:hidden absolute z-50 bg-[#0B0D17]/[.20] backdrop-blur-2xl duration-500 h-screen top-0 w-[75%] ${
          sidemenu ? "right-0" : "right-[-350px]"
        } `}
      >
        <ul
          className={`flex font-barlowCondense uppercase text-2xl flex-col mt-24 space-y-6`}
        >
          {MENULINKS.map((link, index) => (
            <li
              className={`text-nowrap font-light px-12 ${
                link.name === activeTab ? "border-r-4" : ""
              }`}
              key={link.ref}
            >
              <Link
                href={`/${link.ref}`}
                onClick={() => setSidemenu(!sidemenu)}
              >
                <span className="font-bold tracking-widest mr-2">0{index}</span>{" "}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <img
            src="/assets/shared/icon-close.svg"
            alt="Close"
            className="absolute right-8 top-8"
            onClick={() => setSidemenu(!sidemenu)}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
