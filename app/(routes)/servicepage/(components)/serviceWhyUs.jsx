import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";
import Button1 from "@/app/ui/components/button1";
import Image from "next/image";
import serviceTree1 from "@/public/img/serviceTree1.svg";
import serviceTree2 from "@/public/img/serviceTree2.svg";
import useLang from "@/app/hooks/useLang";

const ServiceWhyUs = ({ styles }) => {
  const {lang} = useLang()

  return (
    <div className="flex h-full columns-2 flex-col gap-20 px-4 py-24 lg:flex-row">
      <div className="mr-auto flex flex-col items-center lg:w-1/2">
        <div>
          <h1
            className={`${ibmPlexSans.className} mb-6 font-[700] text-bluTro opacity-50 [font-size:_clamp(1.2rem,2vw,2rem)]`}
          >
           {lang?.services.senza}
          </h1>
          <Image
            src={serviceTree1}
            width={390}
            height={743}
            alt="Immagine di albero con elementi di servizi offerti"
            className="w-full lg:w-[28.8rem]"
          />
        </div>
      </div>

      <div className="ml-auto flex flex-col items-center text-bluTro lg:w-1/2">
        <div>
          <h1
            className={`${ibmPlexSans.className} mb-6 font-[700] [font-size:_clamp(1.2rem,2vw,2rem)]`}
          >
            {lang?.services.con}
          </h1>
          <div className="flex gap-14">
            <Image
              src={serviceTree2}
              width={58}
              height={743}
              alt="Immagine di albero con elementi di servizi offerti semplificato"
              className="h-[743px]"
            ></Image>

            <div className="flex w-[100%] flex-col gap-8 px-4 [font-size:_clamp(.9rem,1.3vw,1.3rem)] lg:w-[60%]">
              <p>
              {lang?.services.p1}{" "}
                <b>{lang?.services.p2}</b>
                {lang?.services.p3}{" "}
                <b>{lang?.services.p4}</b>{lang?.services.p5} <b>{lang?.services.p6}</b>{lang?.services.p7}{" "}
                <b>{lang?.services.p8}{" "}</b>{lang?.services.p9}
              </p>
              <p>
              {lang?.services.p10} <b>{lang?.services.p11} </b>{lang?.services.p12}
              </p>
              <p>
                <b>
                {lang?.services.p13}
                </b>
              </p>
              <p>
                <b>
                {lang?.services.p14}
                </b>
              </p>
              <div className="flex">
                <Button1
                  name={lang?.services.button}
                  textColor={"#E6E4D9"}
                  textSize={"1rem"}
                  borderColor={""}
                  backgroundColor={"#13637E"}
                  url={"/contacts"}
                ></Button1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceWhyUs;
