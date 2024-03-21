"use client";
import Button1 from "@/app/ui/components/button1";
import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";
import logo from "@/public/img/logo.svg";
import Image from "next/image";
import { useState } from "react";

const Presentation = ({ styles }) => {
  // const languageArray = ["IT", "EN"];
  // const [language, setLanguague] = useState("IT");
  const [animationShowed, setAnimationShowed] = useState(false);

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
    <div className="flex md:min-h-screen w-screen">
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
                attrazione <br /> investimenti
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
              <b>Troina</b>, incantevole comune nella provincia di Enna, si
              distingue per la sua ricca storia e autentica bellezza. Circondato
              da paesaggi mozzafiato, Troina vanta un patrimonio culturale
              unico, testimoniato dai suoi antichi monumenti e dalla vivace
              tradizione locale. Con le sue stradine pittoresche e l&apos;accoglienza
              calorosa della comunità, Troina è un tesoro nascosto che affascina
              chiunque abbia il privilegio di esplorarla.
            </p>
          </div>
        </div>
        <div className="ml-auto mr-24 mt-20">
          <button
            className={`${ebGaramond.className} text-[3rem] font-semibold ${styles.languageColor} flex justify-start`}
            // onClick={() => changeLanguage(language)}
          >
            {/* Troina ({language}) */}
            Troina(EN)
          </button>
        </div>
      </div>

      {/* Interfaccia schermi mobile */}
      <div className="mt-40 bg-bluTro pb-8 md:hidden">
        <p className={`${roboto.className} ${styles.pPresentation} px-8 py-4`}>
          <b>Troina</b>, incantevole comune nella provincia di Enna, si
          distingue per la sua ricca storia e autentica bellezza. Circondato da
          paesaggi mozzafiato, Troina vanta un patrimonio culturale unico,
          testimoniato dai suoi antichi monumenti e dalla vivace tradizione
          locale. Con le sue stradine pittoresche e l&apos;accoglienza calorosa della
          comunità, Troina è un tesoro nascosto che affascina chiunque abbia il
          privilegio di esplorarla.
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
              name={"I NOSTRI SERVIZI"}
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
