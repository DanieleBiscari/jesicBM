"use client";
import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";
import Image from "next/image";
import arrowDown from "@/public/img/arrowDownWhite.svg";
import { handleSmoothScroll } from "@/app/lib/bmlib";
import useLang from "@/app/hooks/useLang";

const ServicePresentation = ({ styles }) => {
  const { lang } = useLang();

  return (
    <div className="mx-auto flex h-full w-[80%] flex-col justify-evenly gap-4 py-16 sm:gap-0 lg:ml-20 lg:w-[50%]">
      <div className="h-full">
        <p className={`${styles.typoPresentation} ${roboto.className} mb-10`}>
          {lang?.services.bmAssist}&nbsp; 
          <b className={styles.enfTextPresentation}>{lang?.services.buroc}</b>
          {lang?.services.nella}&nbsp;
          <b className={styles.enfTextPresentation}>
            {lang?.services.proget}
          </b>{" "}
          {lang?.services.nella2}
          <b className={styles.enfTextPresentation}>
            {" "}
            {lang?.services.ristrut}
          </b>
          {lang?.services.mettendovi}
          <br />
          <b className={styles.enfTextPresentation}>{lang?.services.sogno}</b>
        </p>
        <div
          className={`${roboto.className} ${styles.textLink} relative z-30 flex flex-col gap-4`}
        >
          <a
            onClick={() => handleSmoothScroll("#remoteService")}
            className="flex cursor-pointer items-center justify-between hover:bg-slate-900 hover:bg-opacity-20"
          >
            <p>{lang?.services.remoto}</p>
            <Image
              className="h-6 w-6"
              src={arrowDown}
              width={32}
              height={32}
              alt="arrow Down"
            ></Image>
          </a>
          <div className="h-[2px] w-full rounded-lg bg-slate-200"></div>
          <a
            onClick={() => handleSmoothScroll("#presenceService")}
            className="flex cursor-pointer items-center justify-between hover:bg-slate-900 hover:bg-opacity-20"
          >
            <p>{lang?.services.presenza}</p>
            <Image
              className="h-6 w-6"
              src={arrowDown}
              width={32}
              height={32}
              alt="arrow Down"
            ></Image>
          </a>
          <div className="h-[2px] w-full rounded-lg bg-slate-200"></div>
          <a
            onClick={() => handleSmoothScroll("#actionPlan")}
            className="flex cursor-pointer items-center justify-between hover:bg-slate-900 hover:bg-opacity-20"
          >
            <p>{lang?.services.action}</p>
            <Image
              className="h-6 w-6"
              src={arrowDown}
              width={32}
              height={32}
              alt="arrow Down"
            ></Image>
          </a>
        </div>
      </div>

      <div
        className={`${styles.imageArrampicata} absolute right-0 z-0 h-full w-[600px]`}
      >
        {/* immagine dell'arrampicata */}
      </div>
    </div>
  );
};

export default ServicePresentation;
