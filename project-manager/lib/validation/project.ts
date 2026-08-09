//
//      Для единой схемы валидации формы проекта
//

import { z } from 'zod';

export const projectFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Name is required.'),

  description: z
    .string()
    .trim()
    .min(1, 'Description is required.'),

  status: z.enum([
    'planned',
    'in-progress',
    'completed',
  ]),

  author: z
    .string()
    .trim()
    .min(1, 'Author is required.'),

  technologies: z
    .string()
    .trim()
    .min(1, 'Technologies are required.'),
});

export type ProjectFormData = z.infer<
  typeof projectFormSchema
>;