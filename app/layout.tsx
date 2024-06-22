import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "~/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const MontserratFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "SpanSense",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: "#624cf5" },
      }}
    >
      <html lang="en">
        <body
          className={cn(
            "font-MontserratFont antialiased",
            MontserratFont.variable
          )}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
