import { Outfit } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Amal Joseph Varghese",
  description: "Researcher with 3+ years of experience in Oncology Imaging and Clinical Data Science. Skilled in Python, DICOM, AI modeling, and Data Science. Effective team player in hospital settings, dedicated to collaborative research and continuous learning.",
  openGraph: {
    title: 'Amal Joseph Varghese',
    description: 'Researcher with 3+ years of experience in Oncology Imaging and Clinical Data Science. Skilled in Python, DICOM, AI modeling, and Data Science. Effective team player in hospital settings, dedicated to collaborative research and continuous learning.',
    images: [
      {
        url: 'https://amaljova.github.io/logo_crazy.png',
        width: 800,
        height: 800,
        alt: 'Amal',
      },
    ],
    site_name: 'Your Site Name',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
