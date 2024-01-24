import Image from "next/image";
import europa from "@/public/img/europe.png";
import italia from "@/public/img/italia.svg";
import sicilia from "@/public/img/sicilia.svg";
import troina from "@/public/img/troina.svg";


const BannerLanding = ( { fromWhat } ) => {

    return ( 
        <div className={`flex flex-wrap justify-evenly ${fromWhat === "landingPage" ? " gap-4" : "gap-16" }`}>
                <Image
                src={europa}
                alt="bottom image 1"
                width={110}
                className={`w-28 ${fromWhat === "landingPage" ? " " : " hidden md:block" }`}
                />
                <Image
                src={italia}
                alt="bottom image 2"
                width={51}
                className={`w-14 ${fromWhat === "landingPage" ? " " : " hidden md:block" }`}
                />
                <Image
                src={sicilia}
                alt="bottom image 3"
                width={42}
                className={`w-12 ${fromWhat === "landingPage" ? " " : " hidden md:block" }`}
                />
                <Image
                src={troina}
                alt="bottom image 4"
                width={38}
                className="w-12"
                />
        </div>
     );
}
 
export default BannerLanding;