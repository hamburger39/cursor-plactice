import Wrap from "../components/Wrap";

export default function Skills() {
  return (
    <Wrap>
      <main className="mx-auto max-w-3xl px-5 py-16 text-gray-800 dark:text-gray-100">
        <h1 className="text-3xl font-bold mb-6">スキル</h1>
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">フロントエンド</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>React / Next.js</li>
              <li>TypeScript / JavaScript</li>
              <li>Tailwind CSS / CSS Modules</li>
              <li>SWR / React Query</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">バックエンド・その他</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Node.js / REST API</li>
              <li>Go（基礎）</li>
              <li>Docker / GitHub Actions（入門）</li>
            </ul>
          </div>
        </section>
      </main>
    </Wrap>
  );
}


