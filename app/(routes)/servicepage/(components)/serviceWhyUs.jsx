import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";
import Button1 from "@/app/ui/components/button1";
import Image from "next/image";
import serviceTree1 from "@/public/img/serviceTree1.svg";
import serviceTree2 from "@/public/img/serviceTree2.svg";

const ServiceWhyUs = ({ styles }) => {
  return (
    <div className="flex h-full columns-2 flex-col gap-20 px-4 py-24 lg:flex-row">
      <div className="mr-auto flex flex-col items-center lg:w-1/2">
        <div>
          <h1
            className={`${ibmPlexSans.className} mb-6 font-[700] text-bluTro opacity-50 [font-size:_clamp(1.2rem,2vw,2rem)]`}
          >
            Senza BM Attrazione Investimenti
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
            Con BM Attrazione Investimenti
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
                Il nostro obiettivo è{" "}
                <b>alleggerire il carico burocratico dei nostri clienti</b>,
                consentendo loro di concentrarsi sulle decisioni di investimento
                con meno stress possibile, mentre noi ci occupiamo della{" "}
                <b>ricerca</b>, della <b>selezione</b>, e del{" "}
                <b>coordinamento delle figure professionali</b> necessarie per
                tutte le fasi: dal primo contatto con l’investitore, alla
                rigenerazione dell’immobile.
              </p>
              <p>
                Collaboriamo con <b>esperti qualificati</b> in diversi settori,
                tra cui: Agenti immobiliari, architetti, ingegneri, avvocati,
                studi notarili, imprese, e pubblica amministrazione.
              </p>
              <p>
                <b>
                  Puoi affidarti a noi per gestire le sfide tecniche
                  burocratiche legate al tuo investimento nel nostro territorio.
                </b>
              </p>
              <p>
                <b>
                  La nostra profonda conoscenza della comunità ci consentono di
                  semplificare il processo, fornendo un servizio completo e
                  personalizzato in base alle tue esigenze
                </b>
              </p>
              <div>
                <Button1
                  name={"scopri di più"}
                  textColor={"#E6E4D9"}
                  textSize={"1rem"}
                  borderColor={""}
                  backgroundColor={"#13637E"}
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
