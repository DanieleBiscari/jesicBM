import Button1 from "@/app/ui/components/button1";
import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";
import Image from "next/image";
import backgroundActionPlan from "@/public/img/backgroundActionPlan.png";

const ActionPlan = ({ styles, windowWidth }) => {
  let counter = 0;
  let counterOuter = 0;
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
    <div className="h-full w-full relative">
      <Image
        src={backgroundActionPlan}
        alt="Immagine di background Traina"
        className="absolute right-0 z-0 hidden h-full aspect-auto lg:block"
      ></Image>
      <h1
        className={`${ebGaramond.className} relative z-10 mb-8 text-center leading-[100%] text-gialloTro [font-size:_clamp(2.5rem,3.5vw,3.5rem)] md:ml-20 md:text-start`}
      >
        <b className=" font-bold">Action plan</b> <br /> Con BM
      </h1>
      <div className="relative lg:p-4 z-30 flex flex-col gap-4 rounded-e-[24px] bg-[#E6E4D9] md:ml-20 lg:w-[80%] xl:w-[70%]">
        {actionPlan.map((plan) => {
          counterOuter++;
          return (
            <div key={plan.name}>
              <div className="flex flex-col items-center text-slate-950 md:flex-row">
                <h1
                  className={`${ebGaramond.className} z-10 mb-8 text-center font-[600] text-[#13637E] [font-size:_clamp(1.3rem,1.5vw,1.5rem)] md:mb-0 md:w-[20rem] md:text-start`}
                >
                  {plan.name.toUpperCase()}
                </h1>
                <div className="flex w-full flex-col gap-8 md:ml-[-5rem]">
                  {plan.service.map((service) => {
                    counter++;
                    return (
                      <div
                        key={service.buttonName}
                        className={`flex flex-col gap-4 md:flex-row md:items-center`}
                      >
                        <div
                          className="z-10 mx-auto flex w-[20rem] justify-center md:mx-0 md:justify-end"
                          style={
                            windowWidth >= 1024 && counter === 5
                              ? {
                                  marginLeft: `${counter * 30}px`,
                                  opacity: `${counterOuter === 1 ? counterOuter / 1.5 : counterOuter / 2.5}`,
                                }
                              : windowWidth >= 1024 && counter === 6
                                ? {
                                    marginLeft: `${counter * 25}px`,
                                    opacity: `${counterOuter === 1 ? counterOuter / 1.5 : counterOuter / 2.5}`,
                                  }
                                : windowWidth >= 1024 && counter === 7
                                  ? {
                                      marginLeft: `${counter * 35}px`,
                                      opacity: `${counterOuter === 1 ? counterOuter / 1.5 : counterOuter / 2.5}`,
                                    }
                                  : windowWidth >= 1024 && counterOuter === 2
                                    ? {
                                        marginLeft: `${counterOuter * 30}px`,
                                        opacity: `${counterOuter === 1 ? counterOuter / 1.5 : counterOuter / 2.5}`,
                                      }
                                    : {
                                        opacity: `${counterOuter === 1 ? counterOuter / 1.5 : counterOuter / 2.5}`,
                                      }
                          }
                        >
                          <Button1
                            name={service.buttonName}
                            textColor={"#E6E4D9"}
                            borderColor={""}
                            backgroundColor={"#13637E"}
                            type={"actionPlan"}
                          ></Button1>
                        </div>
                        <p className="z-10 mb-8 w-full px-8 md:mb-0 md:ml-0 md:w-1/2 md:px-4 lg:w-1/3">
                          {service.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              {counterOuter === 3 ? (
                <></>
              ) : (
                <div className="z-10 mx-auto my-4 h-[2px] w-[90%] rounded-lg bg-[#D9D9D9]"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActionPlan;
