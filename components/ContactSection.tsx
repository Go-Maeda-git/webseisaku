"use client";

import React, { useState } from "react";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        companyName: "",
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(false);

        try {
            const response = await fetch("https://formspree.io/f/xqebgkwq", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    companyName: formData.companyName,
                    message: formData.message,
                }),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({
                    companyName: "",
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                });
            } else {
                setSubmitError(true);
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactMethods = [
        {
            icon: <MessageCircle className="w-6 h-6" />,
            title: "LINE",
            description: "気軽にチャット",
            href: "https://line.me",
            color: "text-green-500",
            bgColor: "bg-green-50",
        },
        {
            icon: <MessageCircle className="w-6 h-6" />,
            title: "Chatwork",
            description: "ビジネスチャット",
            href: "#",
            color: "text-red-500",
            bgColor: "bg-red-50",
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "メール",
            description: "24時間受付",
            href: "mailto:info@easyweb.jp",
            color: "text-amber-500",
            bgColor: "bg-amber-50",
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "電話",
            description: "直接お話し",
            href: "tel:000-0000-0000",
            color: "text-pink-500",
            bgColor: "bg-pink-50",
        },
    ];

    return (
        <section
            id="contact"
            className="py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-100/50 to-transparent rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                        すべてオンラインで完結
                    </h2>
                    <p className="text-lg text-slate-600">
                        対面は不要。お好きな方法でご連絡ください。
                    </p>
                </div>

                {/* Contact Methods Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto mb-16">
                    {contactMethods.map((method, index) => (
                        <a
                            key={index}
                            href={method.href}
                            className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all duration-300 text-center"
                        >
                            <div className={`inline-flex items-center justify-center w-14 h-14 ${method.bgColor} ${method.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform`}>
                                {method.icon}
                            </div>
                            <h3 className="font-bold text-slate-900 mb-1">{method.title}</h3>
                            <p className="text-sm text-slate-500">{method.description}</p>
                        </a>
                    ))}
                </div>

                {/* Contact Form */}
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-slate-100">
                        {isSubmitted ? (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        className="w-8 h-8 text-green-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">
                                    送信が完了しました！
                                </h4>
                                <p className="text-slate-600 mb-6">
                                    翌営業日までにご連絡いたします。
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="text-amber-600 hover:text-amber-700 text-sm font-medium"
                                >
                                    新しいお問い合わせをする
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {submitError && (
                                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-600 text-sm">
                                        送信に失敗しました。もう一度お試しください。
                                    </div>
                                )}

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            会社名・屋号 <span className="text-slate-400">(任意)</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="companyName"
                                            placeholder="株式会社〇〇"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            お名前 <span className="text-amber-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="山田 太郎"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            メールアドレス <span className="text-amber-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="example@email.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            電話番号 <span className="text-slate-400">(任意)</span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="090-0000-0000"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        ご相談内容 <span className="text-slate-400">(任意)</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        placeholder="ご質問やご要望があればお書きください"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full group px-6 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 disabled:from-slate-300 disabled:to-slate-300 text-white disabled:text-slate-500 font-bold text-lg rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 transform hover:-translate-y-0.5 disabled:transform-none disabled:cursor-not-allowed"
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        {isSubmitting ? (
                                            <>
                                                <svg
                                                    className="animate-spin w-5 h-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    />
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    />
                                                </svg>
                                                送信中...
                                            </>
                                        ) : (
                                            <>
                                                無料で相談する
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </span>
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
