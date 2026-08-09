//
//      Для описания типов данных, которые апи будет возвращать
//

import type { Project } from '@/types/project';

export interface ProjectsResponse {
  data: Project[];
}

export interface ProjectResponse {
  data: Project;
}

export interface CreateProjectResponse {
  data: Project;
  message: string;
}

export interface ApiErrorResponse {
  message: string;
}