import type { Metadata } from "next";
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import theme from "./theme";
import "./globals.css";
import { Roboto, Josefin_Sans, Montserrat } from "next/font/google";
import HeaderComponent from "@/components/auth-header";

export const metadata: Metadata = {
  title: "Next App Mantine Tailwind Template",
  description: "Next App Mantine Tailwind Template",
};

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const josefin_sans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      {...mantineHtmlProps}
      className={`${josefin_sans.className} ${roboto.className} ${montserrat.className} antialiased`}
    >
      <head>
        <ColorSchemeScript />
      </head>
      <body className="antialiased">
        <MantineProvider theme={theme}>
          <AppShell header={{ height: 90 }}>
            <AppShellHeader>
              <HeaderComponent />
            </AppShellHeader>
            <AppShellMain>{children}</AppShellMain>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
