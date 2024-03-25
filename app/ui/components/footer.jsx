"use client";
import Image from "next/image";
import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";
import logo from "@/public/img/logo.svg";
import send from "@/public/img/send.svg";
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import Input1 from "./input1";
import { useRef } from "react";
import useLang from "@/app/hooks/useLang";
import { useMyContext } from "@/app/contexts/context";

const Footer = () => {
  const inputRef = useRef();
  const { language, setLanguage } = useMyContext();
  const { lang } = useLang(language);

  function handleSearch() {
    inputRef.current.value = "";
  }

  return (
    <footer className="flex w-full flex-wrap items-center justify-center gap-8 bg-bluTro  px-32 py-16 xl:gap-32 2xl:justify-between">
      <div className="flex flex-col items-center gap-8 2xl:items-start">
        <div
          className={`flex gap-4 ${ibmPlexSans.className} flex-col items-center sm:flex-row`}
        >
          <Image src={logo} alt="logo" width={40} className="h-16 w-16" />
          <h2 className="text-center text-[1.7rem] font-semibold leading-[1] sm:text-start">
            Attrazione <br /> Investimenti
          </h2>
        </div>
        <div className="flex flex-col gap-2 text-center 2xl:text-start">
          <p>Copyright © 2024 BM Attrazione Investimenti</p>
          <p>{lang?.footer.diritti}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-16 text-center md:flex-row md:text-start 2xl:gap-32">
        <div className="flex flex-col gap-4">
          <h1 className=" text-[1.5rem] font-semibold">Indice</h1>
          <div>
            <Link
              href="/homepage"
              className={`${styles.hoverUnderlineWhite} relative`}
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              href="./servicepage"
              className={`${styles.hoverUnderlineWhite} relative`}
            >
              {lang?.footer.servizi}
            </Link>
          </div>
          <div>
            <Link
              href="./contacts"
              className={`${styles.hoverUnderlineWhite} relative`}
            >
              Contatti
            </Link>
          </div>
          <div>
            <Link
              href="./pa"
              className={`${styles.hoverUnderlineWhite} relative`}
            >
              {lang?.footer.servizi} PA
            </Link>
          </div>
        </div>
        {/* <div className="flex flex-col gap-4">
          <h1 className=" text-[1.5rem] font-semibold">Supporto</h1>
          <div>
            <Link
              href="./serviceTerme"
              className={`${styles.hoverUnderlineWhite} relative`}
            >
              Termini di servizio
            </Link>
          </div>
          <div>
            <Link
              href="./privacyTerme"
              className={`${styles.hoverUnderlineWhite} relative`}
            >
              Privacy policy
            </Link>
          </div>
        </div> */}
        <div className="flex flex-col">
          <h1 className=" mb-4 text-center text-[1.5rem] font-semibold leading-[1]">
            {lang?.footer.aggiornato}
          </h1>
          <Input1
            placeholder={lang?.footer.placeholder}
            invert={true}
            urlImg={send}
            inputRef={inputRef}
            searchEffect={handleSearch}
          ></Input1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
