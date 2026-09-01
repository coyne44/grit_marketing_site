import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Andrew Coyne'),
    // Short label shown on cards, e.g. "Pricing", "Cash practice", "New grads"
    category: z.string().default('Chiropractic practice'),
    draft: z.boolean().default(false),
  }),
});

// Help center articles live in category folders (src/content/help/<category>/*.md),
// so an article's URL is /help/<category>/<slug>. `category` in frontmatter drives
// grouping on /help and must match one of the values below.
export const HELP_CATEGORIES = [
  'getting-started',
  'scheduling',
  'patients-intake',
  'notes-macros',
  'payments',
  'sms-reminders',
  'imports',
  'patient-portal',
] as const;

const help = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/help' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(HELP_CATEGORIES),
    // Sort position within its category on /help (lower = higher).
    order: z.number().default(0),
    updatedDate: z.coerce.date().optional(),
    // YouTube video ID — when present the article page embeds the video and the
    // article appears on /help/videos.
    videoId: z.string().optional(),
    // Rendered as an FAQ section and emitted as FAQPage JSON-LD.
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, help };
