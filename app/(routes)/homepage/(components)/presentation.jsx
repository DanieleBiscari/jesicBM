import BannerLanding from "@/app/ui/(components)/bannerLanding";
import Image from "next/image";
import enhood from "@/public/img/enhood.png";


const Presentation = () => {
    return ( 
        <div className="flex h-20 gap-3 items-center">
           <BannerLanding />
           <span className="h-[80%] w-[1px] bg-gray-400 border-t-0"/>
           <Image
                src={enhood}
                alt="bottom image 1"
                width={108}
                className="w-24 h-16"
            />
        </div>
     );
}
 
export default Presentation;