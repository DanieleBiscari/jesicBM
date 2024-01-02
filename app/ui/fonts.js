import { Inter, IBM_Plex_Sans, Roboto } from 'next/font/google';
 
export const ibmPlexSans = IBM_Plex_Sans({ 
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700"]
})

export const inter = Inter({subsets: ['latin']})

export const roboto = Roboto({
    subsets: ['latin'],
    weight: ["100", "300", "400", "500", "700", "900"]
})
