'use client';

import ThemeToggle from "./components/ThemeToggle";
import { Button } from "antd";
import Image from "next/image";
import useSWR from "swr";

export default function Home() {
  const fetcher = (url: string) => fetch(url).then(res => res.json());
  const { data, error } = useSWR("https://api.github.com/users/hamburger39", fetcher);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-6 transition-colors duration-200">
      <div className="flex gap-2 items-center mb-4">
      <ThemeToggle />
        <Button type="primary" href="/profile">プロフィール</Button>
        <Button type="default" href="/projects">プロジェクト</Button>
        <Button type="dashed" href="/contact">お問い合わせ</Button>
      </div>
      <header className="mb-8 flex flex-col items-center">
        <div className="w-30 h-30 rounded-full border-4 border-blue-300 dark:border-blue-500 shadow-lg mb-4 transition-colors duration-200 bg-gradient-to-br from-blue-400 to-purple-500 dark:from-blue-700 dark:to-purple-900 flex items-center justify-center">
          <span className="text-white text-4xl font-bold">平</span>
        </div>
        <h1 className="text-3xl text-gray-600 dark:text-gray-200 font-bold mb-2 transition-colors duration-200">平林 佳祐</h1>
        <p className="text-gray-600 dark:text-gray-300 text-center text-sm sm:text-base transition-colors duration-200">フロントエンドエンジニア / Next.js & TypeScript</p>
      </header>
      <main className="w-full max-w-xl bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 transition-colors duration-200">
        {/* SWRによるAPIフェッチサンプル */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2 text-gray-600 dark:text-gray-200">GitHub情報（SWR）</h2>
          {error && <div className="text-red-500">取得失敗</div>}
          {!data && !error && <div className="text-gray-400">読み込み中...</div>}
          {data && (
            <div className="flex items-center gap-4">
              <Image src={data.avatar_url} alt="avatar" width={40} height={40} className="w-10 h-10 rounded-full" />
              <div>
                <div className="font-bold text-gray-700 dark:text-gray-200">{data.login}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{data.bio}</div>
              </div>
            </div>
          )}
        </section>
        <section className="mb-6">
          <h2 className="text-xl text-gray-600 dark:text-gray-200 font-semibold mb-2 border-l-4 border-blue-400 dark:border-blue-500 pl-2 transition-colors duration-200">自己紹介</h2>
          <p className="text-gray-700 dark:text-gray-300 transition-colors duration-200">
            Web開発初心者のエンジニアです。Next.jsやTypeScriptを中心に、ユーザー体験を重視した開発を行っています。
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl text-gray-600 dark:text-gray-200 font-semibold mb-2 border-l-4 border-blue-400 dark:border-blue-500 pl-2 transition-colors duration-200">スキル</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 transition-colors duration-200">
            <li>Next.js / React</li>
            <li>TypeScript / JavaScript</li>
            <li>TailwindCSS / CSS</li>
            <li>UI/UX設計</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl text-gray-600 dark:text-gray-200 font-semibold mb-2 border-l-4 border-blue-400 dark:border-blue-500 pl-2 transition-colors duration-200">実績</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 transition-colors duration-200">
            <li>ポートフォリオサイト制作</li>
            <li>企業向けWebアプリ開発</li>
          </ul>
        </section>
      </main>
      <footer className="flex gap-4">
        <a
          href="https://twitter.com/your_twitter"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black dark:text-gray-200 hover:underline transition-colors duration-200"
        >
          X
        </a>
        <a
          href="https://github.com/hamburger39"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-200 hover:underline transition-colors duration-200"
        >
          GitHub
        </a>
        <a
          href="mailto:khhira3229@gmail.com?subject=お問い合わせ"
          className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-200"
        >
          Email
        </a>
      </footer>
    </div>
  );
}
