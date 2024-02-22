"use client";
import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";
import Image from "next/image";
import arrowDown from "@/public/img/arrowDown.svg";
import { handleSmoothScroll } from "@/app/lib/bmlib";

const ServicePresentation = ({ styles }) => {

  return (
    <div className="w-[80%] py-16 mx-auto lg:w-[50%] flex flex-col justify-evenly h-full lg:ml-20 gap-4 sm:gap-0">
      <div className="h-full">
        <p
          className={`${styles.typoPresentation} ${roboto.className} mb-10`}
        >
          BM vi assisterà nella fase{" "}
          <b className={styles.enfTextPresentation}>burocratica</b>, nella{" "}
          <b className={styles.enfTextPresentation}>progettazione</b> e nella{" "}
          <b className={styles.enfTextPresentation}>ristrutturazione</b>,
          mettendovi in contatto con tutte le figure utili all'investimento fino
          alla consegna completa dell'immobile. <br />
          <b className={styles.enfTextPresentation}>
            Il tuo sogno, la nostra missione, il futuro di Troina.
          </b>
        </p>
        <div className={`${roboto.className} ${styles.textLink} flex flex-col gap-4 z-30 relative`}>
          <a onClick={() => handleSmoothScroll("#remoteService")} className="flex justify-between items-center cursor-pointer">
            <p>I nostri servizi da remoto</p>
            <Image
              className="w-6 h-6"
              src={arrowDown}
              width={32}
              height={32}
              alt="arrow Down"
            ></Image>
          </a>
          <div className="w-full h-[2px] rounded-lg bg-slate-200"></div>
          <a onClick={() => handleSmoothScroll("#presenceService")} className="flex justify-between items-center cursor-pointer">
            <p>I nostri servizi in presenza</p>
            <Image
              className="w-6 h-6"
              src={arrowDown}
              width={32}
              height={32}
              alt="arrow Down"
            ></Image>
          </a>
          <div className="w-full h-[2px] rounded-lg bg-slate-200"></div>
          <a onClick={() => handleSmoothScroll("#actionPlan")} className="flex justify-between items-center cursor-pointer">
            <p>Action plan con BM</p>
            <Image
              className="w-6 h-6"
              src={arrowDown}
              width={32}
              height={32}
              alt="arrow Down"
            ></Image>
          </a>
        </div>
      </div>

      <div
        className={`${styles.imageArrampicata} absolute right-0 h-full w-[600px] z-0`}
      >
        {/* immagine dell'arrampicata */}
      </div>
    </div>
  );
};

export default ServicePresentation;
