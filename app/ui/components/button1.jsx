

const Button1 = ({name, textSize}) => {

    return ( 
        <>
            <a href="" className={`border-2 rounded-2xl py-1 px-2`} style={{fontSize: textSize}}>{name}</a>
        </>
     );
}
 
export default Button1;