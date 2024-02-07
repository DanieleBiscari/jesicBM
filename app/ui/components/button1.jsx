

const Button1 = ({name, textSize, borderColor, textColor, backgroundColor}) => {

    return ( 
        <>
            <a href="" className={`border-2 rounded-2xl py-1 px-4 font-semibold`} style={{fontSize: textSize, borderColor: borderColor, color: textColor, backgroundColor: backgroundColor}}>{name}</a>
        </>
     );
}
 
export default Button1;