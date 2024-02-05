"use client"
import Image from "next/image";
import Button1 from "@/app/ui/components/button1";
import houseMoney from "@/public/img/houseMoney.svg"
import community from "@/public/img/community.svg"
import balance from "@/public/img/balance.svg"
import location from "@/public/img/location.svg"
import life from "@/public/img/life.svg"
import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";
import { useState } from "react";

//todo:  impostare il responsive
//todo:  CTA al bottone

const WhyUs = ({styles}) => {
    const footerDivWidth = 321
    const margin = 30
    const numeri = Array.from({length: 6}, (_, i) => (margin + footerDivWidth) * i + "px");
    const [overedItem, setOveredItem] = useState(null);
    // const numeri = ["0", (margin+footerDivWidth)+"px", (margin+footerDivWidth)*2+"px"];

    function handleOver(id){
        setOveredItem(id)
    }
    function handleLeave(id){
        setOveredItem(null)
    }

    return ( 
        <>
        <div className="grid grid-cols-2 pe-4 h-[95%]">
            <div className={` scale-50 md:scale-75 lg:scale-100 grid grid-template-columns: repeat(2, 1fr) 1fr repeat(2, 1fr) place-items-center`}>
                <div onMouseLeave={() => handleLeave()} onMouseOver={() => handleOver(0)} className={`${styles.circleWhyUs} self-end justify-self-end me-24`}>
                    {overedItem === 0 
                    ?   <div className={`${styles.opacityAnimation}`}>
                            <h3 className={`${roboto.className} text-[22px] font-semibold`}>Convenienza</h3>
                            <p className={`${roboto.className} text-[15px]`}>
                            Elevata qualità di vita senza sostenere oneri finanziari eccessivi.
                            </p>
                        </div>
                    :  <Image src={houseMoney} width={100} height={100} className=" w-[100%] h-[100%]" alt="house with dollar"></Image>
                    }
                    
                </div>
                <div onMouseLeave={() => handleLeave()} onMouseOver={() => handleOver(1)} className={`${styles.circleWhyUs} self-end justify-self-start ms-24`}>
                    {overedItem === 1
                    ?   <div className={`${styles.opacityAnimation}`}>
                            <h3 className={`${roboto.className} text-[22px] font-semibold`}>Communità</h3>
                            <p className={`${roboto.className} text-[15px]`}>
                            Calorosa accoglienza. Senso di appartenenza e solidarietà e facile integrazione.
                            </p>
                        </div>
                    : <Image src={community} width={100} height={100} className=" w-[100%] h-[100%]" alt="comunity in love"></Image>
                    }
                </div>
                <div onMouseLeave={() => handleLeave()} onMouseOver={() => handleOver(2)} className={`${styles.circleWhyUs} col-span-2 place-self-center`}>
                    {overedItem === 2
                    ?   <div className={`${styles.opacityAnimation}`}>
                            <h3 className={`${roboto.className} text-[22px] font-semibold`}>Stile di vita</h3>
                            <p className={`${roboto.className} text-[15px]`}>
                            Una comunità per vivere a ritmi sostenibili, più lentamente e con meno frenesia.
                            </p>
                        </div>
                    : <Image src={balance} width={100} height={100} className=" w-[100%] h-[100%]" alt="balance"></Image>
                    } 
                </div>
                <div onMouseLeave={() => handleLeave()} onMouseOver={() => handleOver(3)} className={`${styles.circleWhyUs} self-start justify-self-end me-24`}>
                    {overedItem === 3
                    ?   <div className={`${styles.opacityAnimation}`}>
                            <h3 className={`${roboto.className} text-[22px] font-semibold`}>Location</h3>
                            <p className={`${roboto.className} text-[15px]`}>
                            A soli 20 minuti dal parco dei Nebrodi e ad un’ora dall’aeroporto internazionale di Catania.
                            </p>
                        </div>
                    : <Image src={location} width={100} height={100} className=" w-[100%] h-[100%]" alt="location"></Image>
                    } 
                </div>
                <div onMouseLeave={() => handleLeave()} onMouseOver={() => handleOver(4)} className={`${styles.circleWhyUs} self-start justify-self-start ms-24`}>
                    {overedItem === 4
                    ?   <div className={`${styles.opacityAnimation}`}>
                            <h3 className={`${roboto.className} text-[22px] font-semibold`}>Sostenibilità</h3>
                            <p className={`${roboto.className} text-[15px]`}>
                            Investire qui significa contribuire alla tutela dell'ambiente e alla crescita sostenibile.
                            </p>
                        </div>
                    : <Image src={life} width={100} height={100} className=" w-[100%] h-[100%]" alt="life"></Image>
                    } 
                </div>
            </div>

            <div className="p-[6rem]">
                <h1 className={`${ebGaramond.className} ${styles.h1Custom} leading-[1] mb-8`} style={{color: "#F5A400"}}>Perché investire <br />a Troina?</h1>
                <p className={`${roboto.className} leading-7 mb-12 pe-32 text-[20px]`}>
                    Troina è molto più di una semplice cittadina dove comprare casa. 
                    Il nostro obiettivo è riuscire a riqualificare sostenibilmente 
                    il suo centro storico e creare una comunità che possa abbracciare lo stile di vita del luogo, 
                    recuperandolo e portando nuovo valore ad una terra con molto potenziale.
                </p>
                <Button1 name={"SCOPRI DI PIÙ →"} textColor={"#F5A400"} textSize={"1rem"} borderColor={"#F5A400"}/>
            </div>
        </div>

        <div className={`${styles.footerWhyUs} h-[5%] ${ibmPlexSans.className} font text-[25px] text-center relative`}>
            {numeri.map((numero, id) =>(
                <div key={id} className={`${styles.animationInfiniteScroll} absolute h-full text-start w-[340px]`} style={{left: numero}}>• BM Attrazione Investimenti</div>
            ))} 
        </div>
        </>
     );
}
 
export default WhyUs;