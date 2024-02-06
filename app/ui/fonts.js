import { Inter, IBM_Plex_Sans, Roboto, EB_Garamond } from 'next/font/google';
 
export const ibmPlexSans = IBM_Plex_Sans({ 
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700"]
})

export const inter = Inter({subsets: ['latin']})

export const roboto = Roboto({
    subsets: ['latin'],
    weight: ["100", "300", "400", "500", "700", "900"]
})

export const ebGaramond = EB_Garamond({
    subsets: ['latin'],
    style:["normal", "italic"],
    weight: ["400", "500", "600", "700", "800"]
})
