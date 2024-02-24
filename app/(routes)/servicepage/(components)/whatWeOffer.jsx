import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";
import ServiceModal from "@/app/ui/components/serviceModal";
import Image from "next/image";
import serviceImg1 from "@/public/img/serviceImg1.png";
import serviceImg2 from "@/public/img/serviceImg2.svg";
import serviceImg3 from "@/public/img/serviceImg3.png";
import serviceImg4 from "@/public/img/serviceImg4.png";
import whatWeOffer from "@/public/img/whatWeOffer.png";
import videoPlaceholder from "@/public/img/videoPlaceHolder.png";
import CardServiceInPresence from "./cardServiceInPresence";

const WhatWeOffer = ({ styles, clicked, setClicked }) => {
  function handleClick(name) {
    setClicked(name);
  }
  const services = [
    {
      title: "We Talk Service",
      price: 80,
      subtitle:
        "VIDEOCHIAMATA 45 minuti con un consulente e con un traduttore professionista",
      text: [
        "Insieme possiamo trovare il compromesso migliore e la soluzione adatta alle vostre esigenze. La qualità che dedichiamo ad ogni singolo nostro cliente è anche parte della cultura della nostra azienda.",
      ],
      image: serviceImg1,
    },
    {
      title: "Silver Service",
      price: 450,
      subtitle:
        "We Talk Service + Servizio fotografico & Piazzamento + Piano d'acquisto",
      text: [
        "Oltre a delle chiamate per comprendere le vostre esigenze e necessità, fugare eventuali dubbi,  condurremo delle analisi di fattibilità SWOT sulla vostra futura abitazione e vi proporremo una stima dei costi d'acquisto (spese notarili, agenzia immobiliare).",
      ],
      image: serviceImg2,
    },
    {
      title: "Golden Service",
      price: 850,
      subtitle: "Silver Service + VIDEO DEGLI INTERNI + PIANO D'INVESTIMENTO",
      text: [
        "Oltre a delle chiamate per conoscerci ed iniziare a lavorare per voi, contatteremo delle maestranze locali che forniranno stime per un'idea del costo del rinnovamento del fabbricato più accurata.",
        "Condurremo delle riprese approfondite di quella che sarà la vostra futura abitazione, per valutare meglio le condizioni dell'immobile.",
      ],
      image: serviceImg3,
    },
    {
      title: "Platinum service",
      price: "30*m2",
      subtitle:
        "DISEGNI DI PROGETTAZIONE, PROPOSTA DI PROGETTO & STIMA DEI COSTI",
      text: [
        "Studieremo come applicare il bonus PNRR al momento vigente in Italia per il recupero del costruito.",
        "Contatteremo delle maestranze locali che forniranno stime per un'idea del costo del rinnovamento del fabbricato più accurata.",
      ],
      image: serviceImg4,
    },
  ];
  const inPresenceServices = {
    title: "Tour delle case ad 1€",
    subtitle: "e non solo...",
    text: ["Traduttore, Kit di pronto soccorso,", "Consulenza & assistenza"],
    buttonsContent: [
      {
        price: 200,
        dayPeriod: "MEZZA GIORNATA",
        hour: 4,
        howManyHouse: 4,
        importantButton: false,
      },

      {
        price: 325,
        dayPeriod: "TUTTO IL GIORNO",
        hour: 7,
        howManyHouse: 7,
        importantButton: true,
      },
    ],
    footerText: "*fino a 4 persone, con €30 euro in più per ogni altra persona",
  };

  return (
    <div>
      <div id="remoteService" className="flex h-full w-full columns-2 gap-8 px-12 pb-10 pt-40 justify-center">
        <div className="h-full lg:w-[60%]">
          <h1
            className={`${ebGaramond.className} ml-4 leading-[100%] text-gialloTro [font-size:_clamp(1.5rem,3.5vw,3.5rem)] mb-8`}
          >
            <b className=" font-bold">I nostri servizi da remoto</b> <br /> per
            investire a Troina
          </h1>
          <div className="grid h-[80%] w-full items-center justify-items-center gap-4 md:grid-cols-2 lg:gap-8">
            {services.map((service) => {
              return (
                <ServiceModal
                  styles={styles}
                  key={service.title}
                  title={service.title}
                  price={service.price}
                  subtitle={service.subtitle}
                  text={service.text}
                  image={service.image}
                  handleClick={handleClick}
                  clicked={clicked}
                  setClicked={setClicked}
                />
              );
            })}
          </div>
        </div>

        <div className="hidden w-[30%] justify-center lg:flex">
          <Image
            src={whatWeOffer}
            alt="what we offer image"
            height={620}
            width={1200}
            className="object-cover mix-blend-screen rounded-3xl"
          ></Image>
        </div>
      </div>

      <div id="presenceService" className="flex w-full columns-2 gap-8 px-12 py-36">
        <div className="hidden w-[40%] items-center justify-center lg:flex">
          {/* cancellami */}
          <div>questo dovrà essere un video -{"->"}</div>
          {/* cancellami */}
          <Image
            src={videoPlaceholder}
            alt="what we offer image"
            height={620}
            width={1200}
            className="aspect-square w-[80%]"
          ></Image>
        </div>

        <div className="flex w-full flex-col  lg:w-[60%]">
          <h1
            className={`${ebGaramond.className} ml-4 leading-[100%] text-gialloTro [font-size:_clamp(1.5rem,3.5vw,3.5rem)]`}
          >
            <b className=" font-bold">I nostri servizi in presenza</b> <br />
            per investire a Troina
          </h1>
          <div className="">
            <CardServiceInPresence
              styles={styles}
              title={inPresenceServices.title}
              buttonsContent={inPresenceServices.buttonsContent}
              subtitle={inPresenceServices.subtitle}
              text={inPresenceServices.text}
              footerText={inPresenceServices.footerText}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
