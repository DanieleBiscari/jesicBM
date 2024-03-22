"use client";
import useLang from "@/app/hooks/useLang";
import Button1 from "@/app/ui/components/button1";
import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";
import logo from "@/public/img/logo.svg";
import Image from "next/image";
import { useState } from "react";

const Presentation = ({ styles }) => {
  // const languageArray = ["IT", "EN"];
  // const [language, setLanguague] = useState("IT");
  const [animationShowed, setAnimationShowed] = useState(false);
  const { lang } = useLang();

  // function changeLanguage(currentLanguage) {
  //   languageArray.map((language, _id) => {
  //     if (language === currentLanguage) {
  //       if (languageArray[_id + 1]) {
  //         setLanguague(languageArray[_id + 1]);
  //       } else {
  //         setLanguague(languageArray[0]);
  //       }
  //     } else {
  //     }
  //   });
  // }

  function handleAnimationShow() {
    setAnimationShowed(true);
  }
  function handleAnimationHide() {
    setAnimationShowed(false);
  }

  return (
    <div className="flex w-screen md:min-h-screen">
      {/* Interfaccia schermi larghi */}
      <div className="hidden min-h-screen w-screen md:flex">
        <div className="flex basis-[50%] flex-col items-center justify-center">
          <div
            onMouseOver={handleAnimationShow}
            onMouseLeave={handleAnimationHide}
            className="relative flex"
          >
            <div
              className={`${styles.blurredDiv} z-0 flex flex-col items-center justify-center rounded-l-2xl  p-8 ${animationShowed ? "" : "rounded-r-2xl"}`}
            >
              <Image src={logo} alt="logo" width={200} className="w-46" />
              <h2
                className={`${ibmPlexSans.className} mb-8 text-center text-[2rem] font-semibold leading-8`}
              >
                Attrazione <br /> Investimenti
              </h2>
              <Button1
                name={"I NOSTRI SERVIZI"}
                textSize={"1.1rem"}
                borderColor={"white"}
                textColor={"white"}
                url={"./servicepage"}
              />
            </div>
            <p
              className={`${roboto.className} ${styles.blurredDiv} ${styles.animationON} ${styles.pPresentation} absolute left-[95%] z-10 h-full w-[45vw] rounded-r-2xl p-4 pl-8 ${animationShowed ? "" : "hidden"}`}
            >
              {lang?.homepage.description}
            </p>
          </div>
        </div>
        <div className="ml-auto mr-24 mt-20">
          <div
            className={`${ebGaramond.className} text-[3rem] font-semibold ${styles.languageColor} flex justify-start`}
            // onClick={() => changeLanguage(language)}
          >
            {/* Troina ({language}) */}
            Troina(EN)
          </div>
        </div>
      </div>

      {/* Interfaccia schermi mobile */}
      <div className="mt-40 bg-bluTro pb-8 md:hidden">
        <p className={`${roboto.className} ${styles.pPresentation} px-8 py-4`}>
          {lang?.homepage.description}
        </p>
        <div className="mx-8 flex flex-wrap items-center justify-evenly gap-4 rounded-3xl bg-[#E6E4D9] bg-opacity-5 p-8">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src={logo}
              alt="logo"
              width={200}
              className="w-24"
              priority
            />
            <h2
              className={`${ibmPlexSans.className} text-center text-[1rem] font-semibold leading-4`}
            >
              attrazione <br /> investimenti
            </h2>
          </div>
          <div>
            <Button1
              type={"presentation"}
              name={lang?.homepage.button2}
              borderColor={"white"}
              textColor={"white"}
              url={"./servicepage"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
