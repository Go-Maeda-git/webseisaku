"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, UtensilsCrossed, MapPin, Clock, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function IzakayaSuzukiPage() {
    return (
        <main className="bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
                        alt="居酒屋 鈴木"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
                    <Link
                        href="/works"
                        className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        制作実績一覧に戻る
                    </Link>

                    <div className="max-w-2xl">
                        <span className="inline-block px-4 py-1.5 bg-red-500 text-white text-sm font-bold rounded-full mb-4">
                            飲食店
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                            居酒屋 鈴木
                        </h1>
                        <p className="text-xl text-slate-300 mb-8">
                            地元で愛される居酒屋様。料理写真を活かしたデザインで、Googleマップ経由の来店が増加。
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-white/10 backdrop-blur text-white rounded-lg border border-white/20">
                                デザイン
                            </span>
                            <span className="px-4 py-2 bg-white/10 backdrop-blur text-white rounded-lg border border-white/20">
                                コーディング
                            </span>
                            <span className="px-4 py-2 bg-white/10 backdrop-blur text-white rounded-lg border border-white/20">
                                写真選定
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Website Preview */}
            <section className="py-16 lg:py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">制作したホームページ</h2>

                        {/* Mock Website */}
                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
                            {/* Browser Bar */}
                            <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <div className="flex-1 mx-4">
                                    <div className="bg-white rounded-lg px-4 py-1.5 text-sm text-slate-500">
                                        https://izakaya-suzuki.jp
                                    </div>
                                </div>
                            </div>

                            {/* Website Content */}
                            <div className="relative bg-slate-900">
                                {/* Navigation */}
                                <nav className="bg-slate-900/95 backdrop-blur border-b border-slate-700 px-6 py-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <UtensilsCrossed className="w-6 h-6 text-red-500" />
                                        <span className="text-xl font-bold text-white">居酒屋 鈴木</span>
                                    </div>
                                    <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
                                        <span>メニュー</span>
                                        <span>店舗情報</span>
                                        <span>アクセス</span>
                                        <span className="px-4 py-2 bg-red-500 text-white rounded-lg font-bold">ご予約</span>
                                    </div>
                                </nav>

                                {/* Hero */}
                                <div className="relative h-[400px]">
                                    <Image
                                        src="https://images.unsplash.com/photo-1540914124281-342587941389?w=1200&q=80"
                                        alt="料理"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex items-end">
                                        <div className="px-8 lg:px-12 pb-12 w-full text-center">
                                            <p className="text-red-400 font-bold mb-2">創業30年</p>
                                            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                                                心を込めた、本物の味
                                            </h2>
                                            <p className="text-slate-300 mb-6">
                                                新鮮な魚介と厳選された日本酒で、至福のひとときを
                                            </p>
                                            <div className="flex justify-center gap-4">
                                                <button className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg">
                                                    ご予約はこちら
                                                </button>
                                                <button className="px-6 py-3 bg-white/10 text-white font-bold rounded-lg border border-white/30">
                                                    メニューを見る
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Info Bar */}
                                <div className="bg-slate-800 p-6 grid md:grid-cols-3 gap-4 text-center">
                                    <div className="flex items-center justify-center gap-3 text-slate-300">
                                        <MapPin className="w-5 h-5 text-red-400" />
                                        <span>〇〇市中央区1-2-3</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-3 text-slate-300">
                                        <Clock className="w-5 h-5 text-red-400" />
                                        <span>17:00〜24:00（日曜定休）</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-3 text-slate-300">
                                        <Star className="w-5 h-5 text-red-400" />
                                        <span>食べログ 3.8点</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">制作による成果</h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl">
                                <p className="text-slate-600 mb-2">Googleマップ経由の来店</p>
                                <div className="flex items-end gap-4">
                                    <span className="text-5xl font-bold text-red-600">+40%</span>
                                </div>
                                <p className="text-red-600 font-bold mt-2">大幅に増加！</p>
                            </div>
                            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl">
                                <p className="text-slate-600 mb-2">Web予約数</p>
                                <div className="flex items-end gap-4">
                                    <span className="text-4xl font-bold text-slate-400 line-through">月5件</span>
                                    <span className="text-lg text-slate-400">→</span>
                                    <span className="text-5xl font-bold text-amber-600">月20件</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                        あなたのお店も、集客を増やしませんか？
                    </h2>
                    <p className="text-slate-400 mb-8">
                        飲食店専門のホームページ制作もお任せください
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 font-bold text-lg rounded-xl transition-all"
                    >
                        無料相談を申し込む
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
