import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/layout/layout";
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
  /*
   * ページ全体で使用するタイトルと説明文を設定する。
   * ブラウザーのタブ名とページの説明文に反映される。
   */
  title: "NextJS Startup",
  description: "TailwindCSS sample",
};

/*
 * スマートフォンなどの画面で使用する表示領域と初期ズーム倍率を設定する。
 * device-width は端末の画面幅に合わせ、initialScale は初期表示を等倍にする。
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

/*
 * アプリケーション全体で使用するルートレイアウト。
 * children には、表示中のページ（app/page.tsx など）の内容が入る。
 * Layout コンポーネントでページを囲み、共通のナビゲーションとフッターを表示する。
 */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // html と body にページ全体の言語・フォント・レイアウトを設定する。
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* 共通レイアウトの中に、各ページの内容を渡す。 */}
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
