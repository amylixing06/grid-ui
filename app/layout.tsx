/* eslint-disable react-refresh/only-export-components */
import { Metadata } from "next";
// import Header from "./_components/Header/Header";
import { SettingsProvider } from "./_context/SettingsContext";
import "./global.scss";
import StoreProvider from "./storeProvider";
import { StagewiseToolbar } from "@stagewise/toolbar-next";

export const metadata: Metadata = {
   title: "Flexbox Labs",
   description: "A visual tool for experimenting with flexbox layouts",
};

interface RootLayoutProps {
   children: React.ReactNode;
}

const stagewiseConfig = {
   plugins: []
};

export default function RootLayout({ children }: RootLayoutProps) {
   return (
      <html lang="en">
         <body>
            {/* <Header /> */}
            {process.env.NODE_ENV === "development" && (
               <StagewiseToolbar config={stagewiseConfig} />
            )}
            <SettingsProvider>
               <StoreProvider>{children}</StoreProvider>
            </SettingsProvider>
         </body>
      </html>
   );
}
