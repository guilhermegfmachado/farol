import { defineCollection, z } from 'astro:content';

const sectionSchema = z.object({
  label: z.string(),
  items: z.array(z.string()),
});

const aiToolSchema = z.object({
  tool: z.string(),
  use: z.string(),
  prompt: z.string().optional(),
  caveats: z.string().optional(),
});

const entrySchema = z.object({
  // Two independent sequences: profiles 01-07, references 01-05. `kind` and
  // `order` are the source of truth; the display number is derived from them,
  // so a card cannot drift into the wrong sequence or duplicate a number.
  kind: z.enum(['profile', 'reference']),
  order: z.number().int().positive(),
  title: z.string(),
  category: z.string(),
  subtitle: z.string(),
  desc: z.string(),
  sections: z.array(sectionSchema),
  ai_strategies: z.object({
    pending: z.boolean().default(true),
    tools: z.array(aiToolSchema).default([]),
  }).optional(),
  pending: z.string().optional(),
  related: z.array(z.string()).optional(),
  references: z.array(z.string()).optional(),
});

const toolSchema = z.object({
  name: z.string(),
  url: z.string().optional(),
  category: z.string(),
  desc: z.string(),
  profiles: z.array(z.string()).default([]),
  free: z.boolean().optional(),
});

const profiles   = defineCollection({ type: 'content', schema: entrySchema });
const references = defineCollection({ type: 'content', schema: entrySchema });
const tools      = defineCollection({ type: 'content', schema: toolSchema });

export const collections = { profiles, references, tools };
