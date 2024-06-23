"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <header className="lg:bg-black bg-yellow-500 sticky h-[90px] flex items-center justify-between w-full px-8 sm:px-16 md:px-28">
      <div
        className={`absolute bg-black text-white h-screen top-0 left-0 ${
          openMenu ? "" : "translateX"
        }  w-10/12 sm:w-1/2 md:w-1/3 xl:hidden p-[10px] transition-all duration-300`}
      >
        <div className="flex justify-end">
          <button onClick={handleCloseMenu}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              className="text-xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path>
            </svg>
          </button>
        </div>
        <ul>
          <li>
            <Link
              href=""
              className="border-b block primaryHover p-[7.5px]"
              style={{ borderColor: "#808080" }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="border-b border-headingTextColor block  primaryHover p-[7.5px]"
              style={{ borderColor: "#808080" }}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="border-b border-headingTextColor block  primaryHover p-[7.5px]"
              style={{ borderColor: "#808080" }}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="border-b border-headingTextColor block  primaryHover p-[7.5px]"
              style={{ borderColor: "#808080" }}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="border-b border-headingTextColor block  primaryHover p-[7.5px]"
              style={{ borderColor: "#808080" }}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="border-b border-headingTextColor block  primaryHover p-[7.5px]"
              style={{ borderColor: "#808080" }}
            >
              Faq
            </Link>
          </li>
        </ul>
      </div>
      <button onClick={handleOpenMenu}>
        <div className="lg:hidden flex gap-[5px] flex-col">
          <div className="w-5 h-[2px] bg-black"></div>
          <div className="w-3 h-[2px] bg-black"></div>
          <div className="w-5 h-[2px] bg-black"></div>
        </div>
      </button>
      <Link href={"/"}>
        <Image src="/logo.svg" alt="logo" width={128} height={128} />
      </Link>
      <Link
        href={"/"}
        className="lg:hidden cursor-pointer text-[35px] hover:bg-primary_hover"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 256 256"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M231.88,175.08A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15a.61.61,0,0,0,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.18-1.4l.12.06,47.1,21.11A16,16,0,0,1,231.88,175.08ZM152,80h24v24a8,8,0,0,0,16,0V80h24a8,8,0,0,0,0-16H192V40a8,8,0,0,0-16,0V64H152a8,8,0,0,0,0,16Z"></path>
        </svg>
      </Link>
    </header>
  );
}

export default Header;
