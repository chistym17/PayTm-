import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../provider";
import { Toaster } from "react-hot-toast";

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
         <Providers>
          <div className="min-w-screen min-h-screen bg-[#FFF5EE]">
          <Toaster position="bottom-center" />
        {children}
          </div>
          </Providers>

      </body>
    </html>
  );
}
