//
//      Для описания типов данных для проектов и формы создания проекта
//

export type ProjectStatus = 'planned' | 'in-progress' | 'completed';

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  createdAt: string;
  author: string;
  technologies: string[];
}

export interface CreateProjectInput {
  name: string;
  description: string;
  status: ProjectStatus;
  author: string;
  technologies: string[];
}