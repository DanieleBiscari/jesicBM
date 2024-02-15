import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";
import ServiceModal from "@/app/ui/components/serviceModal";
import Image from "next/image";
import serviceImg1 from "@/public/img/serviceImg1.png";
import serviceImg2 from "@/public/img/serviceImg2.svg";
import serviceImg3 from "@/public/img/serviceImg3.png";
import serviceImg4 from "@/public/img/serviceImg4.png";
import whatWeOffer from "@/public/img/whatWeOffer.png";

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

  return (
    <div className="flex h-full w-full columns-2 p-12 gap-8">
      <div className="flex w-full flex-col lg:w-[60%] justify-center">
        <h1 className={`${ebGaramond.className} text-gialloTro [font-size:_clamp(1.3rem,3.5vw,3.5rem)] leading-[100%] ml-4`}>
          <b className=" font-bold">I nostri servizi da remoto</b> <br /> per investire a Troina
        </h1>
        <div className="grid h-[80%] w-full items-center justify-items-center gap-4 md:grid-cols-2 lg:gap-0">
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
      <div className="hidden w-[40%] lg:flex justify-center">
        <Image src={whatWeOffer} alt="what we offer image" height={620} width={1200} className=" aspect-[9/16] object-contain mix-blend-screen"></Image>
      </div>
    </div>
  );
};

export default WhatWeOffer;
