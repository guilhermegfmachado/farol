import { defineCollection, z } from 'astro:content';

const sectionSchema = z.object({
  label: z.string(),
  items: z.array(z.string()),
});

const entrySchema = z.object({
  index: z.string(),
  title: z.string(),
  category: z.string(),
  subtitle: z.string(),
  desc: z.string(),
  sections: z.array(sectionSchema),
  pending: z.string().optional(),
});

const profiles = defineCollection({ type: 'content', schema: entrySchema });
const references = defineCollection({ type: 'content', schema: entrySchema });

export const collections = { profiles, references };
