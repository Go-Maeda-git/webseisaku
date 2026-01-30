"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Heart, MapPin, Clock, Phone, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NakamuraSeikotuinPage() {
    return (
        <main className="bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80"
                        alt="中村整骨院"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
                    <Link
                        href="/works"
                        className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        制作実績一覧に戻る
                    </Link>

                    <div className="max-w-2xl">
                        <span className="inline-block px-4 py-1.5 bg-teal-500 text-white text-sm font-bold rounded-full mb-4">
                            医療・健康
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                            中村整骨院
                        </h1>
                        <p className="text-xl text-slate-300 mb-8">
                            整骨院様。安心感のあるデザインと詳細なアクセス情報で、新規患者様の来院が増加。
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-white/10 backdrop-blur text-white rounded-lg border border-white/20">
                                デザイン
                            </span>
                            <span className="px-4 py-2 bg-white/10 backdrop-blur text-white rounded-lg border border-white/20">
                                コーディング
                            </span>
                            <span className="px-4 py-2 bg-white/10 backdrop-blur text-white rounded-lg border border-white/20">
                                アクセス地図
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
                                        https://nakamura-seikotuin.jp
                                    </div>
                                </div>
                            </div>

                            {/* Website Content */}
                            <div className="relative">
                                {/* Navigation */}
                                <nav className="bg-teal-600 px-6 py-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Heart className="w-6 h-6 text-white" />
                                        <span className="text-xl font-bold text-white">中村整骨院</span>
                                    </div>
                                    <div className="hidden md:flex items-center gap-6 text-sm text-teal-100">
                                        <span>診療案内</span>
                                        <span>施術メニュー</span>
                                        <span>アクセス</span>
                                        <span className="px-4 py-2 bg-white text-teal-600 rounded-lg font-bold">ご予約</span>
                                    </div>
                                </nav>

                                {/* Hero */}
                                <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-12 text-center">
                                    <p className="text-teal-100 mb-2">〇〇駅から徒歩3分</p>
                                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                        痛みに寄り添う、<br />やさしい治療
                                    </h2>
                                    <p className="text-teal-100 mb-8 max-w-xl mx-auto">
                                        肩こり・腰痛・スポーツ障害など、体の不調を根本から改善します
                                    </p>
                                    <div className="flex justify-center gap-4">
                                        <button className="px-6 py-3 bg-white text-teal-600 font-bold rounded-lg">
                                            ご予約・お問い合わせ
                                        </button>
                                        <button className="px-6 py-3 bg-teal-700 text-white font-bold rounded-lg">
                                            施術メニュー
                                        </button>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="grid md:grid-cols-3 gap-6 p-8">
                                    <div className="text-center p-6">
                                        <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle className="w-8 h-8 text-teal-600" />
                                        </div>
                                        <h3 className="font-bold text-slate-800 mb-2">丁寧なカウンセリング</h3>
                                        <p className="text-sm text-slate-600">症状の原因をしっかり把握</p>
                                    </div>
                                    <div className="text-center p-6">
                                        <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Heart className="w-8 h-8 text-teal-600" />
                                        </div>
                                        <h3 className="font-bold text-slate-800 mb-2">痛みの少ない施術</h3>
                                        <p className="text-sm text-slate-600">お体に負担をかけない治療</p>
                                    </div>
                                    <div className="text-center p-6">
                                        <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <MapPin className="w-8 h-8 text-teal-600" />
                                        </div>
                                        <h3 className="font-bold text-slate-800 mb-2">駅チカ・通いやすい</h3>
                                        <p className="text-sm text-slate-600">〇〇駅から徒歩3分</p>
                                    </div>
                                </div>

                                {/* Info Bar */}
                                <div className="bg-slate-100 p-6 grid md:grid-cols-3 gap-4 text-center text-sm">
                                    <div className="flex items-center justify-center gap-2 text-slate-600">
                                        <Clock className="w-4 h-4 text-teal-500" />
                                        平日 9:00〜20:00
                                    </div>
                                    <div className="flex items-center justify-center gap-2 text-slate-600">
                                        <Phone className="w-4 h-4 text-teal-500" />
                                        000-000-0000
                                    </div>
                                    <div className="flex items-center justify-center gap-2 text-slate-600">
                                        <MapPin className="w-4 h-4 text-teal-500" />
                                        〇〇市〇〇町1-2-3
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
                            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl">
                                <p className="text-slate-600 mb-2">新規患者数</p>
                                <div className="flex items-end gap-4">
                                    <span className="text-4xl font-bold text-slate-400 line-through">月10名</span>
                                    <span className="text-lg text-slate-400">→</span>
                                    <span className="text-5xl font-bold text-teal-600">月25名</span>
                                </div>
                                <p className="text-teal-600 font-bold mt-2">2.5倍に増加！</p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                                <p className="text-slate-600 mb-2">Googleマップ閲覧数</p>
                                <div className="flex items-end gap-4">
                                    <span className="text-5xl font-bold text-blue-600">+120%</span>
                                </div>
                                <p className="text-blue-600 font-bold mt-2">地図連携の効果</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                        医療・健康系のHP制作もお任せください
                    </h2>
                    <p className="text-slate-400 mb-8">
                        信頼感と安心感を伝えるデザインをご提案します
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
