//
//      Отвечает за страницу со списком всех проектов
//

import Link from 'next/link';

import { ProjectsClient } from '@/components/projects/ProjectsClient';

export default async function ProjectsPage() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-white">
          Projects
        </h1>

        <Link
          href="/projects/new"
          className="rounded-lg bg-blue-600 px-4 py-2 text-center font-medium text-white hover:bg-blue-500"
        >
          Create project
        </Link>
      </div>

      <ProjectsClient />
    </main>
  );
}