# GRIT Marketing Website Plan

> Front-facing website for chiropractors to discover and sign up for GRIT CRM

---

## Overview

| Item | Decision |
|------|----------|
| **Domain** | gritcrm.com (or similar - needs to be purchased) |
| **App Domain** | app.gritcrm.com (your Vue/Django app) |
| **Tech Stack** | Astro + Tailwind CSS |
| **Hosting** | Vercel or Netlify (free tier) |
| **Forms** | Formspree, Netlify Forms, or custom to Django backend |
| **Analytics** | Plausible (privacy-friendly) or Google Analytics |

---

## Phase 1: Foundation

### 1.1 Domain & DNS Setup

- [ ] Purchase domain (Namecheap, Cloudflare, Google Domains)
- [ ] Suggested: `gritcrm.com`, `getgrit.io`, `gritchiro.com`
- [ ] Plan DNS structure:
  ```
  gritcrm.com          → Marketing site (Vercel/Netlify)
  app.gritcrm.com      → Vue app (AWS/your hosting)
  api.gritcrm.com      → Django backend (AWS/your hosting)
  ```

### 1.2 Project Setup

```bash
# Create new Astro project
npm create astro@latest grit-marketing

# Select options:
# - Empty project
# - TypeScript: Strict (or No if you prefer)
# - Install dependencies: Yes

cd grit-marketing

# Add Tailwind CSS
npx astro add tailwind

# Add any UI components you want (optional)
npx astro add vue  # If you want Vue islands for interactive bits
```

### 1.3 Project Structure

```
grit-marketing/
├── public/
│   ├── favicon.ico
│   ├── og-image.png          # Social sharing image
│   └── images/
│       ├── hero-screenshot.png
│       ├── features/
│       └── testimonials/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── FeatureCard.astro
│   │   ├── PricingCard.astro
│   │   ├── Testimonial.astro
│   │   ├── ContactForm.astro  # Could be Vue for interactivity
│   │   └── FAQ.astro
│   ├── layouts/
│   │   └── BaseLayout.astro   # Shared head, header, footer
│   ├── pages/
│   │   ├── index.astro        # Homepage
│   │   ├── pricing.astro
│   │   ├── features.astro
│   │   ├── security.astro
│   │   ├── contact.astro
│   │   ├── privacy.astro
│   │   ├── terms.astro
│   │   └── 404.astro
│   └── styles/
│       └── global.css         # Tailwind imports + custom styles
├── astro.config.mjs
├── tailwind.config.cjs        # Use your GRIT brand colors
└── package.json
```

### 1.4 Tailwind Config (Match GRIT Brand)

```javascript
// tailwind.config.cjs
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ember: {
          DEFAULT: '#C74E0E',
          light: '#E56A20',
        },
        charcoal: '#2A2A2A',
        bone: '#F4F1EC',
        iron: '#9A9A9A',
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace'],
        sans: ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

---

## Phase 2: Core Pages

### 2.1 Homepage (`/`)

**Sections to build:**

1. **Hero**
   - Headline: Clear value proposition
   - Subheadline: 1-2 sentences expanding on it
   - CTA button: "Start Free Trial" → links to `app.gritcrm.com/register`
   - Screenshot or product image
   - Optional: "No credit card required"

2. **Problem Statement**
   - "Tired of juggling 5 different tools?"
   - Pain points chiropractors face
   - 3-4 bullet points or icons

3. **Solution/Features Overview**
   - 3-4 feature cards with icons
   - Scheduling, Patient Portal, SOAP Notes, Secure Messaging
   - Each links to `/features` for more detail

4. **Social Proof**
   - Testimonials (even if placeholder initially)
   - "Trusted by X chiropractors" (when you have numbers)
   - HIPAA compliant badge

5. **How It Works**
   - 3 simple steps
   - "Sign up → Import patients → Start scheduling"

6. **Pricing Teaser**
   - Starting price
   - "Simple, transparent pricing"
   - CTA to `/pricing`

7. **Final CTA**
   - Repeat the main call to action
   - "Ready to simplify your practice?"

---

### 2.2 Pricing Page (`/pricing`)

**Sections:**

1. **Pricing Cards**
   ```
   Option A: Single Plan
   ┌─────────────────────────────┐
   │         GRIT Pro            │
   │        $99/month            │
   │                             │
   │  ✓ Unlimited patients       │
   │  ✓ Unlimited appointments   │
   │  ✓ SOAP notes               │
   │  ✓ Patient portal           │
   │  ✓ Secure messaging         │
   │  ✓ Payment processing       │
   │  ✓ HIPAA compliant          │
   │                             │
   │     [Start Free Trial]      │
   └─────────────────────────────┘

   Option B: Two Tiers
   ┌───────────────┐  ┌───────────────┐
   │    Starter    │  │     Pro       │
   │   $49/month   │  │   $99/month   │
   │               │  │               │
   │  Up to 100    │  │  Unlimited    │
   │  patients     │  │  patients     │
   │               │  │               │
   │  Core features│  │  All features │
   └───────────────┘  └───────────────┘
   ```

2. **Feature Comparison Table**
   - Detailed breakdown of what's included
   - Checkmarks for each tier

3. **FAQ Section**
   - "Is there a free trial?"
   - "Can I cancel anytime?"
   - "Is my data secure?"
   - "Do you offer a BAA?"
   - "What payment methods do you accept?"

4. **CTA**
   - "Questions? Contact us"
   - Link to contact page

---

### 2.3 Features Page (`/features`)

**Layout Options:**

Option A: Single long page with sections
Option B: Overview page + subpages for each feature

**Recommended: Single page with anchor links**

**Sections:**

1. **Scheduling & Appointments**
   - Calendar view screenshot
   - Online booking
   - Automated reminders (future)
   - Provider schedules

2. **Patient Portal**
   - Self check-in
   - Health history forms
   - Appointment booking
   - Secure messaging

3. **SOAP Notes & Documentation**
   - Template-based notes
   - Macros for quick entry
   - Diagnosis/procedure codes
   - PDF generation

4. **Secure Messaging**
   - HIPAA-compliant
   - File attachments
   - Email notifications

5. **Payment Processing**
   - Stripe integration
   - In-app payments
   - (Future: insurance claims)

6. **Coming Soon** (optional)
   - SMS reminders
   - Reporting & analytics
   - Telehealth

---

### 2.4 Security & HIPAA Page (`/security`)

**Critical page for healthcare SaaS - builds trust**

**Sections:**

1. **HIPAA Compliance Statement**
   - "GRIT is fully HIPAA compliant"
   - We sign Business Associate Agreements (BAAs)
   - Your patient data is protected

2. **Security Measures**
   - Encryption at rest and in transit (AES-256, TLS 1.3)
   - AWS hosting with SOC 2 compliance
   - Regular backups
   - Access controls and audit logs

3. **BAA Availability**
   - "We provide BAAs to all customers"
   - Link to downloadable BAA or contact form

4. **Data Ownership**
   - "Your data is yours"
   - Export anytime
   - We never sell patient data

5. **Infrastructure**
   - Hosted on AWS
   - US-based data centers
   - 99.9% uptime SLA (if you offer one)

---

### 2.5 Contact Page (`/contact`)

**Sections:**

1. **Contact Form**
   - Name
   - Email
   - Practice name (optional)
   - Message
   - Submit → sends to your email or Django backend

2. **Alternative Contact**
   - Email: support@gritcrm.com
   - Optional: Calendly embed for scheduling demos

3. **FAQ Link**
   - "Check our FAQ for common questions"

---

### 2.6 Legal Pages

#### Privacy Policy (`/privacy`)
- What data you collect
- How it's used
- Third parties (Stripe, AWS, SendGrid)
- HIPAA considerations
- Contact for data requests

#### Terms of Service (`/terms`)
- Service description
- User responsibilities
- Payment terms
- Limitation of liability
- Termination policy

**Note:** Consider using a template generator (Termly, Iubenda) or consulting a lawyer for healthcare-specific terms.

---

## Phase 3: Design & Assets

### 3.1 Screenshots Needed

- [ ] Dashboard view
- [ ] Schedule/calendar
- [ ] Patient list
- [ ] SOAP note editor
- [ ] Patient portal (patient view)
- [ ] Secure messaging

**Tips:**
- Use realistic fake data (not "John Doe")
- Clean up any debug UI
- Consider a tool like CleanShot or Screenshot.rocks for polish

### 3.2 Graphics & Icons

- [ ] Hero illustration or product mockup
- [ ] Feature icons (scheduling, notes, messaging, etc.)
- [ ] HIPAA badge / security badge
- [ ] Favicon and OG image

**Resources:**
- Icons: Heroicons, Lucide, Phosphor
- Illustrations: unDraw, Storyset
- Mockups: Figma device mockups

### 3.3 Testimonials

If you don't have real customers yet:
- [ ] Placeholder testimonials (mark as example/beta users)
- [ ] Or skip testimonials section until you have real ones
- [ ] Consider offering free beta access for testimonial rights

---

## Phase 4: Forms & Integrations

### 4.1 Contact Form Options

**Option A: Formspree (Easiest)**
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
  <input type="email" name="email">
  <textarea name="message"></textarea>
  <button type="submit">Send</button>
</form>
```

**Option B: Netlify Forms (If hosting on Netlify)**
```html
<form name="contact" netlify>
  ...
</form>
```

**Option C: Custom Django Endpoint**
- POST to `api.gritcrm.com/marketing/contact/`
- Store in database, send email notification

### 4.2 Analytics

**Recommended: Plausible Analytics**
- Privacy-friendly (no cookie banner needed)
- Simple, clean dashboard
- $9/month or self-hosted

**Alternative: Google Analytics 4**
- Free
- More features
- Requires cookie consent banner

### 4.3 Email Signup (Optional)

If you want to collect emails before launch:
- Buttondown (simple, free tier)
- ConvertKit (more features)
- Mailchimp (most popular)

---

## Phase 5: SEO & Meta

### 5.1 Meta Tags for Each Page

```astro
// In BaseLayout.astro
<head>
  <title>{title} | GRIT - Chiropractic Practice Management</title>
  <meta name="description" content={description} />

  <!-- Open Graph -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="/og-image.png" />
  <meta property="og:type" content="website" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
</head>
```

### 5.2 Page-Specific SEO

| Page | Title | Meta Description |
|------|-------|------------------|
| Home | GRIT - Practice Management for Solo Chiropractors | Scheduling, SOAP notes, patient portal, and payments. One simple tool built for the solo chiropractor. |
| Pricing | Pricing \| GRIT | Simple, transparent pricing. Start your free trial today. |
| Features | Features \| GRIT | Scheduling, SOAP notes, patient portal, secure messaging, and more. |
| Security | HIPAA Compliance & Security \| GRIT | HIPAA compliant. We sign BAAs. Your patient data is protected. |

### 5.3 Technical SEO

- [ ] Generate `sitemap.xml` (Astro has plugins for this)
- [ ] Create `robots.txt`
- [ ] Ensure all images have alt text
- [ ] Use semantic HTML (h1, h2, etc.)
- [ ] Mobile responsive design

---

## Phase 6: Deployment

### 6.1 Hosting Setup (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set up custom domain in Vercel dashboard
# Point DNS: gritcrm.com → Vercel
```

### 6.2 DNS Configuration

```
# At your domain registrar, add:

# Marketing site
A     @      76.76.19.19          # Vercel IP
CNAME www    cname.vercel-dns.com

# App subdomain (point to your AWS/hosting)
CNAME app    your-app-domain.com
CNAME api    your-api-domain.com
```

### 6.3 SSL

- Vercel handles SSL automatically
- Ensure app subdomain also has SSL

---

## Phase 7: Launch Checklist

### Pre-Launch

- [ ] All pages built and responsive
- [ ] Forms tested and working
- [ ] Links to app.gritcrm.com/register working
- [ ] Analytics installed
- [ ] Favicon and OG images in place
- [ ] Meta tags for all pages
- [ ] Privacy policy and terms live
- [ ] Mobile testing complete
- [ ] Cross-browser testing (Chrome, Safari, Firefox)
- [ ] 404 page created
- [ ] Contact email set up (support@gritcrm.com)

### Launch Day

- [ ] DNS propagated
- [ ] SSL working
- [ ] Submit sitemap to Google Search Console
- [ ] Test all forms one more time
- [ ] Announce! (LinkedIn, chiro forums, etc.)

### Post-Launch

- [ ] Monitor analytics for traffic
- [ ] Check form submissions are being received
- [ ] Gather feedback and iterate
- [ ] Start content marketing (blog posts)

---

## Future Enhancements

| Enhancement | Priority | Notes |
|-------------|----------|-------|
| Blog | Medium | SEO value, content marketing |
| Demo video | High | Let prospects see the app |
| Live chat | Low | Intercom, Crisp, etc. |
| Case studies | Medium | When you have success stories |
| Changelog | Low | Show active development |
| Affiliate program | Low | After you have traction |

---

## Content Checklist

### Copy to Write

- [ ] Homepage hero headline and subheadline
- [ ] Problem statement (pain points)
- [ ] Feature descriptions (6-8 features)
- [ ] Pricing copy and FAQ
- [ ] Security/HIPAA page content
- [ ] About blurb (who built this, why)
- [ ] Contact page intro
- [ ] Privacy policy
- [ ] Terms of service

### Assets to Create

- [ ] Product screenshots (5-8)
- [ ] Hero image/mockup
- [ ] Feature icons
- [ ] OG image (1200x630)
- [ ] Favicon (multiple sizes)

---

## Estimated Timeline

| Phase | Duration | Notes |
|-------|----------|-------|
| Domain + Project Setup | 1-2 hours | |
| Homepage | 4-6 hours | Most time-intensive page |
| Pricing Page | 2-3 hours | |
| Features Page | 3-4 hours | |
| Security Page | 2 hours | |
| Contact + Legal | 2-3 hours | |
| Design polish + screenshots | 3-4 hours | |
| Testing + deployment | 2 hours | |
| **Total** | **~20-25 hours** | |

---

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Heroicons](https://heroicons.com)
- [unDraw Illustrations](https://undraw.co)
- [Plausible Analytics](https://plausible.io)
- [Formspree](https://formspree.io)
- [HIPAA Compliance Checklist](https://www.hhs.gov/hipaa)

---

## Notes

- Keep the site simple at launch. You can always add more later.
- Focus on clear messaging over fancy design.
- The security page is critical for healthcare - don't skip it.
- Real testimonials beat fake ones. Wait if you don't have them.
- Speed matters. Astro + static hosting = fast site = better conversions.
