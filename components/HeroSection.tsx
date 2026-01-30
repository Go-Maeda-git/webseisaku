"use client";

import React from "react";
import { Check, ArrowRight, Smartphone, Clock, RefreshCw } from "lucide-react";

const HeroSection: React.FC = () => {
    const scrollToContact = (e: React.MouseEvent) => {
        e.preventDefault();
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToService = (e: React.MouseEvent) => {
        e.preventDefault();
        const serviceSection = document.getElementById("features");
        if (serviceSection) {
            serviceSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-400/5 rounded-full blur-2xl"></div>
            </div>

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            ></div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-8">
                        <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
                        <span className="text-amber-400 text-sm font-medium">全国対応・完全オンライン</span>
                    </div>

                    {/* Main headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        ホームページ、
                        <span className="relative">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                                5万円
                            </span>
                            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"></span>
                        </span>
                        から。
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl sm:text-2xl text-slate-300 mb-4 font-light">
                        パソコンが苦手でも、予算が少なくても、大丈夫。
                    </p>

                    {/* Description */}
                    <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        「うちもそろそろホームページが必要かな…」<br className="hidden sm:block" />
                        そう思った今が、始めどきです。<br />
                        難しい操作は一切不要。あなたは話すだけ。あとは私たちがカタチにします。
                    </p>

                    {/* Feature bullets */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12">
                        <FeatureBadge icon={<Smartphone className="w-5 h-5" />} text="スマホ対応込み5万円〜" />
                        <FeatureBadge icon={<Clock className="w-5 h-5" />} text="最短1週間で完成" />
                        <FeatureBadge icon={<RefreshCw className="w-5 h-5" />} text="更新おまかせ月3,000円" />
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={scrollToContact}
                            className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 active:from-amber-600 active:to-amber-700 text-slate-900 font-bold text-lg rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 active:shadow-none transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                        >
                            <span className="flex items-center justify-center gap-2">
                                まずは無料で相談する
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                        <button
                            onClick={scrollToService}
                            className="w-full sm:w-auto px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 text-white font-medium text-lg rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300"
                        >
                            サービスを見る
                        </button>
                    </div>

                    {/* Trust message */}
                    <p className="mt-6 text-slate-500 text-sm">
                        ※ 強引な営業は一切しません。お気軽にどうぞ。
                    </p>
                </div>

                {/* Stats section */}
                <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    <StatCard number="500+" label="制作実績" />
                    <StatCard number="98%" label="お客様満足度" />
                    <StatCard number="1週間" label="最短納品" />
                    <StatCard number="5万円〜" label="制作費用" />
                </div>
            </div>

            {/* Bottom wave decoration */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg className="w-full h-24 fill-white" viewBox="0 0 1440 100" preserveAspectRatio="none">
                    <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z"></path>
                </svg>
            </div>
        </section>
    );
};

// Feature badge component
const FeatureBadge: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
    <div className="flex items-center gap-2 text-slate-300">
        <div className="flex items-center justify-center w-8 h-8 bg-amber-500/20 rounded-lg text-amber-400">
            {icon}
        </div>
        <span className="font-medium">{text}</span>
    </div>
);

// Stat card component
const StatCard: React.FC<{ number: string; label: string }> = ({ number, label }) => (
    <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50">
        <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500 mb-1">
            {number}
        </div>
        <div className="text-slate-400 text-sm">{label}</div>
    </div>
);

export default HeroSection;
