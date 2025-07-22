'use client';

import Wrap from "../../components/Wrap";
import { useParams } from "next/navigation";

export default function ProjectDetail() {
  const params = useParams();
  const { id } = params;
  return (
    <Wrap>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-200 mb-4">プロジェクト詳細</h1>
        <p className="text-gray-600 dark:text-gray-300">プロジェクトID: {id}</p>
      </main>
    </Wrap>
  );
} 