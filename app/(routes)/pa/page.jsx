"use client"
import styles from "@/app/styles/contacts.module.css";
import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";
import Button1 from "@/app/ui/components/button1";
import useLang from "@/app/hooks/useLang";
import { useMyContext } from "@/app/contexts/context";

export default function Page() {
  const { language, setLanguage } = useMyContext();
  const { lang } = useLang(language);
  return (
    <div
      className={`${styles.bgMain} flex min-h-screen w-full flex-col items-center justify-center pt-28 md:flex-row md:pt-0`}
    >
      <div
        className={`flex flex-col items-center justify-center gap-10 ${ibmPlexSans.className} pb-20 md:pb-0`}
      >
        <h1 className="w-full px-12 [font-size:_clamp(2.2rem,2.8vw,2.8rem)] sm:w-1/2 md:px-0">
          {lang?.pa.serviziper}{" "}
          <span className=" text-gialloTro">{lang?.pa.publica}</span>
        </h1>
        <Button1
          name={lang?.pa.button}
          textColor={"#E6E4D9"}
          textSize={"1rem"}
          borderColor={"#E6E4D9"}
          backgroundColor={""}
          url={"https://www.linkedin.com/company/bm-attrazione-investimenti/"}
          className={"w-[60%]"}
        />
      </div>

      <div className="flex flex-col items-center italic ">
        <ul className="w-1/2 list-disc [font-size:_clamp(1.5rem,1.8vw,1.8rem)]">
          <li>{lang?.pa.l1}</li>
          <li>{lang?.pa.l2}</li>
          <li>{lang?.pa.l3}</li>
          <li>{lang?.pa.l4}</li>
          <li>{lang?.pa.l5}</li>
          <li>{lang?.pa.l6}</li>
        </ul>
      </div>
    </div>
  );
}
