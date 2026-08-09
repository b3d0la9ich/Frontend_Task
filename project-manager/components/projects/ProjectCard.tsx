//
//      Компонент одной карточки проекта
//

import Link from 'next/link'; // Для переходов между страницами приложухи

import type { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            {project.name}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {project.author}
          </p>
        </div>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
          {project.status}
        </span>
      </div>

      <p className="mb-4 text-gray-600">
        {project.description}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md bg-gray-100 px-2 py-1 text-sm text-gray-700"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">
          {project.createdAt}
        </span>

        <Link
          href={`/projects/${project.id}`}
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          View project
        </Link>
      </div>
    </article>
  );
}


/* 
rounded-xl       - скругление углов
border           - рамка
border-gray-200  - цвет рамки
bg-white         - белый фон
p-5              - внутренние отступы
shadow-sm        - небольшая тень
*/