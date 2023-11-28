import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/app/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ALX Weather App",
  description: "made by Badr and Jaouad",
};

export default function RootLayout({ children }) {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    localStorage.setItem("username", "Anisha");
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
