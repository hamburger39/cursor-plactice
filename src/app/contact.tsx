import Wrap from "./components/Wrap";

export default function Contact() {
  return (
    <Wrap>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-200 mb-4">お問い合わせ</h1>
        <a href="mailto:khhira3229@gmail.com?subject=お問い合わせ" className="text-blue-600 dark:text-blue-400 hover:underline">メールで連絡</a>
      </main>
    </Wrap>
  );
} 