//
//      Форма для создания проекта
//

'use client';

import { type FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

import { useProjects } from '@/components/projects/ProjectProvider';
import { projectFormSchema } from '@/lib/validation/project';

import type {
  Project,
  ProjectStatus,
} from '@/types/project';

interface FormErrors {
  name?: string;
  description?: string;
  author?: string;
  technologies?: string;
}

export function ProjectForm() {
  const router = useRouter();
  const { addProject } = useProjects();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] =
    useState<ProjectStatus>('planned');
  const [author, setAuthor] = useState('');
  const [technologies, setTechnologies] = useState('');

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const result = projectFormSchema.safeParse({
      name,
      description,
      status,
      author,
      technologies,
    });

    if (!result.success) {
      const fieldErrors: FormErrors = {};

      result.error.issues.forEach((issue) => {
        const field = issue.path[0];

        if (
          field === 'name' ||
          field === 'description' ||
          field === 'author' ||
          field === 'technologies'
        ) {
          fieldErrors[field] = issue.message;
        }
      });

      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });

      const newProject: Project = {
        id: crypto.randomUUID(),
        name: result.data.name,
        description: result.data.description,
        status: result.data.status,
        author: result.data.author,
        technologies: result.data.technologies
          .split(',')
          .map((technology) => technology.trim())
          .filter(Boolean),
        createdAt: new Date()
          .toISOString()
          .split('T')[0],
      };

      addProject(newProject);

      router.push('/projects');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-white"
        >
          Name
        </label>

        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900"
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="description"
          className="mb-2 block text-sm font-medium text-white"
        >
          Description
        </label>

        <textarea
          id="description"
          value={description}
          onChange={(event) =>
            setDescription(event.target.value)
          }
          className="min-h-32 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900"
        />

        {errors.description && (
          <p className="mt-1 text-sm text-red-400">
            {errors.description}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="status"
          className="mb-2 block text-sm font-medium text-white"
        >
          Status
        </label>

        <select
          id="status"
          value={status}
          onChange={(event) =>
            setStatus(
              event.target.value as ProjectStatus,
            )
          }
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900"
        >
          <option value="planned">
            Planned
          </option>

          <option value="in-progress">
            In progress
          </option>

          <option value="completed">
            Completed
          </option>
        </select>
      </div>

      <div>
        <label
          htmlFor="author"
          className="mb-2 block text-sm font-medium text-white"
        >
          Author
        </label>

        <input
          id="author"
          type="text"
          value={author}
          onChange={(event) =>
            setAuthor(event.target.value)
          }
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900"
        />

        {errors.author && (
          <p className="mt-1 text-sm text-red-400">
            {errors.author}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="technologies"
          className="mb-2 block text-sm font-medium text-white"
        >
          Technologies
        </label>

        <input
          id="technologies"
          type="text"
          value={technologies}
          onChange={(event) =>
            setTechnologies(event.target.value)
          }
          placeholder="Next.js, TypeScript, Tailwind CSS"
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900"
        />

        {errors.technologies && (
          <p className="mt-1 text-sm text-red-400">
            {errors.technologies}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting
          ? 'Saving...'
          : 'Create project'}
      </button>
    </form>
  );
}