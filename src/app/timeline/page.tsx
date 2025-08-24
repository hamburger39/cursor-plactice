import Wrap from "../components/Wrap";

export default function Timeline() {
  return (
    <Wrap>
      <main className="mx-auto max-w-3xl px-5 py-16 text-gray-800 dark:text-gray-100">
        <h1 className="text-3xl font-bold mb-6">経歴</h1>
        <ol className="relative border-s border-gray-200 dark:border-gray-700 ms-3">
          <li className="mb-10 ms-6">
            <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900"></span>
            <h3 className="font-semibold">2023 - 現在</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">フロントエンド開発に従事</p>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900"></span>
            <h3 className="font-semibold">2022</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">個人開発・学習開始</p>
          </li>
        </ol>
      </main>
    </Wrap>
  );
}



