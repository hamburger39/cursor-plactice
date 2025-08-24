import Wrap from "../components/Wrap";

export default function FAQ() {
  return (
    <Wrap>
      <main className="mx-auto max-w-3xl px-5 py-16 text-gray-800 dark:text-gray-100">
        <h1 className="text-3xl font-bold mb-6">よくある質問</h1>
        <div className="space-y-4">
          <details className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800">
            <summary className="font-medium cursor-pointer">開発の進め方は？</summary>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">要件定義→設計→実装→レビュー→改善の流れで進めます。</p>
          </details>
          <details className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800">
            <summary className="font-medium cursor-pointer">対応可能な時間帯は？</summary>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">平日夜と土日で柔軟に調整可能です。</p>
          </details>
        </div>
      </main>
    </Wrap>
  );
}



