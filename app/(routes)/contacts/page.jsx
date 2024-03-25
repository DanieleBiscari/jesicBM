"use client"
import styles from "@/app/styles/contacts.module.css";
import Image from "next/image";
import logo from "@/public/img/logo.svg";
import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";
import Button1 from "@/app/ui/components/button1";
import useLang from "@/app/hooks/useLang";
import { useMyContext } from "@/app/contexts/context";

export default function Page() {
  const { language, setLanguage } = useMyContext();
  const { lang } = useLang(language);
  return (
    <div
      className={`${styles.bgMain} mb:pb-0 flex w-full flex-col justify-center gap-16 pb-20 pt-32 md:h-screen md:flex-row md:justify-evenly md:pb-0 md:pt-0`}
    >
      <div
        className={`flex flex-col items-center justify-center gap-10 ${ibmPlexSans.className}`}
      >
        <div>
          <Image
            src={logo}
            alt="logo"
            className="h-40 w-40 px-4 md:h-60 md:w-60 xl:h-80 xl:w-80"
            width={240}
            height={240}
          />
          <h2 className="text-center font-semibold leading-[1] [font-size:_clamp(1.5rem,2.2vw,2.2rem)]">
            Attrazione <br /> Investimenti
          </h2>
        </div>
        <Button1
          name={"Contattaci"}
          textColor={"#13637E"}
          textSize={"1rem"}
          borderColor={""}
          backgroundColor={"#E6E4D9"}
          url={"https://www.linkedin.com/company/bm-attrazione-investimenti/"}
          className={"w-[80%]"}
        />
      </div>

      <div className="flex flex-col items-center justify-center italic [font-size:_clamp(1.5rem,2.6vw,2.6rem)]">
        <div className="w-84 px-8 md:w-80 md:p-0">
          <p className="font-bold text-[#E6E4D9] text-opacity-80">
            {lang?.contacts.p1}
          </p>
          <p className="text-[#E6E4D9] text-opacity-50">{lang?.contacts.p2}</p>
        </div>
      </div>
    </div>
  );
}
