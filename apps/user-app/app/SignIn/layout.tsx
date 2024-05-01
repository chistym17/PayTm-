import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../../provider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "SignIn",
  description: "SignIn",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="min-w-screen min-h-screen bg-blue-500">
          <Toaster position="bottom-center" />
        {children}
          </div>

      </body>
    </html>
  );
}
