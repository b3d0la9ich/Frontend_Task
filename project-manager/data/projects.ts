//
// Для хранения тестовых данных проектов, с которыми будем работать
//

import type { Project } from '@/types/project';

// Создаем массив тестовых проектов
export const projects: Project[] = [
  {
    id: '1',
    name: 'Test Project',
    description: 'Basic Project for testing skills.',
    status: 'in-progress',
    createdAt: '2026-08-07',
    author: 'Nick Tolstov',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: '2',
    name: 'Test Project v2',
    description: 'Improved basic project for testing skills.',
    status: 'planned',
    createdAt: '2026-08-08',
    author: 'Ken Kaneki',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: '3',
    name: 'Final Project',
    description: 'Final project for testing skills.',
    status: 'completed',
    createdAt: '2026-08-09',
    author: 'Ulya Monesy',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL'],
  },
];