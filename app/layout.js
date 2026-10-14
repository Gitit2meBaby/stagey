import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollDownButton from "../components/ScrollDownButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Stagey",
  description: "Song list of bass tabs and chords",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
        <ScrollDownButton />
      </body>
    </html>
  );
}
