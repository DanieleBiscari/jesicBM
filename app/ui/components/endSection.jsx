import { ebGaramond, ibmPlexSans, roboto } from "@/app/ui/fonts";


const EndSection = ({styles}) => {
    const footerDivWidth = 321
    const margin = 30
    const numeri = Array.from({length: 6}, (_, i) => (margin + footerDivWidth) * i + "px");
    // const numeri = ["0", (margin+footerDivWidth)+"px", (margin+footerDivWidth)*2+"px"];

    return ( 
        <div className={`${styles.footerWhyUs} [height:_clamp(2rem,3vw,3rem)] ${ibmPlexSans.className} pt-1 font [font-size:_clamp(1rem,1.5vw,1.5rem)] text-center relative`}>
            {numeri.map((numero, id) =>(
                <div key={id} className={`${styles.animationInfiniteScroll} absolute h-full text-start w-[340px]`} style={{left: numero}}>• BM Attrazione Investimenti</div>
            ))} 
        </div>
     );
}
 
export default EndSection;