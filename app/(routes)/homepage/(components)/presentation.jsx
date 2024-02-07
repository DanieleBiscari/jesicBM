"use client"
import Button1 from "@/app/ui/components/button1";
import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";
import Image from "next/image";
import logo from "@/public/img/logo.svg";
import { useState } from "react";



const Presentation = ({styles}) => {
    const [animationShowed, setAnimationShowed] = useState(false)

    function handleAnimationShow(){
        setAnimationShowed(true)
    }
    function handleAnimationHide(){
        setAnimationShowed(false)
    }

    return (
        <>
        <div className="flex flex-col justify-center items-center basis-[50%]">
            <div onMouseOver={handleAnimationShow} onMouseLeave={handleAnimationHide} className="flex relative">
                <div className={`${styles.blurredDiv} flex flex-col items-center justify-center p-8 z-0  rounded-l-2xl ${animationShowed ? "" : "rounded-r-2xl"}`}>
                    <Image
                        src={logo}
                        alt="logo"
                        width={200}
                        className="w-46"
                        priority
                    />
                    <h2 className={`${ibmPlexSans.className} font-semibold text-[2rem] mb-8 text-center leading-8`}>attrazione <br /> investimenti</h2>
                    <Button1 name={"I NOSTRI SERVIZI"} textSize={"1.1rem"} borderColor={"white"} textColor={"white"}/>
                </div>
                <p className={`${roboto.className} ${styles.blurredDiv} ${styles.animationON} ${styles.pPresentation}  absolute left-[95%] z-10 w-[45vw] h-full pl-8 p-4 rounded-r-2xl p1 ${animationShowed ? "" : "hidden"}`}>
                    Troina, incantevole comune nella provincia di Enna, si distingue per la sua ricca storia e autentica bellezza. 
                    Circondato da paesaggi mozzafiato, Troina vanta un patrimonio culturale unico, 
                    testimoniato dai suoi antichi monumenti e dalla vivace tradizione locale. 
                    Con le sue stradine pittoresche e l'accoglienza calorosa della comunità, 
                    Troina è un tesoro nascosto che affascina chiunque abbia il privilegio di esplorarla.
                </p>
            </div>
        </div>
        <div className="ml-auto mr-24 mt-20">
            <button className={`${ebGaramond.className} font-semibold text-[3rem] ${styles.languageColor} flex justify-start`}>Troina (EN)</button>
        </div>
        </>
     );
}
 
export default Presentation;