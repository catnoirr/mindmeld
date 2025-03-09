import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/secondNav";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import LocalBusinessSchema from "./components/LocalBusinessSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://mindmeld.com'),
  title: {
    default: "Mindmeld Management Consulting Private Limited",
    template: "%s | Mindmeld Management Consulting"
  },
  description: "Mindmeld Management Consulting Private Limited - Professional management consulting services specializing in business strategy, digital transformation, and regulatory compliance. Located in Ludhiana, Punjab.",
  keywords: ["management consulting", "business strategy", "digital transformation", "regulatory compliance", "business consulting", "Mindmeld", "Ludhiana", "Punjab", "consulting services"],
  authors: [{ name: "Mindmeld Management Consulting Private Limited" }],
  creator: "Mindmeld Management Consulting Private Limited",
  publisher: "Mindmeld Management Consulting Private Limited",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Mindmeld Management Consulting Private Limited",
    description: "Professional management consulting services specializing in business strategy, digital transformation, and regulatory compliance. Located in Ludhiana, Punjab.",
    url: 'https://mindmeld.com',
    siteName: 'Mindmeld Management Consulting',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mindmeld Management Consulting',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://mindmeld.com'
  },
  other: {
    'contact:email': 'mindmeldplc@gmail.com',
    'contact:phone': '+919815081610',
    'contact:address': 'Old GT Road, Near Jalandhar Byepass, Opposite Old Sabzi Mandi, Ludhiana, Punjab, 141001'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://mindmeld.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <JsonLd />
        <LocalBusinessSchema />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
