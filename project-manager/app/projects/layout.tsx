//
//      Нужен для создания общего состояния для всех страниц внутри /projects
//

import type { ReactNode } from 'react';

import { ProjectProvider } from '@/components/projects/ProjectProvider';

interface ProjectsLayoutProps {
  children: ReactNode;
}

export default function ProjectsLayout({
  children,
}: ProjectsLayoutProps) {
  return (
    <ProjectProvider>
      {children}
    </ProjectProvider>
  );
}