import Button1 from "@/app/ui/components/button1";
import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";
import Image from "next/image";
import graphBar2 from "@/public/img/graphBar2.svg";
import useLang from "@/app/hooks/useLang";
import { useMyContext } from "@/app/contexts/context";

const Trust2 = ({ styles }) => {
  const { language, setLanguage } = useMyContext();
  const { lang } = useLang(language);
  return (
    <div className="flex h-full flex-col gap-20 lg:grid lg:grid-cols-2 lg:gap-0">
      <div className="flex flex-col items-center justify-center gap-12 px-8">
        <Image
          src={graphBar2}
          width={100}
          height={100}
          className="max-h-[36rem] w-[100%] object-contain"
          alt="life"
        ></Image>
        <Button1
          name={lang?.homepage.button}
          textColor={"#13637E"}
          textSize={"1rem"}
          borderColor={""}
          backgroundColor={"#E6E4D9"}
          url={"./servicepage"}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-20">
        <div className={`w-[70%] lg:w-[30rem] ${styles.btnOurTrust1}`}>
          <p
            className={`${ibmPlexSans.className} text-[1.2rem] font-normal opacity-90`}
          >
            {lang?.homepage.ipotesi1}
          </p>
          <h2
            className={`${ebGaramond.className} font-semibold [font-size:_clamp(2rem,2.5vw,2.5rem)]`}
          >
            {lang?.homepage.comprando2} <br />
            {lang?.homepage.comprando3}
          </h2>
        </div>
        <div className="flex flex-col justify-center px-4 lg:w-[30rem]">
          <h1
            className={`${ibmPlexSans.className} mb-4 font-bold leading-[1.1] [font-size:_clamp(2.5rem,3.5vw,3.5rem)]`}
          >
            BM Attrazione <br />
            Investimenti
          </h1>
          <ul
            className={`${ibmPlexSans.className} ${styles.bulletLine} pl-6 font-normal leading-[1.5] [font-size:_clamp(1.5rem,1.8vw,1.8rem)]`}
          >
            <li className="list-disc">
              <b>{lang?.homepage.docum}</b> {lang?.homepage.buroc}
            </li>
            <li className="list-disc">
              <b>{lang?.homepage.cont}</b> {lang?.homepage.invest}{" "}
            </li>
            <li className="list-disc pe-0 sm:pe-[50%] lg:pe-20">
              <b>{lang?.homepage.assist}</b>
              <br />
              {lang?.homepage.artigiani}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Trust2;
