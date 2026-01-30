"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    // Handle smooth scroll for hash links
    const handleHashLink = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
        e.preventDefault();
        const targetId = hash.replace("#", "");
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, "", hash);
        } else {
            // If element not found, navigate to home with hash
            window.location.href = `/${hash}`;
        }
    };

    return (
        <footer className="bg-slate-900 text-slate-300">
            {/* Main footer */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Company info */}
                    <div className="lg:col-span-2">
                        <div className="mb-4">
                            <Link href="/" className="inline-block group">
                                <span className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                                    Easy<span className="text-amber-400">Web</span>
                                </span>
                                <p className="text-sm text-slate-400 mt-1">
                                    〜やさしいホームページ屋さん〜
                                </p>
                            </Link>
                        </div>
                        <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
                            パソコンが苦手な方でも安心。
                            中小企業・個人事業主様のホームページ制作を、
                            わかりやすい言葉と透明な料金で全力サポートします。
                        </p>
                        <div className="flex gap-4">
                            {/* X (Twitter) */}
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-slate-800 hover:bg-amber-500 text-slate-400 hover:text-slate-900 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/25 focus:outline-none focus:ring-2 focus:ring-amber-400"
                                aria-label="X (Twitter)でフォローする"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 text-slate-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/25 focus:outline-none focus:ring-2 focus:ring-pink-400"
                                aria-label="Instagramでフォローする"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            {/* LINE */}
                            <a
                                href="https://line.me"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-slate-800 hover:bg-green-500 text-slate-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/25 focus:outline-none focus:ring-2 focus:ring-green-400"
                                aria-label="LINEで友だち追加"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="text-white font-bold mb-4">メニュー</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-amber-400 transition-colors focus:outline-none focus:text-amber-400"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="/#features"
                                    onClick={(e) => handleHashLink(e, "#features")}
                                    className="hover:text-amber-400 transition-colors focus:outline-none focus:text-amber-400 cursor-pointer"
                                >
                                    Service
                                </a>
                            </li>
                            <li>
                                <Link
                                    href="/works"
                                    className="hover:text-amber-400 transition-colors focus:outline-none focus:text-amber-400"
                                >
                                    Works
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-amber-400 transition-colors focus:outline-none focus:text-amber-400"
                                >
                                    Company
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="/#contact"
                                    onClick={(e) => handleHashLink(e, "#contact")}
                                    className="hover:text-amber-400 transition-colors focus:outline-none focus:text-amber-400 cursor-pointer"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact info */}
                    <div>
                        <h4 className="text-white font-bold mb-4">お問い合わせ</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-sm text-slate-400">電話番号</p>
                                    <a
                                        href="tel:000-0000-0000"
                                        className="hover:text-amber-400 transition-colors focus:outline-none focus:text-amber-400"
                                    >
                                        000-0000-0000
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-sm text-slate-400">メール</p>
                                    <a
                                        href="mailto:info@easyweb.jp"
                                        className="hover:text-amber-400 transition-colors focus:outline-none focus:text-amber-400"
                                    >
                                        info@easyweb.jp
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-sm text-slate-400">所在地</p>
                                    <p>オンライン対応・全国可</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-slate-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-slate-500">
                            © {currentYear} EasyWeb. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 text-sm">
                            <Link
                                href="/privacy"
                                className="text-slate-500 hover:text-slate-300 transition-colors focus:outline-none focus:text-amber-400"
                            >
                                プライバシーポリシー
                            </Link>
                            <Link
                                href="/legal"
                                className="text-slate-500 hover:text-slate-300 transition-colors focus:outline-none focus:text-amber-400"
                            >
                                特定商取引法に基づく表記
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
