import styles from "@/app/styles/contacts.module.css";
import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";
import Button1 from "@/app/ui/components/button1";

export default function Page() {
  return (
    <div
      className={`${styles.bgMain} flex min-h-screen w-full flex-col items-center justify-center pt-28 md:flex-row md:pt-0`}
    >
      <div
        className={`flex flex-col items-center justify-center gap-10 ${ibmPlexSans.className} pb-20 md:pb-0`}
      >
        <h1 className="w-full px-12 [font-size:_clamp(2.2rem,2.8vw,2.8rem)] sm:w-1/2 md:px-0">
          Servizi per la{" "}
          <span className=" text-gialloTro">Pubblica Amministrazione</span>
        </h1>
        <Button1
          name={"Contattaci"}
          textColor={"#E6E4D9"}
          textSize={"1rem"}
          borderColor={"#E6E4D9"}
          backgroundColor={""}
          url={"./servicepage"}
          className={"w-[60%]"}
        />
      </div>

      <div className="flex flex-col items-center italic ">
        <ul className="w-1/2 list-disc [font-size:_clamp(1.5rem,1.8vw,1.8rem)]">
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
