'use client';

import { useParams } from "next/navigation";
import Wrap from "../../components/Wrap";

export default function BlogPost() {
  const params = useParams();
  const { slug } = params;

  return (
    <Wrap>
      <main className="mx-auto max-w-3xl px-5 py-16 text-gray-800 dark:text-gray-100">
        <h1 className="text-3xl font-bold mb-6">{String(slug)}</h1>
        <article className="prose dark:prose-invert max-w-none">
          <p>この記事はダミーです。Markdown対応などに拡張可能です。</p>
        </article>
      </main>
    </Wrap>
  );
}


