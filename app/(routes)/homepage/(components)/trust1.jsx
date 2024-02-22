import Button1 from "@/app/ui/components/button1";
import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";
import Image from "next/image";
import graphBar from "@/public/img/graphBar.svg"

const Trust1 = ({styles}) => {
    return ( 
        <div className="flex flex-col gap-20 lg:gap-0 lg:grid lg:grid-cols-2 h-full">
            <div className="flex flex-col justify-center items-center gap-20">
                <div className={`w-[70%] lg:w-[30rem] ${styles.btnOurTrust1}`}>
                    <p className={`${ibmPlexSans.className} text-[1.2rem] font-normal opacity-90`}>Ipotesi di investimento</p>
                    <h2 className={`${ebGaramond.className} [font-size:_clamp(2rem,2.5vw,2.5rem)] font-semibold`}>100’000€ comprando una casa low-cost da essere restaurata</h2>
                </div>
                <div className="flex justify-center flex-col px-4 lg:w-[30rem]">
                    <h1 className={`${ibmPlexSans.className} [font-size:_clamp(2.5rem,3.5vw,3.5rem)] font-bold leading-[1.1] mb-4`}>BM Attrazione <br />Investimenti</h1>
                    <ul className={`${ibmPlexSans.className} ${styles.bulletLine} [font-size:_clamp(1.5rem,1.8vw,1.8rem)] font-normal leading-[1.5] pl-6`}>
                        <li className="list-disc"><b>Documentazione</b> & burocrazia</li>
                        <li className="list-disc"><b>Contatto</b> con l’investitore</li>
                        <li className="pr-0 sm:pr-[50%] lg:pr-20 list-disc"><b>Assistenza & consulenza</b> <br/>con gli artigiani e per il materiale necessario, prima e fino alla fine dei lavori.</li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center items-center px-8 flex-col gap-12">
                <Image src={graphBar} width={100} height={100} className="object-contain w-[100%] max-h-[36rem]" alt="life"></Image>
                <Button1 name={"SCOPRI DI PIÙ →"} textColor={"#13637E"} textSize={"1rem"} borderColor={""} backgroundColor={"#E6E4D9"} url={"./servicepage"}/>
            </div>
        </div>
     );
}
 
export default Trust1;