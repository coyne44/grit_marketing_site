/** Single source of truth for facts the site states in more than one place.
    Pages and JSON-LD read from here so a pricing or CTA change is one edit. */

export const PRICING = {
  /** $/month — 1 provider, unlimited staff accounts, everything included. */
  base: 49,
  /** $/month per additional provider. */
  perProvider: 20,
  /** $/month — optional insurance billing add-on (practice brings its own
      Claim.MD account; support relationship stays with Claim.MD). */
  insuranceAddon: 20,
} as const;

/** The primary conversion CTA, everywhere it appears (nav, hero, page-bottom
    bands). Provision-day flip from waitlist to signup = edit this object only. */
export const CTA = {
  label: 'Join the Waitlist',
  href: '/waitlist',
} as const;

/** Reserved demo slot. When the interactive "Try GRIT" demo ships, set its URL
    here and the Hero's secondary button becomes "Try the demo" — no redesign. */
export const DEMO_URL: string | null = null;

export const CONTACT_EMAIL = 'hello@chiropracticgrit.com';

export const TAGLINE = 'Less business. More practice.';
