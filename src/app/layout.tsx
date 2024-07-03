import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientSetupContextProvider from "@/components/ClientSetupContextProvider";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Onyx Store Next.js Amplify Gen2 App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientSetupContextProvider>
          <NavBar className="p-2 bg-gray-800 text-white" />
          {children}
        </ClientSetupContextProvider>
      </body>
    </html>
  );
}
