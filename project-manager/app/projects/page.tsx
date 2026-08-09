//
//      Отвечает за страницу со списком всех проектов
//

import Link from 'next/link';

import { ProjectsClient } from '@/components/projects/ProjectsClient';

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-white">
          Projects
        </h1>

        <Link
          href="/projects/new"
          className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-500"
        >
          Create project
        </Link>
      </div>

      <ProjectsClient />
    </main>
  );
}