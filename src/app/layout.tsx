import { ReactNode } from "react";
import type { Metadata } from "next";
import { Encode_Sans } from "next/font/google";
import "@/assets/styles/globals.scss";
import { Outlet } from "@/components/core/Outlet";
import { setDefaultOptions } from "date-fns";
import { enGB } from "date-fns/locale";

setDefaultOptions({ locale: enGB, weekStartsOn: 1 });

const font = Encode_Sans({
  subsets: ["latin"],
  fallback: ["-apple-system", "BlinkMacSystemFont", "Helvetica", "sans-serif"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CoolPlanet - Front-end exercise",
  description: "CoolPlanet - Front-end exercise | Dmytro Lukachyna",
};

export interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Outlet>{children}</Outlet>
      </body>
    </html>
  );
}
