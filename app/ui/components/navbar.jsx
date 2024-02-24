"use client";
import Image from "next/image";
import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";
import logoBlue from "@/public/img/logoBlue.svg";
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [hamburClicked, setHamburClicked] = useState(false);
  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);
    };

    const bodyElement = document.querySelector("body");
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      bodyElement.classList.remove("overflow-hidden");
    };
  });

  return (
    <nav
      className={`fixed z-50 w-full  justify-between rounded-b-2xl bg-biancoTro px-4 py-5 text-bluTro md:flex md:px-20 ${hamburClicked ? "block" : "flex"}`}
    >
      <div
        className={`flex w-full justify-between md:mb-0 md:w-0 ${hamburClicked ? "mb-5" : ""} `}
      >
        <div className={`flex items-center gap-4 ${ibmPlexSans.className}`}>
          <Image src={logoBlue} alt="logo" width={40} className="w-12" />
          <h2 className="text-[1.2rem] font-semibold leading-[1]">
            Attrazione <br /> Investimenti
          </h2>
        </div>
        <label className="hamburger block md:hidden">
          <input
            type="checkbox"
            onClick={() => setHamburClicked(!hamburClicked)}
          />
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>
      </div>

      <ul
        className={`${hamburClicked && windowWidth < 768 ? styles.animationNavbar : ""} items-center justify-center gap-4 text-[1.2rem] font-medium md:flex md:flex-row ${ibmPlexSans.className} ${hamburClicked ? "flex flex-col" : "hidden"}`}
      >
        <li>
          <Link
            href="./homepage"
            className={`${styles.hoverUnderline} relative`}
            onClick={() => setHamburClicked(!hamburClicked)}
          >
            Home
          </Link>
        </li>
        <li
          className={`md:list-disc ${hamburClicked ? "list-none" : "list-disc"} list-inside`}
        >
          <Link
            href="./servicepage"
            className={`${styles.hoverUnderline} relative`}
            onClick={() => setHamburClicked(!hamburClicked)}
          >
            Servizi
          </Link>
        </li>
        <li
          className={`md:list-disc ${hamburClicked ? "list-none" : "list-disc"} list-inside`}
        >
          <Link
            href="./contacts"
            className={`${styles.hoverUnderline} relative`}
            onClick={() => setHamburClicked(!hamburClicked)}
          >
            Contatti
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
