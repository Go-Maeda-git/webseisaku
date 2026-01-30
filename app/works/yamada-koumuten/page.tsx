"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Phone, Clock, MapPin, Hammer, Home, Shield, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function YamadaKoumutenPage() {
    return (
        <main className="bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
                        alt="山田工務店"
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
                        <span className="inline-block px-4 py-1.5 bg-amber-500 text-slate-900 text-sm font-bold rounded-full mb-4">
                            工務店・建築
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                            株式会社山田工務店
                        </h1>
                        <p className="text-xl text-slate-300 mb-8">
                            地域密着の工務店様。信頼感と温かみのあるデザインで、問い合わせ数が月2件→8件に増加。
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-white/10 backdrop-blur text-white rounded-lg border border-white/20">
                                デザイン
                            </span>
                            <span className="px-4 py-2 bg-white/10 backdrop-blur text-white rounded-lg border border-white/20">
                                コーディング
                            </span>
                            <span className="px-4 py-2 bg-white/10 backdrop-blur text-white rounded-lg border border-white/20">
                                スマホ対応
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
                                        https://yamada-koumuten.co.jp
                                    </div>
                                </div>
                            </div>

                            {/* Website Content */}
                            <div className="relative">
                                {/* Navigation */}
                                <nav className="bg-white border-b px-6 py-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Home className="w-6 h-6 text-amber-600" />
                                        <span className="text-xl font-bold text-slate-800">山田工務店</span>
                                    </div>
                                    <div className="hidden md:flex items-center gap-6 text-sm text-slate-600">
                                        <span>会社概要</span>
                                        <span>施工事例</span>
                                        <span>お客様の声</span>
                                        <span className="px-4 py-2 bg-amber-500 text-white rounded-lg font-bold">お問い合わせ</span>
                                    </div>
                                </nav>

                                {/* Hero */}
                                <div className="relative h-[400px]">
                                    <Image
                                        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
                                        alt="施工事例"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent flex items-center">
                                        <div className="px-8 lg:px-12 max-w-xl">
                                            <p className="text-amber-400 font-bold mb-2">創業50年の信頼と実績</p>
                                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                                地域に根ざした<br />家づくりのパートナー
                                            </h2>
                                            <p className="text-slate-200 mb-6">
                                                お客様の夢をカタチにする、職人の技と心を込めた住まいづくり
                                            </p>
                                            <button className="px-6 py-3 bg-amber-500 text-white font-bold rounded-lg">
                                                無料相談を予約する
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="grid md:grid-cols-3 gap-6 p-8 bg-slate-50">
                                    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                                        <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Hammer className="w-7 h-7 text-amber-600" />
                                        </div>
                                        <h3 className="font-bold text-slate-800 mb-2">熟練の職人技</h3>
                                        <p className="text-sm text-slate-600">50年以上受け継がれる確かな技術</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                                        <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Shield className="w-7 h-7 text-amber-600" />
                                        </div>
                                        <h3 className="font-bold text-slate-800 mb-2">安心の保証制度</h3>
                                        <p className="text-sm text-slate-600">10年間の長期保証で安心</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                                        <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <MapPin className="w-7 h-7 text-amber-600" />
                                        </div>
                                        <h3 className="font-bold text-slate-800 mb-2">地域密着</h3>
                                        <p className="text-sm text-slate-600">アフターフォローも万全</p>
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
                            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
                                <p className="text-slate-600 mb-2">月間お問い合わせ数</p>
                                <div className="flex items-end gap-4">
                                    <span className="text-4xl font-bold text-slate-400 line-through">2件</span>
                                    <span className="text-lg text-slate-400">→</span>
                                    <span className="text-5xl font-bold text-amber-600">8件</span>
                                </div>
                                <p className="text-amber-600 font-bold mt-2">4倍に増加！</p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                                <p className="text-slate-600 mb-2">検索順位</p>
                                <div className="flex items-end gap-4">
                                    <span className="text-4xl font-bold text-slate-400 line-through">圏外</span>
                                    <span className="text-lg text-slate-400">→</span>
                                    <span className="text-5xl font-bold text-blue-600">3位</span>
                                </div>
                                <p className="text-blue-600 font-bold mt-2">「〇〇市 工務店」で上位表示</p>
                            </div>
                        </div>

                        <div className="mt-12 p-8 bg-slate-50 rounded-2xl">
                            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-500" />
                                お客様の声
                            </h3>
                            <blockquote className="text-slate-600 italic">
                                「以前のホームページは古くて、スマホで見づらいと言われていました。EasyWebさんに依頼してから、若いお客様からの問い合わせが増えて本当に助かっています。対応も丁寧で、パソコンが苦手な私でも安心してお任せできました。」
                            </blockquote>
                            <p className="mt-4 text-slate-900 font-bold">— 山田 太郎 様（代表取締役）</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                        あなたの会社も、お問い合わせを増やしませんか？
                    </h2>
                    <p className="text-slate-400 mb-8">
                        まずは無料相談から。強引な営業は一切しません。
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
