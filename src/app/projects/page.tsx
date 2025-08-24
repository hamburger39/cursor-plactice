import Wrap from "../components/Wrap";

export default function Projects() {
  return (
    <Wrap>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-200 mb-4">プロジェクト</h1>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>ポートフォリオサイト</li>
          <li>企業向けWebアプリ</li>
        </ul>
      </main>
    </Wrap>
  );
}


