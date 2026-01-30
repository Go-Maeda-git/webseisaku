"use client";

import React from "react";
import { Heart, Target, Users, MapPin, Phone, Mail, Clock, Building } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <main>
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium rounded-full mb-4">
                            About Us
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                            会社概要
                        </h1>
                        <p className="text-lg text-slate-400">
                            EasyWebについて、私たちの想いをお伝えします。
                        </p>
                    </div>
                </div>
            </section>

            {/* Message Section */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 text-sm font-medium rounded-full mb-4">
                                Message
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                                代表メッセージ
                            </h2>
                        </div>

                        {/* Message Content */}
                        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                            {/* Photo placeholder */}
                            <div className="lg:col-span-1">
                                <div className="aspect-[3/4] bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-24 h-24 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Users className="w-12 h-12 text-amber-500" />
                                        </div>
                                        <p className="text-slate-500 text-sm">代表者写真</p>
                                    </div>
                                </div>
                                <div className="mt-4 text-center">
                                    <p className="font-bold text-slate-900">代表取締役</p>
                                    <p className="text-amber-600 text-lg font-bold">山田 太郎</p>
                                </div>
                            </div>

                            {/* Message text */}
                            <div className="lg:col-span-2 space-y-6">
                                <div className="p-6 bg-amber-50 rounded-2xl border-l-4 border-amber-500">
                                    <p className="text-xl font-bold text-slate-900 leading-relaxed">
                                        「ホームページがないと信用されない」<br />
                                        そう言われて困っている方の力になりたい。
                                    </p>
                                </div>

                                <p className="text-slate-600 leading-relaxed">
                                    はじめまして。EasyWeb代表の山田です。
                                </p>

                                <p className="text-slate-600 leading-relaxed">
                                    私がこのサービスを始めたきっかけは、ある工務店の社長さんとの出会いでした。
                                    「息子に『ホームページがないと信用されないよ』と言われたけど、
                                    業者に頼んだら100万円以上って言われて…もう諦めようかと思ってる」
                                </p>

                                <p className="text-slate-600 leading-relaxed">
                                    そのとき、<strong className="text-slate-900">「これはおかしい」</strong>と思いました。
                                    真面目に仕事をしている人が、ホームページがないだけで信用されない。
                                    でも作ろうとすると、とんでもない金額を請求される。
                                </p>

                                <p className="text-slate-600 leading-relaxed">
                                    だから私は決めました。
                                    <strong className="text-slate-900">「わかりやすい言葉」</strong>と
                                    <strong className="text-slate-900">「透明な料金」</strong>で、
                                    中小企業や個人事業主の皆様のホームページ制作をお手伝いしよう、と。
                                </p>

                                <p className="text-slate-600 leading-relaxed">
                                    パソコンが苦手でも大丈夫です。専門用語は使いません。<br />
                                    あなたは話すだけ。あとは私たちがカタチにします。
                                </p>

                                <p className="text-amber-600 font-bold text-lg">
                                    「ホームページを持てた」という安心を、一人でも多くの方に届けたい。<br />
                                    それが、EasyWebの想いです。
                                </p>
                            </div>
                        </div>

                        {/* Values */}
                        <div className="mt-20 grid md:grid-cols-3 gap-6">
                            <ValueCard
                                icon={<Heart className="w-6 h-6" />}
                                title="わかりやすさ"
                                description="専門用語は使いません。お客様が理解できる言葉でご説明します。"
                            />
                            <ValueCard
                                icon={<Target className="w-6 h-6" />}
                                title="透明な料金"
                                description="「思ったより高くなった」はありません。最初にすべてお伝えします。"
                            />
                            <ValueCard
                                icon={<Users className="w-6 h-6" />}
                                title="寄り添うサポート"
                                description="作って終わりではありません。公開後もずっとお付き合いします。"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Info Section */}
            <section className="py-16 lg:py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-1.5 bg-white text-slate-600 text-sm font-medium rounded-full mb-4 border border-slate-200">
                                Company
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                                会社情報
                            </h2>
                        </div>

                        {/* Info Table */}
                        <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 overflow-hidden">
                            <table className="w-full">
                                <tbody className="divide-y divide-slate-100">
                                    <InfoRow icon={<Building />} label="会社名" value="EasyWeb（イージーウェブ）" />
                                    <InfoRow icon={<Users />} label="代表者" value="山田 太郎" />
                                    <InfoRow icon={<MapPin />} label="所在地" value="〒000-0000 東京都○○区○○1-2-3 ○○ビル5F" />
                                    <InfoRow icon={<Phone />} label="電話番号" value="000-0000-0000" />
                                    <InfoRow icon={<Mail />} label="メール" value="info@easyweb.jp" />
                                    <InfoRow icon={<Clock />} label="営業時間" value="平日 10:00〜18:00（土日祝休み）" />
                                    <InfoRow icon={<Target />} label="事業内容" value="Webサイト制作、LP制作、更新代行サービス" />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Access Map Section */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 text-sm font-medium rounded-full mb-4">
                                Access
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                                アクセス
                            </h2>
                            <p className="text-slate-600">
                                ※ オンラインでのお打ち合わせも可能です
                            </p>
                        </div>

                        {/* Map Placeholder */}
                        <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <MapPin className="w-8 h-8 text-amber-500" />
                                </div>
                                <p className="text-slate-500 font-medium">Google Map</p>
                                <p className="text-slate-400 text-sm mt-1">※ 実際の地図はこちらに埋め込みます</p>
                            </div>
                        </div>

                        {/* Access info */}
                        <div className="mt-8 grid md:grid-cols-2 gap-6">
                            <div className="p-6 bg-slate-50 rounded-xl">
                                <h4 className="font-bold text-slate-900 mb-2">電車でお越しの場合</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    ○○線「○○駅」徒歩5分<br />
                                    ○○線「○○駅」徒歩7分
                                </p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-xl">
                                <h4 className="font-bold text-slate-900 mb-2">オンラインでのお打ち合わせ</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    LINE、Chatwork、メール、お電話にて<br />
                                    全国どこからでもご相談いただけます。
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-12 text-center">
                            <a
                                href="/#contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 font-bold text-lg rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
                            >
                                無料相談はこちら
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

// Value Card Component
const ValueCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
}> = ({ icon, title, description }) => (
    <div className="p-6 bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 text-center">
        <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-amber-500">
            {icon}
        </div>
        <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
        <p className="text-slate-600 text-sm">{description}</p>
    </div>
);

// Info Row Component
const InfoRow: React.FC<{
    icon: React.ReactNode;
    label: string;
    value: string;
}> = ({ icon, label, value }) => (
    <tr className="hover:bg-slate-50 transition-colors">
        <td className="px-6 py-4 w-1/3">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-500">
                    {icon}
                </div>
                <span className="font-medium text-slate-900">{label}</span>
            </div>
        </td>
        <td className="px-6 py-4 text-slate-600">{value}</td>
    </tr>
);
