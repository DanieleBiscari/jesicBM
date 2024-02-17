import { ibmPlexSans } from "@/app/ui/fonts";

const Button2 = ({
  content,
  textSize,
  borderColor,
  textColor,
  backgroundColor,
}) => {
  return (
    <>
      <a
        href=""
        className={`${borderColor ? "border-2 [font-size:_clamp(.5rem,1vw,1rem)]" : ""} ${ibmPlexSans.className} w-full rounded-3xl px-2 py-1 font-medium lg:px-4 lg:py-2`}
        style={{
          borderColor: borderColor,
          color: textColor,
          backgroundColor: backgroundColor,
        }}
      >
        <div className="flex items-center justify-center gap-8 font-normal">
          <h1 className={`${content.importantButton ? "font-semibold" : ""} [font-size:_clamp(1rem,1.8vw,1.8rem)]`}>
            €{content.price}
          </h1>
          <div>
            <p>
              <b>{content.dayPeriod}</b> ({content.hour} ORE)
            </p>
            <p>
              faremo visita a <b>{content.howManyHouse} case</b>
            </p>
          </div>
        </div>
      </a>
    </>
  );
};

export default Button2;
