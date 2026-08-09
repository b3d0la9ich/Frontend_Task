//
//      Нужен для отображения страницы конкретного проекта
//

'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import { useProjects } from '@/components/projects/ProjectProvider';

export function ProjectDetails() {
  const params = useParams<{ id: string }>();
  const { projects } = useProjects();

  const project = projects.find(
    (project) => project.id === params.id
  );

  if (!project) {
    return (
      <div className="rounded-xl border border-gray-700 bg-gray-900 p-6">
        <h1 className="text-3xl font-bold text-white">
          Project not found
        </h1>

        <p className="mt-4 text-gray-300">
          The project you are looking for does not exist.
        </p>

        <Link
          href="/projects"
          className="mt-6 inline-block text-blue-400 hover:underline"
        >
          ← Back to projects
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-white p-6">
      <div className="flex items-start justify-between gap-4">
        <h1 className="text-3xl font-bold text-gray-900">
          {project.name}
        </h1>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
          {project.status}
        </span>
      </div>

      <p className="mt-4 text-gray-700">
        {project.description}
      </p>

      <div className="mt-6 space-y-2 text-gray-700">
        <p>
          <strong>Author:</strong> {project.author}
        </p>

        <p>
          <strong>Created:</strong> {project.createdAt}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-700"
          >
            {technology}
          </span>
        ))}
      </div>

      <Link
        href="/projects"
        className="mt-8 inline-block text-blue-600 hover:underline"
      >
        ← Back to projects
      </Link>
    </div>
  );
}