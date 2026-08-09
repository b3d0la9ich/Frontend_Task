'use client';

interface ProjectsErrorProps {
  error: Error;
  reset: () => void;
}

export default function ProjectsError({
  error,
  reset,
}: ProjectsErrorProps) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <div className="rounded-xl border border-red-900 bg-red-950 p-6">
        <h1 className="text-2xl font-bold text-white">
          Failed to load projects
        </h1>

        <p className="mt-2 text-red-300">
          {error.message || 'Something went wrong.'}
        </p>

        <button
          type="button"
          onClick={reset}
          className="mt-5 rounded-lg bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-500"
        >
          Try again
        </button>
      </div>
    </main>
  );
}

//
//      Для обработки ошибок
//