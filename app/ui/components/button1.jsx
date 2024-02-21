import { ibmPlexSans } from "@/app/ui/fonts";

const Button1 = ({ name, borderColor, textColor, backgroundColor, type }) => {
  return (
    <>
      <a
        href=""
        className={`${borderColor ? "border-2" : ""} ${ibmPlexSans.className} rounded-3xl px-4 py-2 font-medium lg:px-4 lg:py-2 ${type === "actionPlan" ? "[font-size:_clamp(1rem,1.2vw,1.2rem)]" : type === "presentation" ? "[font-size:_clamp(.8rem,3vw,3rem)]" : "[font-size:_clamp(.8rem,1vw,1rem)]"} `}
        style={{
          borderColor: borderColor,
          color: textColor,
          backgroundColor: backgroundColor,
        }}
      >
        {name}
      </a>
    </>
  );
};

export default Button1;
