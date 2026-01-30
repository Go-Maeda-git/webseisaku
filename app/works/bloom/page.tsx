"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Scissors, Star, Clock, MapPin, Calendar, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BloomPage() {
    return (
        <main className="bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
                        alt="美容室 Bloom"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
                    <Link
                        href="/works"
                        className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        制作実績一覧に戻る
                    </Link>

                    <div className="max-w-2xl">
                        <span className="inline-block px-4 py-1.5 bg-pink-500 text-white text-sm font-bold rounded-full mb-4">
                            美容・サロン
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                            美容室 Bloom
                        </h1>
                        <p className="text-xl text-slate-300 mb-8">
                            女性向け美容室様。洗練されたデザインと予約システム連携で、オンライン予約率が向上。
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-white/10 backdrop-blur text-white rounded-lg border border-white/20">
                                デザイン
                            </span>
                            <span className="px-4 py-2 bg-white/10 backdrop-blur text-white rounded-lg border border-white/20">
                                コーディング
                            </span>
                            <span className="px-4 py-2 bg-white/10 backdrop-blur text-white rounded-lg border border-white/20">
                                予約連携
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Website Preview */}
            <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-50 to-rose-50">
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
                                        https://bloom-hair.jp
                                    </div>
                                </div>
                            </div>

                            {/* Website Content */}
                            <div className="relative">
                                {/* Navigation */}
                                <nav className="bg-white/95 backdrop-blur border-b px-6 py-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Sparkles className="w-6 h-6 text-pink-500" />
                                        <span className="text-xl font-light tracking-wider text-slate-800">Bloom</span>
                                    </div>
                                    <div className="hidden md:flex items-center gap-6 text-sm text-slate-600">
                                        <span>メニュー</span>
                                        <span>スタイリスト</span>
                                        <span>ギャラリー</span>
                                        <span className="px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-medium">
                                            ご予約
                                        </span>
                                    </div>
                                </nav>

                                {/* Hero */}
                                <div className="relative h-[400px]">
                                    <Image
                                        src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80"
                                        alt="サロン"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent flex items-center">
                                        <div className="px-8 lg:px-16 max-w-lg">
                                            <p className="text-pink-500 font-medium tracking-wider mb-2">BEAUTY SALON</p>
                                            <h2 className="text-3xl lg:text-4xl font-light text-slate-800 mb-4 leading-relaxed">
                                                あなたらしい<br />美しさを咲かせる
                                            </h2>
                                            <p className="text-slate-600 mb-8">
                                                一人ひとりの個性を大切に、トレンドと似合わせを融合したスタイルをご提案します
                                            </p>
                                            <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-medium shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-shadow">
                                                今すぐ予約する
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="bg-white p-8 grid md:grid-cols-4 gap-6 text-center">
                                    <div className="p-4">
                                        <Scissors className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                                        <h3 className="font-medium text-slate-800 mb-1">カット</h3>
                                        <p className="text-pink-500 text-lg font-bold">¥4,500〜</p>
                                    </div>
                                    <div className="p-4">
                                        <Star className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                                        <h3 className="font-medium text-slate-800 mb-1">カラー</h3>
                                        <p className="text-pink-500 text-lg font-bold">¥6,000〜</p>
                                    </div>
                                    <div className="p-4">
                                        <Calendar className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                                        <h3 className="font-medium text-slate-800 mb-1">パーマ</h3>
                                        <p className="text-pink-500 text-lg font-bold">¥8,000〜</p>
                                    </div>
                                    <div className="p-4">
                                        <Sparkles className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                                        <h3 className="font-medium text-slate-800 mb-1">トリートメント</h3>
                                        <p className="text-pink-500 text-lg font-bold">¥3,000〜</p>
                                    </div>
                                </div>

                                {/* Info Bar */}
                                <div className="bg-pink-50 p-6 flex flex-wrap justify-center gap-8 text-sm">
                                    <div className="flex items-center gap-2 text-slate-600">
                                        <MapPin className="w-4 h-4 text-pink-500" />
                                        〇〇市中央区1-2-3
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-600">
                                        <Clock className="w-4 h-4 text-pink-500" />
                                        10:00〜20:00（火曜定休）
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
                            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl">
                                <p className="text-slate-600 mb-2">オンライン予約率</p>
                                <div className="flex items-end gap-4">
                                    <span className="text-4xl font-bold text-slate-400 line-through">20%</span>
                                    <span className="text-lg text-slate-400">→</span>
                                    <span className="text-5xl font-bold text-pink-600">65%</span>
                                </div>
                                <p className="text-pink-600 font-bold mt-2">電話対応の負担が大幅減！</p>
                            </div>
                            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl">
                                <p className="text-slate-600 mb-2">新規指名予約</p>
                                <div className="flex items-end gap-4">
                                    <span className="text-5xl font-bold text-purple-600">+50%</span>
                                </div>
                                <p className="text-purple-600 font-bold mt-2">スタイリスト紹介ページの効果</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                        美容室・サロンのHP制作もお任せください
                    </h2>
                    <p className="text-slate-400 mb-8">
                        予約システム連携で、集客から予約までをスムーズに
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
