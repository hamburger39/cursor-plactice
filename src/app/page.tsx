import Image from "next/image";
import Head from 'next/head';

<Head>
  <title>平林佳祐 | フロントエンドエンジニア</title>
  <meta name="description" content="Next.jsとTypeScriptを使った自己紹介ページ" />
</Head>



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <header className="mb-8 flex flex-col items-center">
        <Image
          src="/profile.png"
          alt="平林佳祐のプロフィール画像"
          width={120}
          height={120}
          className="rounded-full border-4 border-blue-300 shadow-lg mb-4"
        />
        <h1 className="text-3xl text-gray-600 font-bold mb-2">平林 佳祐</h1>
        <p className="text-gray-600 text-center text-sm sm:text-base">フロントエンドエンジニア / Next.js & TypeScript</p>
      </header>
      <main className="w-full max-w-xl bg-white rounded-lg shadow-md p-6 mb-8">
        <section className="mb-6">
          <h2 className="text-xl text-gray-600 font-semibold mb-2 border-l-4 border-blue-400 pl-2">自己紹介</h2>
          <p className="text-gray-700">
            Web開発初心者のエンジニアです。Next.jsやTypeScriptを中心に、ユーザー体験を重視した開発を行っています。
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl text-gray-600 font-semibold mb-2 border-l-4 border-blue-400 pl-2">スキル</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Next.js / React</li>
            <li>TypeScript / JavaScript</li>
            <li>TailwindCSS / CSS</li>
            <li>UI/UX設計</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl text-gray-600 font-semibold mb-2 border-l-4 border-blue-400 pl-2">実績</h2>
          <ul className="list-disc list-inside text-gray-700">
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
          className="text-black hover:underline"
        >
          X
        </a>
        <a
          href="https://github.com/hamburger39"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:underline"
        >
          GitHub
        </a>
        <a
          href="mailto:khhira3229@gmail.com?subject=お問い合わせ"
          className="text-blue-600 hover:underline"
        >
          Email
        </a>
      </footer>
    </div>
  );
}
