import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";
import Image from "next/image";
import angelo from "@/public/img/angelo.svg"
import paolo from "@/public/img/paolo.svg"
import objective from "@/public/img/objective.svg"
import vision from "@/public/img/vision.svg"
import etica from "@/public/img/etica.svg"
import EndSection from "@/app/ui/components/endSection";

//todo:  impostare il responsive

const OurTeam = ({styles, overed, handleOverOurTeam, handleLeaveOurTeam}) => {

    return ( 
        <>
            <h1 className={`italic ${styles.h1CustomTroina} ${styles.colorBlue} ${ebGaramond.className}  text-center pt-32 mb-12`}>Startup <span className={`${styles.colorYellow}`}>Team</span></h1>

            <div className="flex flex-wrap lg:grid lg:grid-cols-2 w-full">
                <div className="flex justify-end p-10 lg:justify-end items-center gap-8  w-full">
                    <div className="text-right">
                        <h2 className={`${styles.colorBlue} ${styles.h2Custom} ${ebGaramond.className} font-bold leading-[1] mb-2`}>Angelo <br/> Baudo</h2>
                        <div className={`text-gray-900 ${ibmPlexSans.className} leading-7`}>
                            <h3 className="font-bold text-[1.1rem]">Fondatore e Amministratore</h3>
                            <ul className=" font-[500]">
                                <li>28 anni</li>
                                <li>Project Manager</li>
                                <li>Laurea in Architettura</li>
                            </ul>
                        </div>
                    </div>
                    <Image src={angelo} width={100} height={100} className="w-[10rem] sm:w-[14rem]" alt="location"></Image>
                </div>

                <div className="flex justify-start p-10 lg:justify-start items-center gap-8  w-full">
                    <Image src={paolo} width={100} height={100} className="w-[10rem] sm:w-[14rem]" alt="location"></Image>
                    <div className="text-left">
                        <h2 className={`${styles.colorBlue} ${styles.h2Custom} ${ebGaramond.className} font-bold leading-[1] mb-2`}>Paolo <br/> Mare</h2>
                        <div className={`text-gray-900 ${ibmPlexSans.className} leading-7`}>
                            <h3 className="font-bold text-[1.1rem]">Co-Fondatore</h3>
                            <ul className=" font-[500]">
                                <li>28 anni</li>
                                <li>Consulente Marketing</li>
                                <li>Market & Data Analyst</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <p className={`${ibmPlexSans.className} text-gray-900 text-center text-[20px] px-[20vw] leading-7 mt-20`}>
                La nostra start-up si occupa di agevolare, velocizzare, ottimizzare il vostro investimento nel villaggio di Troina, attraverso assistenza e consulenza in italiano, inglese, francese, spagnolo, giapponese e tedesco <br />dal primo contatto fino alla consegna della chiave dopo i lavori di ristrutturazione.
                <br/><span className=" font-bold">Investire con BM significa velocizzare il tuo processo di acquisto e riqualificazione.</span>
            </p>

            <div className="flex flex-wrap lg:grid lg:grid-cols-2 w-full mt-40 pb-40">
                <div>
                    <div  className={"flex justify-center relative mb-6" + (overed === 0 ? " z-10" : "")}>
                        <div onMouseOver={() => handleOverOurTeam(0)} onMouseLeave={handleLeaveOurTeam} className={`${styles.btnOurTeam} relative flex justify-center items-center`}>
                            <Image src={objective} width={100} height={100} className="w-12 inline mr-2" alt="location"></Image>
                            <h1 className={`${styles.colorBlue} ${styles.h3Custom} ${ibmPlexSans.className} font-semibold inline`}>Missione</h1>
                            {overed === 0 
                            ?
                            <div className={`text-gray-900 absolute left-[90%] top-0 w-[20rem] py-4 pe-4 rounded-e-xl rounded-es-xl pl-20 ${styles.bgWhite}`}>
                                <p className={`${styles.opacityAnim}`}>
                                    Consulenza ai <b>Comuni</b> aderenti al progetto Case a 1€ per valorizzare i propri centri storici.
                                    <br/> <br/> Consulenza ai privati che aderendo al progetto Case a 1€ vogliono investire nelle aree marginali italiane.
                                </p>
                                
                            </div>
                            : <></>
                            }
                        </div>

                    </div>

                    <div className={"flex justify-center ml-12 mb-6 relative" + (overed === 1 ? " z-10" : "")}>
                        <div onMouseOver={() => handleOverOurTeam(1)} onMouseLeave={handleLeaveOurTeam} className={`${styles.btnOurTeam} relative flex justify-center items-center`}>
                            <Image src={vision} width={100} height={100} className="w-12 inline mr-2" alt="location"></Image>
                            <h1 className={`${styles.colorBlue} ${styles.h3Custom} ${ibmPlexSans.className} font-semibold inline`}>Visione</h1>
                            {overed === 1
                            ?
                            <div className={`text-gray-900 absolute left-[90%] top-0 w-[20rem] py-4 pe-4 h-full rounded-e-xl pl-20 ${styles.bgWhite} `}>
                                <p className={`${styles.opacityAnim}`}><b>Rigenerazione sostenibile</b> dei Centri Storici Italiani.</p>
                            </div>
                            : <></>
                            }
                        </div>

                    </div>

                    <div className={"flex justify-center relative ml-24" + (overed === 2 ? " z-10" : "")}>                        
                        <div onMouseOver={() => handleOverOurTeam(2)} onMouseLeave={handleLeaveOurTeam} className={`${styles.btnOurTeam} relative flex justify-center items-center`}>
                            <Image src={etica} width={100} height={100} className="w-12 inline mr-2" alt="location"></Image>
                            <h1 className={`${styles.colorBlue} ${styles.h3Custom} ${ibmPlexSans.className} font-semibold inline`}>Etica</h1>
                            {overed === 2 
                            ? 
                            <div className={`text-gray-900 absolute left-[90%] top-0 w-[20rem] py-1 lg:py-2 pe-4 h-full rounded-e-xl pl-20 ${styles.bgWhite}`}>
                                <p className={`${styles.opacityAnim}`}>Creare un’economia circolare efficiente, corretta e in buona salute nella <b>comunità locale</b>.</p>
                            </div> 
                            : <></>
                            }
                        </div>
                    </div>
                </div>
                <p className={`${ebGaramond.className} italic font-semibold ${styles.colorBlue} ${styles.h3Custom} pe-72`}>
                    “Sono stati accesi i riflettori sui centri storici. <br />A noi, giovani generazioni, tocca accendere la luce in ogni casa”
                </p>
            </div>
            <div className="rotate-180">
                <EndSection styles={styles}/>   
            </div>
        </>
     );
}
 
export default OurTeam;