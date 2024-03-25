import { inter } from "@/app/ui/fonts";
import "./globals.css";
import { MyProvider } from "./contexts/context";

export const metadata = {
  title: "BM Attrazione Investimenti",
  description: "Progetto BM Attrazione Investimenti",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <MyProvider>{children}</MyProvider>
      </body>
    </html>
  );
}
