import Button1 from "@/app/ui/components/button1";
import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";

const ActionPlan = () => {
  let counter = 0;
  const actionPlan = [
    {
      name: "Primo Contatto",
      service: [
        {
          buttonName: "1. Più informazioni",
          text: "Mettiamoci in contatto, maggiorni informazioni ti verranno fornite per aiutarti al meglio.",
        },
        {
          buttonName: "2. Selezione",
          text: "Vi aiuteremo per comprendere tutti i dettagli del progetto per un investimento consapevole.",
        },
      ],
    },
    {
      name: "Comprensione & decisione",
      service: [
        {
          buttonName: "3. Conoscenza",
          text: "Forniremo tutti i dettagli delle proprietà valutate, costi e tempistiche.",
        },
        {
          buttonName: "4. Scelta",
          text: "Aiuteremo l'acquirente nella decisione della proprietà migliore in base alle sue necessità.",
        },
        {
          buttonName: "5. Investimento",
          text: "Vi aiuteremo per la documentazione, nella scelta delle maestranze e dei materiali.",
        },
      ],
    },
    {
      name: "attuazione del progetto",
      service: [
        {
          buttonName: "6. Lavori",
          text: "Seguiremo per voi personalmente il processo di restauro dall’inizio alla fine.",
        },
        {
          buttonName: "7. Gira la chiave",
          text: "Godetevi la vostra nuova casa a Troina!",
        },
      ],
    },
  ];

  return (
    <div>
      <h1
        className={`${ebGaramond.className} mb-8 ml-4 leading-[100%] text-gialloTro [font-size:_clamp(1.3rem,3.5vw,3.5rem)]`}
      >
        <b className=" font-bold">Action plan</b> <br /> Con BM
      </h1>
      <div className="flex flex-col gap-4 md:ml-20">
          {actionPlan.map((plan) => {
            return (
              <div key={plan.name}>
                <div className="flex flex-col md:flex-row items-center text-slate-950">
                  <h1 className="w-40">{plan.name}</h1>
                  <div className="flex flex-col gap-2 ">
                    {plan.service.map((service) => {
                      counter++;
                      return (
                        <div key={service.buttonName} className={`flex items-center gap-4`} style={{marginLeft : `${counter*10*3.5}px`}}
                        // style={(window.innerWidth >= 768) ? {marginLeft : `${counter*10*3.5}px`} : { marginLeft : `2rem`}}
                        >
                          <div>
                              <Button1
                                name={service.buttonName}
                                textColor={"#E6E4D9"}
                                textSize={"1rem"}
                                borderColor={""}
                                backgroundColor={"#13637E"}
                              ></Button1>
                          </div>
                          <p className="w-1/2">{service.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="h-[2px] w-full rounded-lg bg-slate-200"></div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ActionPlan;
