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
    <header className="sticky h-[90px] flex items-center justify-between w-full px-8 sm:px-16 md:px-20 lg:px-12 xl:px-20">
      <div
        className={`absolute lg:hidden bg-black text-white h-screen top-0 left-0 ${
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

      <button onClick={handleOpenMenu} className="lg:hidden">
        <div className="lg:hidden flex gap-[5px] flex-col">
          <div className="w-5 h-[2px] bg-black"></div>
          <div className="w-3 h-[2px] bg-black"></div>
          <div className="w-5 h-[2px] bg-black"></div>
        </div>
      </button>

      <Link href={"/"}>
        <Image src="/logo.svg" alt="logo" width={128} height={128} />
      </Link>

      <nav className="hidden lg:block">
        <ul className="flex justify-between gap-6 items-center">
          <li>
            <Link
              href="/"
              className="primaryColor font-bold text-[16px] py-1 primaryHover"
            >
              Home
            </Link>
          </li>
          <li>
            <Link href="" className="font-bold text-[16px] py-1 primaryHover">
              Menu
            </Link>
          </li>
          <li>
            <Link href="" className="font-bold text-[16px] py-1 primaryHover">
              About us
            </Link>
          </li>
          <li>
            <Link href="" className="font-bold text-[16px] py-1 primaryHover">
              Blog
            </Link>
          </li>
          <li>
            <Link href="" className="font-bold text-[16px] py-1 primaryHover">
              Contact
            </Link>
          </li>
          <li>
            <Link href="" className="font-bold text-[16px] py-1 primaryHover">
              Faq
            </Link>
          </li>
        </ul>
      </nav>

      <Link href={"/"} className="hidden xl:flex flex-row items-center">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          className="text-[48px] text-[#079447]"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M19 7c0-1.1-.9-2-2-2h-3v2h3v2.65L13.52 14H10V9H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48L19 10.35V7zM4 14v-1c0-1.1.9-2 2-2h2v3H4zm3 3c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1z"></path>
          <path d="M5 6h5v2H5zM19 13c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
        </svg>

        <div>
          <span className="text-gray-400 text-[13px] font-medium">
            Call and Order in
          </span>
          <p className="primaryColor text-[20px] font-bold leading-[1em]">
            01212312312
          </p>
        </div>
      </Link>

      <div className="hidden lg:flex gap-4 ">
        <button className="relative border rounded-full w-12 h-12 flex items-center justify-center text-xl primaryHoverBack">
          <span className="font-extrabold mb-[6px]">ع</span>
        </button>
        <button className="relative border rounded-full w-12 h-12 flex items-center justify-center text-xl primaryHoverBack">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 16 16"
            className="w-[19px] h-[19px]"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
          </svg>
        </button>
        <button className="relative border rounded-full w-12 h-12 flex items-center justify-center text-xl primaryHoverBack">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
          </svg>
        </button>
        <button className="relative border rounded-full w-12 h-12 flex items-center justify-center text-xl primaryHoverBack">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
          </svg>
        </button>
        <button className="relative border rounded-full w-12 h-12 flex items-center justify-center text-xl primaryHoverBack">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            version="1.2"
            baseProfile="tiny"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M20.756 5.345c-.191-.219-.466-.345-.756-.345h-13.819l-.195-1.164c-.08-.482-.497-.836-.986-.836h-2.25c-.553 0-1 .447-1 1s.447 1 1 1h1.403l1.86 11.164.045.124.054.151.12.179.095.112.193.13.112.065c.116.047.238.075.367.075h11.001c.553 0 1-.447 1-1s-.447-1-1-1h-10.153l-.166-1h11.319c.498 0 .92-.366.99-.858l1-7c.041-.288-.045-.579-.234-.797zm-1.909 1.655l-.285 2h-3.562v-2h3.847zm-4.847 0v2h-3v-2h3zm0 3v2h-3v-2h3zm-4-3v2h-3l-.148.03-.338-2.03h3.486zm-2.986 3h2.986v2h-2.653l-.333-2zm7.986 2v-2h3.418l-.285 2h-3.133z"></path>
              <circle cx="8.5" cy="19.5" r="1.5"></circle>
              <circle cx="17.5" cy="19.5" r="1.5"></circle>
            </g>
          </svg>
        </button>
      </div>

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
