import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

import "./style.css";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import BottomNav from "../_components/BottomNav";

export const metadata: Metadata = {
  title: {
    template: "%s - Poco Restaurant",
    default: "Home - Poco Restaurant",
  },
  description:
    "Poco Restaurant focuses on organic cuisine with a menu featuring ingredients. Provides location and reservation details, and offers information on events and catering services. Background information on the restaurant's mission and updates are also available.",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  return (
    <html lang={locale}>
      <body className={`${roboto.className} m-0`}>
        <Header />
        <main>
          <div className="relative">
            <div id="overlay"></div>
            {children}
          </div>
        </main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
