import { inter } from '@/app/ui/fonts'
import './globals.css'

export const metadata = {
  title: 'BM Attrazione Investimenti',
  description: 'Progetto BM Attrazione Investimenti',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
