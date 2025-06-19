import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Fotter from "@/components/Fotter";
import Sessionwraper from "@/components/Sessionwrapper";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Encourage Me: Push me forward",
  description: "It is a simple app that encourages me to take action.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Sessionwraper>
        <body
          className="relative min-h-screen antialiased"
        >
          <Navbar />
          <div className="absolute inset-0 -z-10   items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] ">
          </div>

          {children}

          <Fotter />
        </body>
      </Sessionwraper>
    </html>
  );
}
