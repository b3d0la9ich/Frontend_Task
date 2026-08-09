//
//      Страница одного конкретного проекта
//

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { id } = await params;

  const project = projects.find(
    (project) => project.id === id,
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <Link
        href="/projects"
        className="mb-6 inline-block text-blue-400 hover:underline"
      >
        ← Back to projects
      </Link>

      <article className="rounded-xl border border-gray-700 bg-gray-900 p-6">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-3xl font-bold text-white">
              {project.name}
            </h1>

            <p className="mt-2 text-gray-400">
              {project.author}
            </p>
          </div>

          <span className="rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-200">
            {project.status}
          </span>
        </div>

        <p className="mb-6 text-gray-300">
          {project.description}
        </p>

        <div className="mb-6">
          <h2 className="mb-2 text-lg font-semibold text-white">
            Technologies
          </h2>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md bg-gray-800 px-3 py-1 text-sm text-gray-200"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <p className="text-sm text-gray-400">
          Created: {project.createdAt}
        </p>
      </article>
    </main>
  );
}