import Image from "next/image";
import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";
import logo from "@/public/img/logo.svg";
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import Input1 from "./input1";

const Footer = () => {
  return (
    <footer className="flex w-full flex-wrap items-center justify-center gap-8 bg-bluTro px-32 py-16 xl:justify-between">
      <div className="flex flex-col items-center gap-8">
        <div className={`flex gap-4 ${ibmPlexSans.className} flex-col sm:flex-row items-center`}>
          <Image src={logo} alt="logo" width={40} className="w-16 h-16" />
          <h2 className="text-[1.7rem] font-semibold leading-[1] text-center sm:text-start">
            Attrazione <br /> Investimenti
          </h2>
        </div>
        <div className="flex flex-col gap-2 text-center 2xl:text-start">
          <p>Copyright © 2023 BM Attrazione Investimenti</p>
          <p>Tutti i diritti riservati</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-16 text-center 2xl:gap-32 md:text-start">
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
              Servizi
            </Link>
          </div>
          <div>
            <Link
              href="./contactspage"
              className={`${styles.hoverUnderlineWhite} relative`}
            >
              Contatti
            </Link>
          </div>
          <p>PA</p>
        </div>
        <div className="flex flex-col gap-4">
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
              href="./serviceTerme"
              className={`${styles.hoverUnderlineWhite} relative`}
            >
              Privacy policy
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className=" text-[1.5rem] font-semibold leading-[1]">
            Rimani aggiornato
          </h1>
          <Input1></Input1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
