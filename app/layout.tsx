import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Weitgeist | Wikipedia Reimagined",
  description: "A modern wikipedia app. Credits - Wikipedia Commons",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cn("h-full", "antialiased", "font-inter", inter.variable)} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("font")==="mono")document.documentElement.dataset.font="mono"}catch(e){}`,
          }}
        />
      </head>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
