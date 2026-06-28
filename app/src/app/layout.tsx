import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | 寄り添うPGT-A相談室",
    default: "寄り添うPGT-A相談室 | 自分らしい家族のかたちを安心して選べるように",
  },
  description: "不妊治療や繰り返す流産に深く悩む方へ。着床前診断(PGT-A)に関する正しい知識と、あなたの状況に寄り添うクリニック選びをサポートする相談窓口です。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
