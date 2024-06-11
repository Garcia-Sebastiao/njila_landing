import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Header } from "@/components/layout/header/Header";
import "../globals.css";
import { Footer } from "@/components/layout/footer/Footer";

export const metadata: Metadata = {
  title: "NjilaBrand",
  description:
    "Na NjilaBrand estamos dedicados a construir um caminho de sucesso para a sua marca. ",
};

const inter = Inter({ subsets: ["latin"] });

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
