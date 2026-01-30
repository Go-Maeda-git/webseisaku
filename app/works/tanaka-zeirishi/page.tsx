"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calculator, FileText, Users, Award, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TanakaZeirishiPage() {
    return (
        <main className="bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
                        alt="田中税理士事務所"
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
                        <span className="inline-block px-4 py-1.5 bg-blue-600 text-white text-sm font-bold rounded-full mb-4">
                            士業
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                            田中税理士事務所
                        </h1>
                        <p className="text-xl text-slate-300 mb-8">
                            税理士事務所様。専門性と親しみやすさを両立したデザインで、紹介以外の新規問い合わせを獲得。
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-white/10 backdrop-blur text-white rounded-lg border border-white/20">
                                デザイン
                            </span>
                            <span className="px-4 py-2 bg-white/10 backdrop-blur text-white rounded-lg border border-white/20">
                                コーディング
                            </span>
                            <span className="px-4 py-2 bg-white/10 backdrop-blur text-white rounded-lg border border-white/20">
                                SEO対策
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
                                        https://tanaka-tax.jp
                                    </div>
                                </div>
                            </div>

                            {/* Website Content */}
                            <div className="relative">
                                {/* Navigation */}
                                <nav className="bg-white border-b px-6 py-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Calculator className="w-6 h-6 text-blue-600" />
                                        <span className="text-xl font-bold text-slate-800">田中税理士事務所</span>
                                    </div>
                                    <div className="hidden md:flex items-center gap-6 text-sm text-slate-600">
                                        <span>サービス</span>
                                        <span>料金</span>
                                        <span>事務所紹介</span>
                                        <span className="px-4 py-2 bg-blue-600 text-white rounded-lg font-bold">無料相談</span>
                                    </div>
                                </nav>

                                {/* Hero */}
                                <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-12 text-center">
                                    <p className="text-blue-300 font-medium mb-2">〇〇市で30年以上の実績</p>
                                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                        中小企業の経営を<br />税務でサポート
                                    </h2>
                                    <p className="text-blue-200 mb-8 max-w-xl mx-auto">
                                        決算・申告から経営相談まで、身近な相談相手として寄り添います
                                    </p>
                                    <div className="flex justify-center gap-4">
                                        <button className="px-6 py-3 bg-white text-blue-900 font-bold rounded-lg">
                                            初回無料相談
                                        </button>
                                        <button className="px-6 py-3 bg-blue-700 text-white font-bold rounded-lg border border-blue-500">
                                            料金を見る
                                        </button>
                                    </div>
                                </div>

                                {/* Services */}
                                <div className="grid md:grid-cols-3 gap-6 p-8">
                                    <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
                                        <FileText className="w-10 h-10 text-blue-600 mb-4" />
                                        <h3 className="font-bold text-slate-800 mb-2">決算・申告</h3>
                                        <p className="text-sm text-slate-600">法人・個人の確定申告、決算書作成をサポート</p>
                                    </div>
                                    <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
                                        <Users className="w-10 h-10 text-blue-600 mb-4" />
                                        <h3 className="font-bold text-slate-800 mb-2">経営相談</h3>
                                        <p className="text-sm text-slate-600">資金繰り、事業計画などの経営課題を支援</p>
                                    </div>
                                    <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
                                        <Award className="w-10 h-10 text-blue-600 mb-4" />
                                        <h3 className="font-bold text-slate-800 mb-2">相続対策</h3>
                                        <p className="text-sm text-slate-600">相続税の試算から申告まで一貫サポート</p>
                                    </div>
                                </div>

                                {/* Contact Bar */}
                                <div className="bg-slate-100 p-6 flex flex-wrap justify-center gap-8">
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-5 h-5 text-blue-600" />
                                        <span className="font-bold">000-000-0000</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-blue-600" />
                                        <span>info@tanaka-tax.jp</span>
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
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                                <p className="text-slate-600 mb-2">Web経由の新規問い合わせ</p>
                                <div className="flex items-end gap-4">
                                    <span className="text-4xl font-bold text-slate-400 line-through">0件</span>
                                    <span className="text-lg text-slate-400">→</span>
                                    <span className="text-5xl font-bold text-blue-600">月3件</span>
                                </div>
                                <p className="text-blue-600 font-bold mt-2">紹介以外の流入が発生！</p>
                            </div>
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
                                <p className="text-slate-600 mb-2">検索順位</p>
                                <div className="flex items-end gap-4">
                                    <span className="text-5xl font-bold text-green-600">1位</span>
                                </div>
                                <p className="text-green-600 font-bold mt-2">「〇〇市 税理士」で1位獲得</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                        士業のホームページ制作もお任せください
                    </h2>
                    <p className="text-slate-400 mb-8">
                        信頼感と専門性を兼ね備えたデザインをご提案します
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
