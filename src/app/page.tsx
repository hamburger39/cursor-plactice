'use client';

import ThemeToggle from "./components/ThemeToggle";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-8 transition-colors duration-200">
      <ThemeToggle />

      <header className="mb-10 text-center">
        <div className="mx-auto mb-5 w-24 h-24 rounded-full border-4 border-blue-300 dark:border-blue-500 shadow-lg bg-gradient-to-br from-blue-400 to-purple-500 dark:from-blue-700 dark:to-purple-900 flex items-center justify-center">
          <span className="text-white text-3xl font-bold">平</span>
        </div>
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100">Keisuke Hirabayashi</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">フロントエンドエンジニア / Next.js & TypeScript</p>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">ようこそ。各ページから詳細をご覧ください。</p>
      </header>

      <nav className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-3xl">
        <Link href="/profile" className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
          <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">プロフィール</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">自己紹介と価値観</div>
        </Link>
        <Link href="/projects" className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
          <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">プロジェクト</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">制作物一覧</div>
        </Link>
        <Link href="/blog" className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
          <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">ブログ</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">技術記事や学び</div>
        </Link>
        <Link href="/skills" className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
          <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">スキル</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">技術スタックと強み</div>
        </Link>
        <Link href="/services" className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
          <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">サービス</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">提供できること</div>
        </Link>
        <Link href="/timeline" className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
          <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">経歴</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">キャリアの歩み</div>
        </Link>
        <Link href="/resume" className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
          <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">履歴書</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">略歴・学歴・資格</div>
        </Link>
        <Link href="/contact" className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
          <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">お問い合わせ</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">ご相談はこちら</div>
        </Link>
        <Link href="/faq" className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
          <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">FAQ</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">よくある質問</div>
        </Link>
      </nav>

      <footer className="mt-10 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Keisuke Hirabayashi
      </footer>
    </div>
  );
}
