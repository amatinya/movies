import { FC, PropsWithChildren } from "react";
import { Metadata } from "next";
import { Inter } from "next/font/google";

import { Navbar } from "./ui";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const generateMetadata = async (): Promise<Metadata> => {
    return { title: "TV Show", description: "Lorem ipsum :)" };
};

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
    return (
        <html lang="en" className={inter.className}>
            <body>
                <div className="flex min-h-screen w-full overflow-hidden pl-28">
                    <Navbar />
                    <main className="flex w-full flex-col overflow-hidden">{children}</main>
                </div>
            </body>
        </html>
    );
};

export default RootLayout;
