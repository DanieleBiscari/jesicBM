import styles from "@/app/styles/contacts.module.css";
import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";
import Button1 from "@/app/ui/components/button1";

export default function Page() {
  return (
    <div
      className={`${styles.bgMain} flex w-full flex-col justify-center md:flex-row h-screen items-center pt-28 md:pt-0`}
    >
      <div
        className={`flex flex-col items-center gap-10 ${ibmPlexSans.className} pb-20`}
      >
        <h1 className="w-1/2 [font-size:_clamp(1.5rem,2.6vw,2.6rem)]">
          Servizi per la <span>Pubblica Amministrazione</span>
        </h1>
        <Button1
          name={"Contattaci"}
          textColor={"#13637E"}
          textSize={"1rem"}
          borderColor={""}
          backgroundColor={"#E6E4D9"}
          url={"./servicepage"}
          className={"w-[80%]"}
        />
      </div>

      <div className="flex flex-col items-center italic ">
        <ul className="w-1/2 list-disc [font-size:_clamp(1.5rem,2vw,2rem)]">
          <li>Gestione del progetto</li>
          <li>Modulistica</li>
          <li>Analisi dati</li>
          <li>Reportistica</li>
          <li>
            Community Consulenza di marketing (relativa al progetto“Case a 1 €”)
          </li>
          <li>Gestione Sito-vetrina Turistici-immobiliari</li>
        </ul>
      </div>
    </div>
  );
}
