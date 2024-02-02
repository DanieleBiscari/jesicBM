import BannerLanding from "@/app/ui/components/bannerLanding";
import Image from "next/image";
import enhood from "@/public/img/enhood.svg";
import troinaSliced from "@/public/img/troinaSliced.png";
import { ebGaramond, ibmPlexSans } from "@/app/ui/fonts";
import styles from '@/app/styles/homepage.module.css';


const Presentation = () => {
    return (
        <div className="flex flex-col justify-around">
            <div className="flex justify-around items-center h-[30rem]">
                <div className="w-[80%] md:w-1/3">
                    <h1 className = {`${styles.colorBlue} ${ibmPlexSans.className} font-[600] ${styles.h1Custom} leading-none`} >La casa<br className="hidden md:block"/> per te a<br className="hidden md:block"/> <span className={`${styles.colorYellow} ${ebGaramond.className} ${styles.h1CustomTroina} italic leading-snug`}>Troina</span></h1>
                    <p className={`mb-14 ${styles.colorGray} ${ibmPlexSans.className} text-[1.3rem]`}>Lorem Ipsum Solor dit que Lorem Ipsum Solor dit que Lorem Ipsum Solor dit que Lorem Ipsum Solor dit que Lorem Ipsum Solor.</p>
                    <div className="flex justify-center md:justify-normal flex-wrap gap-3">
                        <a className={`${styles.btnHomepage} cursor-pointer rounded-xl  px-2 py-1 ${styles.colorWhite} ${styles.bgBlue}`}>1° CTA button</a>
                        <a className={`${styles.btnHomepage} cursor-pointer rounded-xl  px-2 py-1 ${styles.colorWhite} ${styles.bgBlue}`}>2° CTA button</a>
                    </div>
                </div>
                <Image
                    src={troinaSliced}
                    alt="immagine troina"
                    width={722}
                    height={531}
                    priority={true}
                    className="w-[35%] min-w-96 hidden md:block"
                />
            </div>


            <div className="flex h-20 gap-10 items-center justify-center">
                <BannerLanding fromWhat={"presentation"} />
                <span className="h-[80%] w-[1px] bg-gray-400 border-t-0"/>
                <Image
                        src={enhood}
                        alt="immagine enhood"
                        width={110}
                        className="w-24"
                    />
            </div>
        </div> 
     );
}
 
export default Presentation;