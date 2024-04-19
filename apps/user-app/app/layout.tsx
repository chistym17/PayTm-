import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers, ThemeProvider } from "../provider";

const inter = Inter({ subsets: ["latin"] });
const theme = {
  colors: {
    background: '#ffffff', // Set the background color to white
    // Add other color variables as needed
  },
};


export const metadata: Metadata = {
  title: "paytm-user",
  description: "paytm-userp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Providers>{children}</Providers>
        </ThemeProvider>

      </body>
    </html>
  );
}
