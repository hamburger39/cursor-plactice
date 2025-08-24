import Wrap from "../components/Wrap";

export default function Resume() {
  return (
    <Wrap>
      <main className="mx-auto max-w-3xl px-5 py-16 text-gray-800 dark:text-gray-100">
        <h1 className="text-3xl font-bold mb-6">履歴書</h1>
        <section className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">概要</h2>
            <p className="text-gray-600 dark:text-gray-300">フロントエンドを中心に、モダンなWeb開発を行います。</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">学歴・資格</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>学歴サンプル</li>
              <li>資格サンプル</li>
            </ul>
          </div>
        </section>
      </main>
    </Wrap>
  );
}



