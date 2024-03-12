import Button1 from "./button1";
import { ibmPlexSans, roboto } from "@/app/ui/fonts";
import { deleteCookie, hasCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";

const CookieModal = ({
  title,
  text,
  buttonRightText,
  buttonLeftText,
  urlToMore,
}) => {
  const [showConsent, setShowConsent] = useState(true);
  
  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
    // setShowConsent(false); // for debug
  }, []);

  const handleClickAccept = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  }
  const handleClickRefuse = () => {
    setShowConsent(true);
    deleteCookie("localConsent");
  }

  if (showConsent) {
    return null;
  } else
    return (
      <div className="absolute z-1 h-full w-full bg-slate-300 bg-opacity-30">
        <div className="absolute left-[10%] top-[8%] z-20 flex h-[85%] w-[80%] flex-col justify-center gap-4 rounded-3xl bg-biancoTro text-[#313131] shadow-2xl shadow-[black] sm:top-[25%] sm:h-1/2 lg:left-[33%] lg:top-[25%] lg:h-1/2 lg:w-1/3 ">
          <div className="px-8 md:px-16">
            <h1
              className={`${ibmPlexSans.className} mb-4 font-bold [font-size:_clamp(1.2rem,1.4vw,1.4rem)] `}
            >
              {title}
            </h1>
            <p
              className={`${roboto.className} [font-size:_clamp(.8rem,1.1vw,1.1rem)]`}
            >
              {text}{" "}
              <a className="text-[#13637E] underline" href={urlToMore}>
                Leggi altro
              </a>
            </p>{" "}
          </div>
          <div className="flex justify-around gap-4 p-4 sm:gap-0">
            <Button1
              name={buttonLeftText}
              borderColor={"#13637E"}
              textColor={"#13637E"}
              handleClick={handleClickRefuse}
            ></Button1>
            <Button1
              name={buttonRightText}
              borderColor={"#13637E"}
              backgroundColor={"#13637E"}
              textColor={"#E6E4D9"}
              handleClick={handleClickAccept}
            ></Button1>
          </div>
        </div>
      </div>
    );
};

export default CookieModal;
