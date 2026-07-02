import "./globals.css";
import Providers from "../Components/Providers";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export const metadata = {
  title: "Sixtus Nwaogu - Software Engineer",
  description: "Sixtus Nwaogu - Software Engineer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-full bg-[var(--background-color)] text-[var(--text-color)] transition-colors duration-300">
        <Providers>
          <div className="w-full min-h-screen grid grid-cols-1 grid-rows-[70px_1fr_auto] [grid-template-areas:'Header'_'Main'_'Footer']">
            <div className="[grid-area:Header] sticky top-0 z-50">
              <Header />
            </div>
            <main className="[grid-area:Main] overflow-hidden w-full text-[var(--text-color)]">
              {children}
            </main>
            <div className="[grid-area:Footer]">
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
