"use client";

import React from "react";
import { Mail, ArrowRight } from "lucide-react";
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
            window.location.href = `/${hash}`;
        }
    };

    return (
        <footer className="bg-slate-900 text-slate-300">
            {/* Main footer */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Company info */}
                    <div className="lg:col-span-1">
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

                    {/* Contact CTA - Form only */}
                    <div>
                        <h4 className="text-white font-bold mb-4">お問い合わせ</h4>
                        <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                            ご相談・お見積りは無料です。<br />
                            下記フォームよりお気軽にお問い合わせください。
                        </p>
                        <a
                            href="/#contact"
                            onClick={(e) => handleHashLink(e, "#contact")}
                            className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-amber-500/25"
                        >
                            <Mail className="w-4 h-4" />
                            お問い合わせフォームへ
                            <ArrowRight className="w-4 h-4" />
                        </a>
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
