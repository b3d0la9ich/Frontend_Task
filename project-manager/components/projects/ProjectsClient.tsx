//
//      Для хранения строки поиска, фильтра проектов и сортировки по дате
//

'use client'; // Обозначает что этот компонент должен работать в браузере и может использовать usestate, обработчики событий и другую клиентскую интерактивность

import { useMemo, useState } from 'react';

import { ProjectList } from '@/components/projects/ProjectList';

import type { Project } from '@/types/project';

interface ProjectsClientProps {
  projects: Project[];
}

type SortOrder = 'newest' | 'oldest';

export function ProjectsClient({ projects }: ProjectsClientProps) {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');

  const filteredProjects = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesSearch = project.name
        .toLowerCase()
        .includes(normalizedSearch);

      const matchesStatus =
        status === 'all' || project.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [projects, search, status]);

  const sortedProjects = useMemo(() => {
    return [...filteredProjects].sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();

      return sortOrder === 'newest'
        ? dateB - dateA
        : dateA - dateB;
    });
  }, [filteredProjects, sortOrder]);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 md:flex-row">
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search projects..."
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 outline-none focus:border-blue-500"
        />

        <select
          value={status}
          onChange={(event) => setStatus(event.target.value)}
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900"
        >
          <option value="all">All statuses</option>
          <option value="planned">Planned</option>
          <option value="in-progress">In progress</option>
          <option value="completed">Completed</option>
        </select>

        <select
          value={sortOrder}
          onChange={(event) =>
            setSortOrder(event.target.value as SortOrder)
          }
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900"
        >
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
        </select>
      </div>

      <ProjectList projects={sortedProjects} />
    </div>
  );
}