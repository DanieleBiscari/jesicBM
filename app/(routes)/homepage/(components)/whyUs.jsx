import Button1 from "@/app/ui/components/button1";

const WhyUs = ({styles}) => {
    return ( 
        <>
        <div className="flex">
            <div className="flex">
                <div>circle1</div>
                <div>circle2</div>
                <div>circle3</div>
                <div>circle4</div>
                <div>circle5</div>
            </div>

            <div>
                <h1 style={{color: "#F5A400"}}>Perché investire a Troina?</h1>
                <p>
                    Troina è molto più di una semplice cittadina dove comprare casa. 
                    Il nostro obiettivo è riuscire a riqualificare sostenibilmente 
                    il suo centro storico e creare una comunità che possa abbracciare lo stile di vita del luogo, 
                    recuperandolo e portando nuovo valore ad una terra con molto potenziale.
                </p>
                <Button1 name={"SCOPRI DI PIÙ →"} textColor={"#F5A400"} textSize={"1rem"} borderColor={"#F5A400"}/>
            </div>
        </div>

        <div>• BM Attrazione Investimenti • BM Attrazione Investimenti • BM Attrazione Investimenti • BM Attrazione Investimenti</div>
        </>
     );
}
 
export default WhyUs;