import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

import "../globals.css";
import Header from "../_components/_layout/Header";
import Footer from "../_components/_layout/Footer";
import BottomNav from "../_components/_layout/bottomNav";

export const metadata: Metadata = {
  title: {
    template: "%s - Poco Restaurant",
    default: "Home - Poco Restaurant",
  },
  description:
    "Poco Restaurant focuses on organic cuisine with a menu featuring ingredients. Provides location and reservation details, and offers information on events and catering services. Background information on the restaurant's mission and updates are also available.",
};

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
      <body className={`${roboto.className} m-0`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>
            <div className="relative">
              <div id="overlay"></div>
              {children}
            </div>
          </main>
          <Footer />
          <BottomNav />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
