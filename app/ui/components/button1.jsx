import {ibmPlexSans} from "@/app/ui/fonts";

const Button1 = ({name, textSize, borderColor, textColor, backgroundColor}) => {

    return ( 
        <>
            <a href="" className={`${borderColor ? "border-2 " : ""} ${ibmPlexSans.className} rounded-3xl py-2 px-4 font-medium`} style={{fontSize: textSize, borderColor: borderColor, color: textColor, backgroundColor: backgroundColor}}>{name}</a>
        </>
     );
}
 
export default Button1;