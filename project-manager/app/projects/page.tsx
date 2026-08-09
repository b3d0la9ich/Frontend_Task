//
//      Отвечает за страницу со списком всех проектов
//

import { ProjectsClient } from '@/components/projects/ProjectsClient';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold text-white">
        Projects
      </h1>

      <ProjectsClient projects={projects} />
    </main>
  );
}