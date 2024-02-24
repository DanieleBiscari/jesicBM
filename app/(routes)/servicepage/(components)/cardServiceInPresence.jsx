import Button2 from "@/app/ui/components/button2";
import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";

const CardServiceInPresence = ({
  styles,
  title,
  buttonsContent,
  subtitle,
  text,
  footerText,
}) => {
  return (
    <div className="h-full  w-full overflow-hidden rounded-[52px] bg-bluTro p-8 text-biancoTro shadow-xl lg:w-[90%]">
      <div className="w-full ">
        <div className=" mb-6">
            <h1
              className={`${ebGaramond.className} font-bold [font-size:_clamp(1.2rem,2.8vw,2.8rem)]`}
            >
              {title}
            </h1>
            <h2
              className={`${ebGaramond.className} font-normal [font-size:_clamp(1.1rem,2vw,2rem)]`}
            >
              {subtitle}
            </h2>
            <div>
              {text.map((element, _id) => {
                return (
                  <p
                    className={`${ibmPlexSans.className} font-light leading-[150%] [font-size:_clamp(.8rem,1.3vw,1.3rem)]`}
                    key={_id}
                  >
                    {element}
                  </p>
                );
              })}
            </div>
        </div>
        {buttonsContent.map((element, _id) => {
          return (
            <div key={_id} className=" flex mb-4">
              <Button2
                content={element}
                textColor={`${element.importantButton ? "#13637E" : "#E6E4D9"}`}
                borderColor={"#E6E4D9"}
                backgroundColor={`${element.importantButton ? "#E6E4D9" : "#13637E"}`}
                url={"/contacts"}
              ></Button2>
            </div>
          );
        })}
        <p className={`${ibmPlexSans.className} font-extralight leading-[150%] [font-size:_clamp(.7rem,1vw,1rem)] text-center`}>{footerText}</p>
      </div>
    </div>
  );
};

export default CardServiceInPresence;
