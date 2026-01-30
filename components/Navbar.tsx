"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Handle smooth scroll for hash links
    const handleHashLink = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        // If we're not on the home page, navigate first
        if (pathname !== "/") {
            window.location.href = `/${hash}`;
            return;
        }

        const targetId = hash.replace("#", "");
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            // Update URL without page reload
            window.history.pushState(null, "", hash);
        }
    };

    // Handle scroll to top
    const scrollToTop = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        if (pathname !== "/") {
            window.location.href = "/";
            return;
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", "/");
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo - click to scroll to top or go home */}
                    <a
                        href="/"
                        onClick={scrollToTop}
                        className="flex flex-col items-start cursor-pointer group"
                    >
                        <span className="text-xl lg:text-2xl font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                            Easy<span className="text-amber-400">Web</span>
                        </span>
                        <span className="text-[10px] lg:text-xs text-slate-400 -mt-1">
                            〜やさしいホームページ屋さん〜
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        <a
                            href="/"
                            onClick={scrollToTop}
                            className="text-slate-300 hover:text-white transition-colors focus:outline-none focus:text-amber-400"
                        >
                            Home
                        </a>
                        <a
                            href="/#features"
                            onClick={(e) => handleHashLink(e, "#features")}
                            className="text-slate-300 hover:text-white transition-colors focus:outline-none focus:text-amber-400"
                        >
                            Service
                        </a>
                        <Link
                            href="/works"
                            className="text-slate-300 hover:text-white transition-colors focus:outline-none focus:text-amber-400"
                        >
                            Works
                        </Link>
                        <Link
                            href="/about"
                            className="text-slate-300 hover:text-white transition-colors focus:outline-none focus:text-amber-400"
                        >
                            Company
                        </Link>
                        <a
                            href="/#contact"
                            onClick={(e) => handleHashLink(e, "#contact")}
                            className="text-slate-300 hover:text-white transition-colors focus:outline-none focus:text-amber-400"
                        >
                            Contact
                        </a>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a
                            href="tel:000-0000-0000"
                            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors focus:outline-none focus:text-amber-400"
                            aria-label="電話でお問い合わせ"
                        >
                            <Phone className="w-4 h-4" />
                            <span className="text-sm">000-0000-0000</span>
                        </a>
                        <button
                            onClick={(e) => handleHashLink(e as unknown as React.MouseEvent<HTMLAnchorElement>, "#contact")}
                            className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 active:from-amber-600 active:to-amber-700 text-slate-900 font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] shadow-lg shadow-amber-500/25 active:shadow-none focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                            aria-label="無料相談フォームへ移動"
                        >
                            無料相談
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-white hover:text-amber-400 transition-colors focus:outline-none focus:text-amber-400"
                        aria-label={isMobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="bg-slate-900/98 backdrop-blur-md border-t border-slate-800 py-4 space-y-1">
                        <a
                            href="/"
                            onClick={scrollToTop}
                            className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors rounded-lg focus:outline-none focus:bg-slate-800/50"
                        >
                            Home
                        </a>
                        <a
                            href="/#features"
                            onClick={(e) => handleHashLink(e, "#features")}
                            className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors rounded-lg focus:outline-none focus:bg-slate-800/50"
                        >
                            Service
                        </a>
                        <Link
                            href="/works"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors rounded-lg focus:outline-none focus:bg-slate-800/50"
                        >
                            Works
                        </Link>
                        <Link
                            href="/about"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors rounded-lg focus:outline-none focus:bg-slate-800/50"
                        >
                            Company
                        </Link>
                        <div className="px-4 pt-3">
                            <a
                                href="/#contact"
                                onClick={(e) => handleHashLink(e, "#contact")}
                                className="block w-full px-5 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 active:from-amber-600 active:to-amber-700 text-slate-900 font-bold rounded-lg text-center transition-all focus:outline-none focus:ring-2 focus:ring-amber-400"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
