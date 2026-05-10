import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, DM_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import AmbientBackground from "@/components/ambient-background";
import { CustomCursor } from "@/components/CustomCursor";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "700"],
  style: ["italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Girish — AI Agent Developer",
  description:
    "I build AI agents that automate the complex. Training for Ironman 70.3. Second year at BITS Pilani Goa. Building in public.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} ${dmMono.variable} ${bebas.variable} antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0E0E0D] text-[#F1EFE8] font-[var(--font-body)]">
        <AmbientBackground />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
