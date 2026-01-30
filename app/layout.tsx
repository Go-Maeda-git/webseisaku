import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "EasyWeb（イージーウェブ）| やさしいホームページ屋さん",
    description:
        "パソコンが苦手でも大丈夫。スマホ対応込みで5万円から、最短1週間でホームページを制作します。EasyWebは中小企業・個人事業主様のホームページ制作を全力でサポートします。",
    keywords: "EasyWeb, イージーウェブ, ホームページ制作, Web制作, LP制作, 格安, スマホ対応",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ja">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
