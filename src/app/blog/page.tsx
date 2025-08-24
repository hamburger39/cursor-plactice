'use client';

import Link from "next/link";
import Wrap from "../components/Wrap";

const posts = [
  { slug: "hello-next", title: "Next.jsで始めるブログ", excerpt: "App Routerでの基本的なページ構成とリンクの作り方。" },
  { slug: "ui-ux-basics", title: "UI/UXの基礎", excerpt: "小さな改善が大きな体験につながる。" },
];

export default function BlogIndex() {
  return (
    <Wrap>
      <main className="mx-auto max-w-3xl px-5 py-16 text-gray-800 dark:text-gray-100">
        <h1 className="text-3xl font-bold mb-6">ブログ</h1>
        <ul className="space-y-4">
          {posts.map((p) => (
            <li key={p.slug} className="rounded-xl border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-800">
              <Link href={`/blog/${p.slug}`} className="text-lg font-semibold hover:underline">
                {p.title}
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{p.excerpt}</p>
            </li>
          ))}
        </ul>
      </main>
    </Wrap>
  );
}


