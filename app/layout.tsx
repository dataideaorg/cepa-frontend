import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CEPA - Center for Policy Analysis",
  description: "The Center for Policy Analysis (CEPA) is a leading think tank in Uganda focused on parliamentary democracy, governance, transparency, accountability, and human rights.",
  keywords: "policy analysis, Uganda, parliamentary democracy, governance, transparency, accountability, human rights, think tank",
  authors: [{ name: "Center for Policy Analysis" }],
  openGraph: {
    title: "CEPA - Center for Policy Analysis",
    description: "Leading think tank in Uganda focused on policy analysis and governance",
    type: "website",
    locale: "en_UG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
