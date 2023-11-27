import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/app/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "App weather",
  description:
    "Weather keeps you informed about conditions including temperature, rain, snow, and wind. Check out the forecast by the hour for the next 6 days.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
