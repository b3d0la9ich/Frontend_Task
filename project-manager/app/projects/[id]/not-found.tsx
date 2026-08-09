//
//      Для обработки состояния когда проект с конкретным айди не найден
//

import Link from 'next/link';

export default function ProjectNotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <div className="rounded-xl border border-gray-700 bg-gray-900 p-6">
        <h1 className="text-3xl font-bold text-white">
          Project not found
        </h1>

        <p className="mt-3 text-gray-667">
          The project you are looking for does not exist.
        </p>

        <Link
          href="/projects"
          className="mt-6 inline-block text-blue-400 hover:underline"
        >
          ← Back to projects
        </Link>
      </div>
    </main>
  );
}