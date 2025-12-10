import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://alphaactivehealth.com.au'),
  title: {
    default: "Alpha Active Health Hub - Expert Rheumatology & Physiotherapy",
    template: "%s | Alpha Active Health Hub"
  },
  description: "Premier rheumatology and physiotherapy specialists in Bella Vista. Expert care for arthritis, autoimmune conditions, and musculoskeletal health.",
  keywords: ["rheumatology", "physiotherapy", "arthritis", "autoimmune", "Bella Vista", "NSW", "specialist", "musculoskeletal"],
  authors: [{ name: "Alpha Active Health Hub" }],
  creator: "Alpha Active Health Hub",
  publisher: "Alpha Active Health Hub",
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://alphaactivehealth.com.au',
    title: 'Alpha Active Health Hub - Expert Rheumatology & Physiotherapy',
    description: 'Premier rheumatology and physiotherapy specialists in Bella Vista. Expert care for arthritis, autoimmune conditions, and musculoskeletal health.',
    siteName: 'Alpha Active Health Hub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alpha Active Health Hub - Expert Rheumatology & Physiotherapy',
    description: 'Premier rheumatology and physiotherapy specialists in Bella Vista.',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${merriweather.variable} antialiased font-sans bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
