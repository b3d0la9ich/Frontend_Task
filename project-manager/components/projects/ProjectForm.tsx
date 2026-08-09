//
//      Форма для создания проекта
//

'use client';

import { useState } from 'react';

export function ProjectForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('planned');
  const [author, setAuthor] = useState('');
  const [technologies, setTechnologies] = useState('');

  return (
    <form className="space-y-5">
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
          onChange={(event) => setName(event.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900"
        />
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
          onChange={(event) => setDescription(event.target.value)}
          className="min-h-32 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900"
        />
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
          onChange={(event) => setStatus(event.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900"
        >
          <option value="planned">Planned</option>
          <option value="in-progress">In progress</option>
          <option value="completed">Completed</option>
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
          onChange={(event) => setAuthor(event.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900"
        />
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
          onChange={(event) => setTechnologies(event.target.value)}
          placeholder="Next.js, TypeScript, Tailwind CSS"
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900"
        />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-500"
      >
        Create project
      </button>
    </form>
  );
}