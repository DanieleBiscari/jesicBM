

const Button1 = ({name, textSize, borderColor, textColor}) => {

    return ( 
        <>
            <a href="" className={`border-2 rounded-2xl py-1 px-2`} style={{fontSize: textSize, borderColor: borderColor, color: textColor}}>{name}</a>
        </>
     );
}
 
export default Button1;