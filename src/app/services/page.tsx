import Wrap from "../components/Wrap";

export default function Services() {
  return (
    <Wrap>
      <main className="mx-auto max-w-3xl px-5 py-16 text-gray-800 dark:text-gray-100">
        <h1 className="text-3xl font-bold mb-6">サービス</h1>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-800">
            <h2 className="font-semibold mb-1">フロントエンド開発</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">Next.js/TypeScriptでのUI実装、パフォーマンス最適化</p>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-800">
            <h2 className="font-semibold mb-1">UX改善/設計</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">情報設計、デザイン調整、アクセシビリティ対応</p>
          </div>
        </div>
      </main>
    </Wrap>
  );
}


