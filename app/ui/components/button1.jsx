import {ibmPlexSans} from "@/app/ui/fonts";

const Button1 = ({name, textSize, borderColor, textColor, backgroundColor}) => {

    return ( 
        <>
            <a href="" className={`${borderColor ? "border-2 [font-size:_clamp(.5rem,1vw,1rem)]" : ""} ${ibmPlexSans.className} rounded-3xl py-1 px-2 lg:py-2 lg:px-4 font-medium`} style={{borderColor: borderColor, color: textColor, backgroundColor: backgroundColor}}>{name}</a>
        </>
     );
}
 
export default Button1;