//
//      Отвечает за страницу со списком всех проектов
//

import { ProjectCard } from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold text-white">
        Projects
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </main>
  );
}