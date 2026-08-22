import type { Metadata } from "next";
import "./globals.css";
import BackButtonHandler from "@/components/BackButtonHandler/BackButtonHandler";

export const metadata: Metadata = {
  title: "Kiran Reddy Boys Hostel",
  description: "Kiran Reddy Boys Hostel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BackButtonHandler />
        {children}
      </body>
    </html>
  );
}