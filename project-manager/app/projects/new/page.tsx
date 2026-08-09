//
//      Страница для создания проекта
//

import Link from 'next/link';

import { ProjectForm } from '@/components/projects/ProjectForm';

export default function NewProjectPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <Link
        href="/projects"
        className="mb-6 inline-block text-blue-400 hover:underline"
      >
        ← Back to projects
      </Link>

      <h1 className="mb-6 text-3xl font-bold text-white">
        Create project
      </h1>

      <ProjectForm />
    </main>
  );
}