import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cursos = defineCollection({
  loader: glob({ base: './src/content/cursos', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    titulo: z.string(),
    descricao: z.string(),
    categoria: z.enum(['acrobacia', 'aéreo', 'dança', 'teatro', 'infantil']),
    nivel: z.enum(['iniciante', 'intermediário', 'avançado', 'todos os níveis']),
    duracao: z.string(),
    diasSemana: z.array(z.string()),
    horario: z.string(),
    professor: z.string().optional(),
    imagemUrl: z.string().optional(),
    vagas: z.number().optional(),
    preco: z.string().optional(),
    destaque: z.boolean().default(false),
    ativo: z.boolean().default(true),
    ordem: z.number().default(99),
  }),
});

const agenda = defineCollection({
  loader: glob({ base: './src/content/agenda', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    titulo: z.string(),
    descricao: z.string().optional(),
    tipo: z.enum(['aula', 'workshop', 'espetáculo', 'evento', 'feriado']),
    dataInicio: z.coerce.date(),
    dataFim: z.coerce.date().optional(),
    horario: z.string().optional(),
    local: z.string().optional(),
    vagas: z.number().optional(),
    inscricaoLink: z.string().url().optional(),
    destaque: z.boolean().default(false),
  }),
});

export const collections = { cursos, agenda };
