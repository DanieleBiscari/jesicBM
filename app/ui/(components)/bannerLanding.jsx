import Image from "next/image";
import europa from "@/public/img/europe.png";
import italia from "@/public/img/italia.png";
import sicilia from "@/public/img/sicilia.png";
import troina from "@/public/img/troina.png";

const BannerLanding = () => {
    return ( 
        <div className="flex justify-evenly gap-2">
                <Image
                src={europa}
                alt="bottom image 1"
                width={108}
                className="w-24"
                />
                <Image
                src={italia}
                alt="bottom image 2"
                width={51}
                className="w-14"
                />
                <Image
                src={sicilia}
                alt="bottom image 3"
                width={42}
                className="w-12"
                />
                <Image
                src={troina}
                alt="bottom image 4"
                width={38}
                className="w-10"
                />
        </div>
     );
}
 
export default BannerLanding;