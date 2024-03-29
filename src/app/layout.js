import { Poppins } from "next/font/google"; // Change import to Poppins
import "./globals.css";
import Provider from "../components/provider.jsx";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
}); // Change variable name to poppins

export const metadata = {
  title: "Moustafa El-Sayed | Frontend and Mobile App Developer | Portfloi",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body className={poppins.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
