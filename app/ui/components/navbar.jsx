"use client";
import Image from "next/image";
import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";
import logoBlue from "@/public/img/logoBlue.svg";
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import useLang from "@/app/hooks/useLang";
import { useMyContext } from "@/app/contexts/context";
import LanguageChanger from "./languageChanger";
import close from "@/public/img/close-svgrepo-com.svg";
import open from "@/public/img/hamburger-menu-svgrepo-com.svg";

const Navbar = () => {
  const [hamburClicked, setHamburClicked] = useState(false);
  const [windowWidth, setWindowWidth] = useState(undefined);
  const { language, setLanguage } = useMyContext();
  const { lang } = useLang(language);

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
      className={`fixed z-50 w-full  justify-between rounded-b-2xl bg-biancoTro px-4 py-5 text-bluTro md:flex md:px-14 ${hamburClicked ? "block" : "flex"}`}
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
        <div
          className="my-auto block w-10 cursor-pointer lg:hidden"
          onClick={() => setHamburClicked(!hamburClicked)}
        >
          {hamburClicked ? (
            <Image alt="close image" width={40} src={close}></Image>
          ) : (
            <Image alt="open image" width={40} src={open}></Image>
          )}
        </div>
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
            {lang?.navbar.servizi}
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
            {lang?.navbar.cont}
          </Link>
        </li>
        <li
          className={`md:list-disc ${hamburClicked ? "list-none" : "list-disc"} list-inside`}
        >
          <Link
            href="./pa"
            className={`${styles.hoverUnderline} relative`}
            onClick={() => setHamburClicked(!hamburClicked)}
          >
            {lang?.navbar.servizi} PA
          </Link>
        </li>
        <li>
          <div className="ml-6">
            <LanguageChanger
              language={language}
              setLanguage={setLanguage}
            ></LanguageChanger>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
