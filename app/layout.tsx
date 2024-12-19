import type { Metadata } from "next";
import "./globals.css";
import { PT_Sans, Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});
const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ptSans",
});
export const metadata: Metadata = {
  title: "Qizzler ",
  description:
    "Qizzler is a quiz app that allows you to create and play quizzes with the help of ai and your own categorized questions with your own settings and types of questions.",
  icons: {
    icon: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${ptSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
