"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Store, Package, Truck, Phone, Mail, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SatoShoutenPage() {
    return (
        <main className="bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
                        alt="佐藤商店"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
                    <Link
                        href="/works"
                        className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        制作実績一覧に戻る
                    </Link>

                    <div className="max-w-2xl">
                        <span className="inline-block px-4 py-1.5 bg-emerald-600 text-white text-sm font-bold rounded-full mb-4">
                            小売・卸売
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                            有限会社佐藤商店
                        </h1>
                        <p className="text-xl text-slate-300 mb-8">
                            老舗の卸売業者様。歴史と信頼を伝えるデザインで、BtoB問い合わせが増加。
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-white/10 backdrop-blur text-white rounded-lg border border-white/20">
                                デザイン
                            </span>
                            <span className="px-4 py-2 bg-white/10 backdrop-blur text-white rounded-lg border border-white/20">
                                コーディング
                            </span>
                            <span className="px-4 py-2 bg-white/10 backdrop-blur text-white rounded-lg border border-white/20">
                                商品紹介
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
                                        https://sato-shouten.co.jp
                                    </div>
                                </div>
                            </div>

                            {/* Website Content */}
                            <div className="relative">
                                {/* Navigation */}
                                <nav className="bg-emerald-800 px-6 py-4 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Store className="w-6 h-6 text-emerald-300" />
                                        <div>
                                            <span className="text-lg font-bold text-white">佐藤商店</span>
                                            <p className="text-xs text-emerald-300">創業1965年</p>
                                        </div>
                                    </div>
                                    <div className="hidden md:flex items-center gap-6 text-sm text-emerald-100">
                                        <span>会社概要</span>
                                        <span>取扱商品</span>
                                        <span>アクセス</span>
                                        <span className="px-4 py-2 bg-white text-emerald-800 rounded font-bold">お問い合わせ</span>
                                    </div>
                                </nav>

                                {/* Hero */}
                                <div className="relative h-[350px]">
                                    <Image
                                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80"
                                        alt="倉庫"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-900/50 flex items-center">
                                        <div className="px-8 lg:px-12 max-w-xl">
                                            <p className="text-emerald-300 font-bold mb-2">創業58年の信頼と実績</p>
                                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-relaxed">
                                                確かな品質を、<br />確かなお届け
                                            </h2>
                                            <p className="text-emerald-100 mb-6">
                                                〇〇地域の飲食店・小売店様に、厳選した食材・商品を卸しています
                                            </p>
                                            <button className="px-6 py-3 bg-white text-emerald-800 font-bold rounded">
                                                お取引のご相談
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="bg-white grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                                    <div className="p-8 text-center">
                                        <Package className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                                        <h3 className="font-bold text-slate-800 mb-2">豊富な品揃え</h3>
                                        <p className="text-sm text-slate-600">5,000点以上の商品ラインナップ</p>
                                    </div>
                                    <div className="p-8 text-center">
                                        <Truck className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                                        <h3 className="font-bold text-slate-800 mb-2">迅速な配送</h3>
                                        <p className="text-sm text-slate-600">午前注文で当日お届け</p>
                                    </div>
                                    <div className="p-8 text-center">
                                        <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                                        <h3 className="font-bold text-slate-800 mb-2">品質保証</h3>
                                        <p className="text-sm text-slate-600">厳選された確かな商品のみ</p>
                                    </div>
                                </div>

                                {/* Contact Bar */}
                                <div className="bg-emerald-50 p-6 flex flex-wrap justify-center gap-8 text-sm">
                                    <div className="flex items-center gap-2 text-slate-700">
                                        <Phone className="w-4 h-4 text-emerald-600" />
                                        <span className="font-bold">000-000-0000</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-700">
                                        <Mail className="w-4 h-4 text-emerald-600" />
                                        info@sato-shouten.co.jp
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
                            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl">
                                <p className="text-slate-600 mb-2">BtoB新規お問い合わせ</p>
                                <div className="flex items-end gap-4">
                                    <span className="text-4xl font-bold text-slate-400 line-through">月1件</span>
                                    <span className="text-lg text-slate-400">→</span>
                                    <span className="text-5xl font-bold text-emerald-600">月5件</span>
                                </div>
                                <p className="text-emerald-600 font-bold mt-2">5倍に増加！</p>
                            </div>
                            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl">
                                <p className="text-slate-600 mb-2">取引先からの評価</p>
                                <div className="flex items-end gap-4">
                                    <span className="text-5xl font-bold text-amber-600">好評</span>
                                </div>
                                <p className="text-amber-600 font-bold mt-2">「ホームページが見やすくなった」</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                        卸売・小売業のHP制作もお任せください
                    </h2>
                    <p className="text-slate-400 mb-8">
                        BtoB向けの信頼感あるデザインをご提案します
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
