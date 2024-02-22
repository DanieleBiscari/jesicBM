import { ibmPlexSans } from "@/app/ui/fonts";
import Link from "next/link";
import { handleSmoothScroll } from "@/app/lib/bmlib";
const Button1 = ({
  name,
  borderColor,
  textColor,
  backgroundColor,
  type,
  url,
}) => {
  if (url) {
    return (
      <>
        {(url.indexOf("#") !== -1) ? (
          <a
            onClick={() => handleSmoothScroll(url)}
            className={`${borderColor ? "border-2" : ""} ${ibmPlexSans.className} cursor-pointer scroll-smooth rounded-3xl px-4 py-2 font-medium lg:px-4 lg:py-2 ${type === "actionPlan" ? "[font-size:_clamp(1rem,1.2vw,1.2rem)]" : type === "presentation" ? "[font-size:_clamp(.8rem,3vw,3rem)]" : "[font-size:_clamp(.8rem,1vw,1rem)]"} `}
            style={{
              borderColor: borderColor,
              color: textColor,
              backgroundColor: backgroundColor,
            }}
          >
            {name}
          </a>
        ) : (
          <Link
            href={url}
            className={`${borderColor ? "border-2" : ""} ${ibmPlexSans.className} scroll-smooth rounded-3xl px-4 py-2 font-medium lg:px-4 lg:py-2 ${type === "actionPlan" ? "[font-size:_clamp(1rem,1.2vw,1.2rem)]" : type === "presentation" ? "[font-size:_clamp(.8rem,3vw,3rem)]" : "[font-size:_clamp(.8rem,1vw,1rem)]"} `}
            style={{
              borderColor: borderColor,
              color: textColor,
              backgroundColor: backgroundColor,
            }}
          >
            {name}
          </Link>
        )}
      </>
    );
  } else {
    return (
      <>
        <div
          className={`${borderColor ? "border-2" : ""} ${ibmPlexSans.className} rounded-3xl px-4 py-2 font-medium lg:px-4 lg:py-2 ${type === "actionPlan" ? "[font-size:_clamp(1rem,1.2vw,1.2rem)]" : type === "presentation" ? "[font-size:_clamp(.8rem,3vw,3rem)]" : "[font-size:_clamp(.8rem,1vw,1rem)]"} `}
          style={{
            borderColor: borderColor,
            color: textColor,
            backgroundColor: backgroundColor,
          }}
        >
          {name}
        </div>
      </>
    );
  }
};

export default Button1;
