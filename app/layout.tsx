import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yusuf İhsan Gül | Co-Founder & CTO",
  description: "Portfolio of Yusuf İhsan Gül - Co Founder & CTO of Plan B Animation and Game Studio, Software Developer, and IEEE Computer Society Chair.",
  keywords: ["Yusuf İhsan Gül", "Software Developer", "CTO", "Full Stack Developer", "Next.js", "Game Development", "Plan B Animation"],
  authors: [{ name: "Yusuf İhsan Gül" }],
  creator: "Yusuf İhsan Gül",
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
