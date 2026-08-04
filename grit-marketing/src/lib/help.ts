/** Display metadata for help categories, in the order they appear on /help.
    Slugs must match HELP_CATEGORIES in src/content.config.ts (and the folder
    names under src/content/help/). */
export const HELP_CATEGORY_META = [
  { slug: 'getting-started', label: 'Getting Started', blurb: 'Your first day on GRIT — setup, onboarding, and finding your way around.' },
  { slug: 'scheduling', label: 'Scheduling', blurb: 'Appointments, provider schedules, and appointment types.' },
  { slug: 'patients-intake', label: 'Patients & Intake', blurb: 'Patient records, intake forms, and demographics.' },
  { slug: 'notes-macros', label: 'Notes & Macros', blurb: 'Clinical notes, the Initial Eval, signing, and macros.' },
  { slug: 'payments', label: 'Payments', blurb: 'Charging patients, balances, receipts, and refunds.' },
  { slug: 'sms-reminders', label: 'Text Reminders & SMS', blurb: 'Setting up texting, appointment reminders, and patient consent.' },
  { slug: 'imports', label: 'Bringing Your Data', blurb: 'Moving patients, insurance, and appointments in from your old system.' },
  { slug: 'patient-portal', label: 'Patient Portal', blurb: 'What your patients see — booking, forms, messages, and payments.' },
] as const;

export type HelpCategorySlug = (typeof HELP_CATEGORY_META)[number]['slug'];

export const categoryLabel = (slug: string): string =>
  HELP_CATEGORY_META.find((c) => c.slug === slug)?.label ?? slug;
