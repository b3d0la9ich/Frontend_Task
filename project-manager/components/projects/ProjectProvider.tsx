//
//      Нужен для хранения общего массива проектов
//

'use client';

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react';

import { projects as initialProjects } from '@/data/projects';

import type { Project } from '@/types/project';

interface ProjectContextValue {
  projects: Project[];
  addProject: (project: Project) => void;
}

interface ProjectProviderProps {
  children: ReactNode;
}

const ProjectContext = createContext<ProjectContextValue | undefined>(
  undefined,
);

export function ProjectProvider({
  children,
}: ProjectProviderProps) {
  const [projects, setProjects] =
    useState<Project[]>(initialProjects);

  function addProject(project: Project) {
    setProjects((currentProjects) => [
      project,
      ...currentProjects,
    ]);
  }

  return (
    <ProjectContext.Provider
      value={{
        projects,
        addProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectContext);

  if (!context) {
    throw new Error(
      'useProjects must be used inside ProjectProvider',
    );
  }

  return context;
}