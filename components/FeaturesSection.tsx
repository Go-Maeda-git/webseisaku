"use client";

import React from "react";
import { Wallet, Zap, Users, Check, ArrowRight } from "lucide-react";

const FeaturesSection: React.FC = () => {
    const features = [
        {
            icon: <Wallet className="w-8 h-8" />,
            title: "明朗会計。5万円からスタートできます。",
            subtitle: "「思ったより高くついた…」という心配はありません。",
            description: `ホームページ制作の相場は15〜30万円以上。
でも私たちは、スマホ対応込みで5万円からお作りします。`,
            points: [
                "広告費をかけていない",
                "実績あるテンプレートを活用",
                "仲介業者を通さない直接対応",
            ],
            conclusion: "だから、この価格で高品質を実現できるのです。",
            accentColor: "amber",
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "最短1週間。すぐに「自分の会社のホームページ」が手に入ります。",
            subtitle: "「いつまで待てばいいの…」というストレスはありません。",
            description: `写真と文章をお送りいただければ、
最短1週間で公開までサポートします。`,
            points: [],
            conclusion: "お急ぎの方も、まずはご相談ください。",
            accentColor: "blue",
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "作って終わりじゃない。更新もおまかせできます。",
            subtitle: "「自分で更新なんてできない…」そんな心配はご無用です。",
            description: `月3,000円で、テキストの修正や写真の差し替えをお任せいただけます。
「ここ変えたいな」とLINEやメールで送るだけ。
難しい操作は一切不要です。`,
            points: [],
            conclusion: "あなたは本業に集中してください。",
            accentColor: "emerald",
        },
    ];

    const getAccentClasses = (color: string) => {
        const colors: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
            amber: {
                bg: "bg-amber-500/10",
                text: "text-amber-500",
                border: "border-amber-500/20",
                gradient: "from-amber-500 to-amber-600",
            },
            blue: {
                bg: "bg-blue-500/10",
                text: "text-blue-500",
                border: "border-blue-500/20",
                gradient: "from-blue-500 to-blue-600",
            },
            emerald: {
                bg: "bg-emerald-500/10",
                text: "text-emerald-500",
                border: "border-emerald-500/20",
                gradient: "from-emerald-500 to-emerald-600",
            },
        };
        return colors[color] || colors.amber;
    };

    return (
        <section id="features" className="py-20 lg:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16 lg:mb-20">
                    <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 text-sm font-medium rounded-full mb-4">
                        Why Choose Us
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                        選ばれる
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
                            3つの理由
                        </span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        パソコンが苦手でも、予算が少なくても大丈夫。<br />
                        私たちが全力でサポートします。
                    </p>
                </div>

                {/* Features grid */}
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
                    {features.map((feature, index) => {
                        const accent = getAccentClasses(feature.accentColor);
                        return (
                            <div
                                key={index}
                                className="group relative bg-white rounded-3xl p-8 lg:p-10 shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Number badge */}
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg">
                                    {index + 1}
                                </div>

                                {/* Icon */}
                                <div
                                    className={`inline-flex items-center justify-center w-16 h-16 ${accent.bg} ${accent.text} rounded-2xl mb-6`}
                                >
                                    {feature.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 leading-tight">
                                    {feature.title}
                                </h3>

                                {/* Subtitle */}
                                <p className={`${accent.text} font-medium mb-4`}>
                                    {feature.subtitle}
                                </p>

                                {/* Description */}
                                <p className="text-slate-600 leading-relaxed whitespace-pre-line mb-4">
                                    {feature.description}
                                </p>

                                {/* Points list */}
                                {feature.points.length > 0 && (
                                    <ul className="space-y-2 mb-4">
                                        {feature.points.map((point, pointIndex) => (
                                            <li key={pointIndex} className="flex items-start gap-2">
                                                <Check className={`w-5 h-5 ${accent.text} mt-0.5 flex-shrink-0`} />
                                                <span className="text-slate-600">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Conclusion */}
                                <p className="font-bold text-slate-900 mt-4 pt-4 border-t border-slate-100">
                                    {feature.conclusion}
                                </p>

                                {/* Hover decoration */}
                                <div
                                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${accent.gradient} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                ></div>
                            </div>
                        );
                    })}
                </div>

                {/* Communication methods */}
                <div className="mt-16 lg:mt-20 bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 lg:p-12">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                            すべてオンラインで完結
                        </h3>
                        <p className="text-slate-600">
                            対面は不要。お好きな方法でご連絡ください。
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        <CommunicationMethod
                            icon="📱"
                            name="LINE"
                            description="気軽にチャット"
                        />
                        <CommunicationMethod
                            icon="💬"
                            name="Chatwork"
                            description="ビジネスチャット"
                        />
                        <CommunicationMethod
                            icon="✉️"
                            name="メール"
                            description="24時間受付"
                        />
                        <CommunicationMethod
                            icon="📞"
                            name="電話"
                            description="直接お話し"
                        />
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            const contactSection = document.getElementById("contact");
                            if (contactSection) {
                                contactSection.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                        className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 active:from-amber-600 active:to-amber-700 text-slate-900 font-bold text-lg rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 active:shadow-none transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                    >
                        無料相談はこちら
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <p className="mt-4 text-slate-500 text-sm">
                        ※ 相談だけでもOK。強引な営業は一切しません。
                    </p>
                </div>
            </div>
        </section>
    );
};

// Communication method card
const CommunicationMethod: React.FC<{
    icon: string;
    name: string;
    description: string;
}> = ({ icon, name, description }) => (
    <div className="bg-white rounded-2xl p-4 lg:p-6 text-center shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all duration-300">
        <div className="text-3xl mb-2">{icon}</div>
        <div className="font-bold text-slate-900">{name}</div>
        <div className="text-sm text-slate-500">{description}</div>
    </div>
);

export default FeaturesSection;
