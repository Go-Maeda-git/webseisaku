"use client";

import React from "react";
import { ExternalLink, Palette, Code, Layout, Smartphone, Camera, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Works data with Unsplash images and link paths
// ※ お客様のプライバシー保護のため、社名は仮名で表示しています
const works = [
    {
        id: 1,
        title: "A工務店 様",
        category: "工務店・建築",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
        tags: ["デザイン", "コーディング", "スマホ対応"],
        description: "地域密着の工務店様。信頼感と温かみのあるデザインで、問い合わせ数が月2件→8件に増加。",
        size: "large",
        href: "/works/yamada-koumuten",
    },
    {
        id: 2,
        title: "B店 様（居酒屋）",
        category: "飲食店",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
        tags: ["デザイン", "コーディング", "写真選定"],
        description: "地元で愛される居酒屋様。料理写真を活かしたデザインで、Googleマップ経由の来店が増加。",
        size: "medium",
        href: "/works/izakaya-suzuki",
    },
    {
        id: 3,
        title: "C税理士事務所 様",
        category: "士業",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
        tags: ["デザイン", "コーディング", "SEO対策"],
        description: "税理士事務所様。専門性と親しみやすさを両立したデザインで、紹介以外の新規問い合わせを獲得。",
        size: "medium",
        href: "/works/tanaka-zeirishi",
    },
    {
        id: 4,
        title: "D美容室 様",
        category: "美容・サロン",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
        tags: ["デザイン", "コーディング", "予約連携"],
        description: "女性向け美容室様。洗練されたデザインと予約システム連携で、オンライン予約率が向上。",
        size: "wide",
        href: "/works/bloom",
    },
    {
        id: 5,
        title: "E整骨院 様",
        category: "医療・健康",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
        tags: ["デザイン", "コーディング", "アクセス地図"],
        description: "整骨院様。安心感のあるデザインと詳細なアクセス情報で、新規患者様の来院が増加。",
        size: "small",
        href: "/works/nakamura-seikotuin",
    },
    {
        id: 6,
        title: "F商店 様",
        category: "小売・卸売",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
        tags: ["デザイン", "コーディング", "商品紹介"],
        description: "老舗の卸売業者様。歴史と信頼を伝えるデザインで、BtoB問い合わせが増加。",
        size: "small",
        href: "/works/sato-shouten",
    },
];

const getTagIcon = (tag: string) => {
    switch (tag) {
        case "デザイン":
            return <Palette className="w-3 h-3" />;
        case "コーディング":
            return <Code className="w-3 h-3" />;
        case "スマホ対応":
            return <Smartphone className="w-3 h-3" />;
        case "写真選定":
            return <Camera className="w-3 h-3" />;
        case "SEO対策":
            return <Search className="w-3 h-3" />;
        default:
            return <Layout className="w-3 h-3" />;
    }
};

// Work Card Component with hover effects
const WorkCard: React.FC<{
    work: typeof works[0];
    className?: string;
}> = ({ work, className = "" }) => {
    return (
        <Link
            href={work.href}
            className={`group relative overflow-hidden rounded-2xl lg:rounded-3xl cursor-pointer block ${className}`}
        >
            {/* Image with zoom effect */}
            <div className="absolute inset-0">
                <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-5 lg:p-7">
                {/* Category badge - always visible */}
                <span className="absolute top-4 left-4 lg:top-6 lg:left-7 px-3 py-1.5 bg-amber-500/90 backdrop-blur-sm text-slate-900 text-xs font-bold rounded-full">
                    {work.category}
                </span>

                {/* View button - appears on hover */}
                <div className="absolute top-4 right-4 lg:top-6 lg:right-7 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <ExternalLink className="w-4 h-4 lg:w-5 lg:h-5 text-slate-900" />
                    </div>
                </div>

                {/* Title - always visible */}
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 transform group-hover:-translate-y-2 transition-transform duration-500">
                    {work.title}
                </h3>

                {/* Description - slides up on hover */}
                <div className="overflow-hidden">
                    <p className="text-slate-300 text-sm lg:text-base leading-relaxed transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        {work.description}
                    </p>
                </div>

                {/* Tags - slides up on hover */}
                <div className="flex flex-wrap gap-2 mt-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {work.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full border border-white/20"
                        >
                            {getTagIcon(tag)}
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default function WorksPage() {
    return (
        <main className="bg-slate-50">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 -right-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium rounded-full mb-4">
                            Works
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                            制作実績
                        </h1>
                        <p className="text-lg lg:text-xl text-slate-400">
                            これまでにお手伝いさせていただいた<br className="sm:hidden" />
                            お客様のホームページをご紹介します。
                        </p>
                    </div>
                </div>
            </section>

            {/* Bento Grid Works Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Bento Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto">

                        {/* Row 1: Large (2x2) + Medium Stack (2x1 each) */}
                        {/* 山田工務店 - Large main card (spans 2 cols, 2 rows) */}
                        <WorkCard
                            work={works[0]}
                            className="md:col-span-2 md:row-span-2 aspect-square lg:aspect-auto lg:h-[520px]"
                        />

                        {/* 居酒屋 鈴木 - Medium (stacked top) */}
                        <WorkCard
                            work={works[1]}
                            className="aspect-[4/3]"
                        />

                        {/* 田中税理士 - Medium (stacked bottom) */}
                        <WorkCard
                            work={works[2]}
                            className="aspect-[4/3]"
                        />

                        {/* Row 2: Wide + 2 Small */}
                        {/* 美容室 Bloom - Wide horizontal card */}
                        <WorkCard
                            work={works[3]}
                            className="md:col-span-2 aspect-[16/9] lg:aspect-[21/9]"
                        />

                        {/* 中村整骨院 - Small */}
                        <WorkCard
                            work={works[4]}
                            className="aspect-square"
                        />

                        {/* 佐藤商店 - Small */}
                        <WorkCard
                            work={works[5]}
                            className="aspect-square"
                        />
                    </div>

                    {/* Bottom ribbon with stats */}
                    <div className="mt-16 lg:mt-24 max-w-4xl mx-auto">
                        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl lg:rounded-3xl p-8 lg:p-12">
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                                <div>
                                    <div className="text-3xl lg:text-4xl font-bold text-amber-400 mb-2">500+</div>
                                    <div className="text-slate-400 text-sm">制作実績</div>
                                </div>
                                <div>
                                    <div className="text-3xl lg:text-4xl font-bold text-amber-400 mb-2">98%</div>
                                    <div className="text-slate-400 text-sm">お客様満足度</div>
                                </div>
                                <div>
                                    <div className="text-3xl lg:text-4xl font-bold text-amber-400 mb-2">47</div>
                                    <div className="text-slate-400 text-sm">都道府県対応</div>
                                </div>
                                <div>
                                    <div className="text-3xl lg:text-4xl font-bold text-amber-400 mb-2">50+</div>
                                    <div className="text-slate-400 text-sm">業種に対応</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-16 text-center">
                        <p className="text-slate-600 mb-6 text-lg">
                            この他にも多数の制作実績がございます。
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 active:from-amber-600 active:to-amber-700 text-slate-900 font-bold text-lg rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 active:shadow-none transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                        >
                            あなたの業種もご相談ください
                        </Link>
                    </div>

                    {/* Disclaimer */}
                    <div className="mt-12 max-w-2xl mx-auto">
                        <div className="bg-slate-100 rounded-xl p-6 border border-slate-200">
                            <p className="text-sm text-slate-500 text-center leading-relaxed">
                                <span className="font-bold text-slate-600">※ プライバシー保護について</span><br />
                                掲載している実績は全て実際のお客様の事例ですが、<br className="hidden sm:inline" />
                                お客様のプライバシー保護のため、社名・店舗名は仮名で表示しております。<br className="hidden sm:inline" />
                                実際の制作事例の詳細は、お問い合わせ時にご説明いたします。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
