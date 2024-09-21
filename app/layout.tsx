import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/Footer";
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import ModalSearch from "./components/search/ModalSearch";

const dmSans = DM_Sans({ subsets: ["latin"] });

const magnatBold = localFont({
  src: "./fonts/MagnatBold.woff",
  variable: "--font-magnatBold",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Watchmilo",
  description: "Free streaming website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} ${magnatBold.variable} font-medium antialiased `}
      >
        <Navbar />
        <div className="min-h-screen">
          {children}
        </div>
        <Footer
          lightSize={4}
          gap={1}
          text="Created by faruqi"
          font="default"
          updateInterval={1000}
        />
        <ModalSearch />
      </body>
    </html >
  );
}
