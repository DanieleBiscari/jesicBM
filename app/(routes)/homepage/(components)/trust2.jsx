import Button1 from "@/app/ui/components/button1";
import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";
import Image from "next/image";
import graphBar2 from "@/public/img/graphBar2.svg"

const Trust2 = ({styles}) => {
    return ( 
        <div className="grid grid-cols-2 h-full">
            <div className="flex justify-center items-center pl-[10vw] flex-col gap-12">
                <Image src={graphBar2} width={100} height={100} className="object-contain w-[100%] h-[36rem]" alt="life"></Image>
                <Button1 name={"SCOPRI DI PIÙ →"} textColor={"#13637E"} textSize={"1rem"} borderColor={""} backgroundColor={"#E6E4D9"}/>
            </div>
            <div className="flex flex-col justify-center items-center gap-20">
                <div className={`w-[30rem] ${styles.btnOurTrust1}`}>
                    <p className={`${ibmPlexSans.className} text-[1.2rem] font-normal opacity-90`}>Ipotesi di investimento</p>
                    <h2 className={`${ebGaramond.className} text-[2.5rem] font-semibold`}>€100’000 comprando una Casa ad 1€ da <br />essere restaurata</h2>
                </div>
                <div className="w-[30rem]">
                    <h1 className={`${ibmPlexSans.className} text-[3rem] font-bold leading-[1.1] mb-4`}>BM Attrazione <br />Investimenti</h1>
                    <ul className={`${ibmPlexSans.className} ${styles.bulletLine} text-[1.5rem] font-normal leading-[1.5] pl-6`}>
                        <li><b>Documentazione</b> & burocrazia</li>
                        <li><b>Contatto</b> con l’investitore</li>
                        <li className="pr-20"><b>Assistenza & consulenza</b> <br/>con gli artigiani e per il materiale necessario, prima e fino alla fine dei lavori.</li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Trust2;