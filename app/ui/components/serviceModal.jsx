import Image from "next/image";
import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";
import arrowDown from "@/public/img/arrowDown.svg";
import Button1 from "./button1";

const ServiceModal = ({
  styles,
  title,
  price,
  subtitle,
  text,
  image,
  handleClick,
  clicked,
  setClicked,
}) => {
  if (clicked === title) {
    return (
      <div
        className={`${styles.slideUpAnim} fixed bottom-0 left-[10%] z-30 flex h-[80vh] w-[80vw] columns-2 flex-col rounded-t-[52px] bg-bluTro px-12 py-4 lg:py-8`}
      >
        <div className="mx-auto mb-4 cursor-pointer">
          <Image
            src={arrowDown}
            alt="arrow down"
            className="h-6 w-6"
            width={32}
            height={32}
            onClick={() => handleClick("")}
          ></Image>
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center gap-8 lg:flex-row lg:gap-0 ">
          <div className="flex w-full justify-center text-biancoTro lg:w-1/2">
            <div className="flex w-full flex-col gap-4 lg:w-[65%] lg:gap-8">
              <h1
                className={`${ebGaramond.className} font-bold [font-size:_clamp(1.2rem,2.8vw,2.8rem)]`}
              >
                {title}
              </h1>
              {subtitle.includes("VIDEOCHIAMATA") ? (
                <h2
                  className={`${ibmPlexSans.className} font-bold leading-[150%] [font-size:_clamp(.8rem,1.3vw,1.3rem)]`}
                >
                  VIDEOCHIAMATA <br /> 45 minuti con un consulente e con un
                  traduttore professionista
                </h2>
              ) : (
                <h2
                  className={`${ibmPlexSans.className} font-bold leading-[150%] [font-size:_clamp(.8rem,1.3vw,1.3rem)]`}
                >
                  {subtitle}
                </h2>
              )}
              <div>
                {text.map((element, _id) => {
                  return (
                    <p
                      className={`${ibmPlexSans.className} font-normal leading-[150%] [font-size:_clamp(.8rem,1.3vw,1.3rem)]`}
                      key={_id}
                    >
                      {element}
                    </p>
                  );
                })}
              </div>
              <div className="flex flex-col items-center justify-center gap-2 lg:items-start lg:justify-start lg:gap-6">
                <p
                  className={`${ibmPlexSans.className} font-light leading-[150%] [font-size:_clamp(1rem,2.2vw,2.2rem)]`}
                >
                  a partire da €{price}
                </p>
                <div>
                  <Button1
                    name={"CONTATTACI"}
                    textSize={"1rem"}
                    borderColor={"#E6E4D9"}
                    textColor={"#E6E4D9"}
                    backgroundColor={"none"}
                  ></Button1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src={image}
              alt={`image of service ${title}`}
              className={`object-cover ${title.includes("Platinum") ? " mix-blend-screen" : " "}`}
            ></Image>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-full w-full overflow-hidden rounded-[52px] bg-bluTro p-8 text-biancoTro shadow-xl md:h-[65%] lg:w-[90%] min-h-[15rem] max-h-[20rem] md:max-h-full">
        <div className=" h-[90%] w-full overflow-hidden">
          <h1
            className={`${ebGaramond.className} mb-2 font-bold [font-size:_clamp(1.2rem,2.8vw,2.8rem)]`}
          >
            {title}
          </h1>
          {subtitle.includes("VIDEOCHIAMATA") ? (
            <h2
              className={`${ibmPlexSans.className} font-bold leading-[150%] [font-size:_clamp(.8rem,1.3vw,1.3rem)]`}
            >
              VIDEOCHIAMATA <br /> 45 minuti con un consulente e con un
              traduttore professionista
            </h2>
          ) : (
            <h2
              className={`${ibmPlexSans.className} font-bold leading-[150%] [font-size:_clamp(.8rem,1.3vw,1.3rem)]`}
            >
              {subtitle}
            </h2>
          )}
          <div>
            {text.map((element, _id) => {
              return (
                <p
                  className={`${ibmPlexSans.className} font-normal leading-[150%] [font-size:_clamp(.8rem,1.3vw,1.3rem)]`}
                  key={_id}
                >
                  {element}
                </p>
              );
            })}
          </div>
        </div>
        <div className="relative w-full">
          <p
            className={`${ibmPlexSans.className} relative z-10 cursor-pointer font-light leading-[150%] [font-size:_clamp(1rem,1.2vw,1.2rem)]`}
            onClick={() => handleClick(title)}
          >
            MOSTRA ALTRO
          </p>
          <div
            className={`${styles.linearSfocatura} absolute bottom-2 h-20 w-full`}
          ></div>
        </div>
      </div>
    );
  }
};

export default ServiceModal;
