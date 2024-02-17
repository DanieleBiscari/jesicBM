import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";
import Button1 from "@/app/ui/components/button1";
import Image from "next/image";
import serviceTree1 from "@/public/img/serviceTree1.svg";
import serviceTree2 from "@/public/img/serviceTree2.svg";

const ServiceWhyUs = ({ styles }) => {
  return (
    <div className="flex h-full columns-2 flex-col px-4 py-24 lg:flex-row gap-20">
      <div className="mr-auto flex lg:w-1/2 flex-col items-center">
        <div>
          <h1
            className={`${ibmPlexSans.className} text-bluTro mb-6 font-[700] opacity-50 [font-size:_clamp(1.2rem,2vw,2rem)]`}
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

      <div className="text-bluTro ml-auto flex lg:w-1/2 flex-col items-center">
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

            <div className="flex w-[100%] lg:w-[60%] flex-col gap-8 [font-size:_clamp(.9rem,1.3vw,1.3rem)] px-4">
              <p>
                Il nostro obiettivo è alleggerire il carico dei nostri clienti,
                consentendo loro di concentrarsi sulle decisioni di investimento
                mentre ci occupiamo della ricerca e della selezione delle figure
                professionali necessarie per le fasi di{" "}
                <b>
                  sopralluogo, progettazione, recupero e restauro dell'immobile.
                </b>
              </p>
              <p>
                Collaboriamo con un team di esperti altamente qualificati nel
                settore immobiliare, tra cui architetti, ingegneri e
                professionisti del restauro, che sono stati accuratamente
                selezionati per la loro esperienza e competenza.
              </p>
              <p>
                Puoi affidarti a noi per gestire le sfide tecniche e
                amministrative legate all'investimento immobiliare. La nostra
                profonda conoscenza del settore e la nostra esperienza ci
                consentono di semplificare il processo, fornendo un servizio
                completo e personalizzato.
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
