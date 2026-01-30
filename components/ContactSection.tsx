"use client";

import React, { useState } from "react";
import { Send, Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";

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

    return (
        <section
            id="contact"
            className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -right-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-12 lg:mb-16">
                    <span className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium rounded-full mb-4">
                        Contact
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        まずは
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                            無料相談
                        </span>
                        から
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        「まだ決めてないけど話を聞いてみたい」という方も大歓迎です。<br />
                        強引な営業は一切しません。お気軽にどうぞ。
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
                    {/* Left: Contact info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">
                                お問い合わせ方法
                            </h3>
                            <p className="text-slate-400 mb-8">
                                フォームからのお問い合わせは24時間受付中。<br />
                                翌営業日までにお返事いたします。
                            </p>
                        </div>

                        {/* Contact methods */}
                        <div className="space-y-4">
                            <ContactMethod
                                icon={<Phone className="w-5 h-5" />}
                                title="お電話"
                                description="平日 10:00〜18:00"
                                value="000-0000-0000"
                                href="tel:000-0000-0000"
                            />
                            <ContactMethod
                                icon={<Mail className="w-5 h-5" />}
                                title="メール"
                                description="24時間受付"
                                value="info@easyweb.jp"
                                href="mailto:info@easyweb.jp"
                            />
                            <ContactMethod
                                icon={<MessageCircle className="w-5 h-5" />}
                                title="LINE"
                                description="気軽にチャット"
                                value="@easyweb"
                                href="https://line.me"
                            />
                        </div>

                        {/* Trust badges */}
                        <div className="pt-6 border-t border-slate-700/50">
                            <p className="text-sm text-slate-500 mb-4">安心してご相談ください</p>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-3 py-1.5 bg-slate-800/50 text-slate-400 text-sm rounded-lg border border-slate-700/50">
                                    ✓ 相談無料
                                </span>
                                <span className="px-3 py-1.5 bg-slate-800/50 text-slate-400 text-sm rounded-lg border border-slate-700/50">
                                    ✓ 強引な営業なし
                                </span>
                                <span className="px-3 py-1.5 bg-slate-800/50 text-slate-400 text-sm rounded-lg border border-slate-700/50">
                                    ✓ 秘密厳守
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact form */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-700/50">
                        {isSubmitted ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        className="w-8 h-8 text-green-400"
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
                                <h4 className="text-xl font-bold text-white mb-2">
                                    送信が完了しました！
                                </h4>
                                <p className="text-slate-400 mb-6">
                                    ありがとうございます。<br />
                                    翌営業日までにご連絡いたします。
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="text-amber-400 hover:text-amber-300 text-sm underline"
                                >
                                    新しいお問い合わせをする
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {submitError && (
                                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 text-sm">
                                        送信に失敗しました。お手数ですが、もう一度お試しいただくか、お電話でご連絡ください。
                                    </div>
                                )}

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <FormInput
                                        label="会社名・屋号"
                                        name="companyName"
                                        type="text"
                                        placeholder="株式会社〇〇"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        required={false}
                                    />
                                    <FormInput
                                        label="お名前"
                                        name="name"
                                        type="text"
                                        placeholder="山田 太郎"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required={true}
                                    />
                                </div>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <FormInput
                                        label="メールアドレス"
                                        name="email"
                                        type="email"
                                        placeholder="example@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required={true}
                                    />
                                    <FormInput
                                        label="電話番号"
                                        name="phone"
                                        type="tel"
                                        placeholder="090-0000-0000"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required={false}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        ご相談内容
                                        <span className="text-slate-500 ml-1">(任意)</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        placeholder="ご質問やご要望があればお書きください"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full group px-6 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 active:from-amber-600 active:to-amber-700 disabled:from-slate-600 disabled:to-slate-600 text-slate-900 disabled:text-slate-400 font-bold text-lg rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 active:shadow-none transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] disabled:transform-none disabled:cursor-not-allowed"
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
                                                無料相談を申し込む
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </span>
                                </button>

                                <p className="text-center text-sm text-slate-500">
                                    ※ ご入力いただいた情報は、お問い合わせ対応のみに使用します
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Contact method card
const ContactMethod: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
    value: string;
    href: string;
}> = ({ icon, title, description, value, href }) => (
    <a
        href={href}
        className="flex items-center gap-4 p-4 bg-slate-800/30 hover:bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-amber-500/30 transition-all duration-300 group"
    >
        <div className="flex items-center justify-center w-12 h-12 bg-amber-500/10 text-amber-400 rounded-xl group-hover:bg-amber-500/20 transition-colors">
            {icon}
        </div>
        <div>
            <div className="flex items-center gap-2">
                <span className="font-medium text-white">{title}</span>
                <span className="text-xs text-slate-500">{description}</span>
            </div>
            <span className="text-amber-400">{value}</span>
        </div>
    </a>
);

// Form input component
const FormInput: React.FC<{
    label: string;
    name: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required: boolean;
}> = ({ label, name, type, placeholder, value, onChange, required }) => (
    <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
            {label}
            {required ? (
                <span className="text-amber-400 ml-1">*</span>
            ) : (
                <span className="text-slate-500 ml-1">(任意)</span>
            )}
        </label>
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all"
        />
    </div>
);

export default ContactSection;
