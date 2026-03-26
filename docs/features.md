# GRIT — Features

> **The EHR that was built from the ground up for solo chiropractors.**
> Not downsized from a hospital system. Not repurposed from general practice. Built — from scratch — for the way you actually work.

---

## Scheduling & Calendar

**Your day, your way — visualized down to the minute.**

GRIT's scheduling engine was built around high-volume chiropractic practices where a 10-minute adjustment window is the norm, not the exception.

- **Weekly calendar view** — see your entire week at a glance with color-coded appointment blocks sized by duration, so you can spot openings and bottlenecks instantly
- **Configurable time slots** — set your grid to 5, 10, 15, or 30-minute intervals depending on how you practice
- **Per-day working hours** — define custom start/end times for every day of the week, because Monday doesn't always look like Thursday
- **Built-in lunch breaks** — block off lunch per day so patients can't book into your downtime
- **Custom appointment types** — New Patient, Adjustment, Re-Evaluation, and whatever else you need. Each type has its own name, duration, and color so your calendar tells you what's coming before you even read it
- **Recurring appointments** — schedule a patient for every Tuesday and Thursday for 6 weeks in one action. Supports daily, weekly, and monthly recurrence with flexible end conditions (number of visits, end date, or ongoing)
- **Appointment status tracking** — every appointment flows through a clear lifecycle: *Scheduled → Checked In → In Progress → Completed*. Mark no-shows. Cancel with a reason. Every transition is tracked
- **Bulk operations** — cancel multiple appointments or mark a block of no-shows in one action. Because sometimes a snowstorm happens
- **Time-off management** — vacation, sick days, personal time, holidays. Mark time off as all-day or partial, and it shows directly on the calendar with visual striping so nothing gets booked over it. Create global holidays that block all providers at once
- **Recurring time off** — set it and forget it for standing commitments

---

## Patient Management

**Every patient. Every detail. One place.**

GRIT stores the full picture of each patient — not just their name and phone number, but everything you need to treat, bill, and communicate with them.

- **Complete patient profiles** — name, date of birth, gender, SSN, contact info (two phone numbers), full address, employer, marital status, spouse info, and emergency contact. Every field you'd find on a paper intake form, digitized and searchable
- **Instant search** — find any patient by name, email, or phone number. Case-insensitive, real-time results as you type
- **Inline editing** — update demographics, contact info, address, personal details, and emergency contacts in organized sections without opening a separate page or modal. Click, edit, save
- **Patient images** — store up to 10 clinical images per patient (X-rays, posture photos, progress shots) right on their profile for quick reference during treatment
- **Insurance management** — primary and secondary insurance with full coverage details:
  - Member name, number, group number, subscriber relationship
  - Upload front and back card images
  - Track copay, deductible (and whether it's been met), coinsurance, visit limits, visits used
  - Authorization tracking with auth numbers
  - **Staff verification workflow** — mark insurance as verified with notes, verified-by, and timestamp
  - Deactivate and reactivate policies without deleting history
- **Patient invite system** — generate a unique registration link to invite patients to create their own portal account. Resend expired invites with one click

---

## Patient Portal

**Give your patients a front door to your practice — open 24/7.**

GRIT includes a full-featured patient portal. Not a bolt-on. Not an add-on. A real self-service experience that reduces phone calls and front desk burden from day one.

### Online Booking
- Patients select from providers they've previously seen — no accidental bookings with the wrong doc
- Choose from appointment types you've enabled for self-booking (new patient excluded automatically)
- Browse available time slots that respect your real schedule, lunch breaks, time off, and custom booking windows
- Confirm and book in seconds. You get notified. They get a confirmation

### Booking Controls (You Stay in Charge)
- **Enable or disable** patient self-booking at the practice level with one toggle
- **Minimum advance booking** — require patients to book at least 1 hour, 24 hours, 48 hours, or up to 1 week in advance
- **Cancellation windows** — prevent last-minute cancellations by setting minimum advance notice
- **Per-provider, per-appointment-type booking configs** — control exactly which appointment types each provider allows patients to book online
- **Custom booking windows** — restrict online booking to specific days and time ranges (e.g., Tuesday and Thursday afternoons only). Or use the provider's full schedule — your choice
- **Overbooking controls** — allow multiple patients per slot if that's how you run adjustments, with configurable max-per-slot limits
- **Restricted start times** — force bookings to specific start times within a window (e.g., only on the hour or half-hour)
- **Apply settings to all providers** in one click when your booking rules are the same across the board

### Self-Service Check-In
A multi-step check-in wizard that patients complete on their phone before they sit down:
1. **Verify contact info** — confirm or update phone, address, emergency contact
2. **Review insurance** — confirm current coverage or update details
3. **Rate complaints** — for each active complaint, rate pain level (0-10), report whether it's improved/same/worse, and note frequency
4. **New concerns** — report any new issues so you know before you walk in the room

### Appointment Management
- View upcoming appointments with provider, date, time, and type
- Cancel with a reason selection
- Reschedule to a new available slot
- Download superbill PDFs for completed visits (for insurance reimbursement)

### Intake Forms & HIPAA
- **Digital intake form** — patients complete their full medical history from home:
  - Chief complaint with onset date and pain locations
  - Pain frequency (constant, frequent, occasional, intermittent, rare)
  - Aggravating and relieving factors
  - Current medications, allergies, past surgeries, medical conditions
  - Family history
  - Lifestyle (exercise frequency, smoking status, alcohol use)
  - Referral source
  - Auto-generates a PDF on completion
- **HIPAA consent** — three acknowledgment checkboxes (privacy practices, consent to treat, information release) with digital signature, date stamp, and IP logging. Generates a signed PDF for your records
- **Form status tracking** — both patient and staff can see at a glance which forms are complete and which are still pending

### Multi-Practice Support
- A single patient account can link to multiple practices
- Practice selector lets patients switch between providers seamlessly
- Each practice relationship is fully isolated — records, appointments, and insurance stay separate

### Secure Messaging
- Patients can send and receive messages directly with your practice staff — no phone tag, no voicemail

---

## Clinical Notes

**Chart faster than you ever have. Stay compliant while you do it.**

GRIT's note system wasn't adapted from a general-practice EHR. It was purpose-built for chiropractic documentation — SOAP notes, initial evaluations, re-evaluations, and discharge summaries with the depth your payers require and the speed your schedule demands.

### Note Types
- **SOAP Notes** — the daily workhorse. Subjective, Objective, Assessment, Plan. Clean, structured, fast
- **Initial Evaluations** — comprehensive intake documentation with vitals, review of systems, exam findings, complaints, and medical history pulled directly from the patient's intake form
- **Re-Evaluations** — periodic progress assessments
- **Discharge Summaries** — close out a case with full documentation

### Writing Notes Fast
- **Macros** — create personal text shortcuts organized by SOAP section (Subjective, Objective, Assessment, Plan). Name them, write the text once, and insert them at your cursor with a single click. Right-click any macro to edit or delete it on the spot. Build a library of your most common findings, and a full note takes seconds
- **Previous note pull-forward** — GRIT fetches your last signed note for that patient so you can review or reuse sections. Check a box and carry forward what hasn't changed
- **Interactive spine diagram** — clickable vertebrae from Occiput to Coccyx. Click a level, and it inserts into your Objective field at the cursor. No typing "T4-T6 subluxation complex" when you can just click it
- **Auto-save** — notes save automatically every 3 seconds while you write. No more lost work because you forgot to hit save

### Clinical Detail
- **Exam findings** — structured documentation for subluxations, range of motion, orthopedic tests, neurological exams, palpation, postural analysis, and muscle testing. Each finding type has its own fields (spinal level, restriction direction, tenderness, spasm, edema, test results, measured vs. normal values)
- **Vitals** — blood pressure, pulse, temperature, height, weight, respiration rate, with auto-calculated BMI
- **Review of systems** — structured 9+ system review stored as organized data, not free text buried in a paragraph
- **Encounter diagnoses** — attach ICD-10 codes directly to each note with pointer positions (1-12) that map directly to CMS-1500 Box 21. Your billing is accurate before the note is even signed
- **Encounter procedures** — attach CPT codes with units, time, diagnosis pointers, up to 4 modifiers, charge amounts, and regions treated for CMT codes. Everything your biller needs is right there
- **Complaint tracking** — body region-specific complaints with initial and current pain levels (0-10), onset type (sudden vs. gradual), and active/resolved status. Pain trends are visible over time
- **Treatment goals** — set measurable goals (pain reduction, ROM improvement, functional, return to work, ADLs) with baseline, target, and current values. Track progress and goal achievement dates

### Compliance & Audit Trail
- **Note status workflow** — every note follows a strict lifecycle: *Draft → Signed → Billed → Locked*. Once signed, the note is read-only. Period
- **Digital signature with attestation** — signing captures the provider, timestamp, and auto-generates a formal attestation statement
- **HIPAA-compliant amendments** — need to correct a signed note? GRIT enforces the amendment workflow. Every change records who made it, when, what the original value was, what it changed to, and why. The original is never overwritten — the audit trail is permanent
- **Amendments for everything** — not just text fields. Amend vitals, review of systems, diagnoses, procedures, and exam findings on signed notes, all through the same tracked amendment process
- **Clinical audit log** — every view, create, update, delete, print, export, and fax action is logged with user, IP address, timestamp, patient, and before/after values. Indexed for fast retrieval during audits

### Configurable Initial Evaluations
- Practice admins choose exactly which sections appear in initial eval notes — toggle on/off individually or by group:
  - **History & Systems:** Chief complaint, complaints, medical history, social history, review of systems, vitals
  - **Physical Exam:** Red flags screening, postural analysis, range of motion, orthopedic tests, neurological exam, subluxation analysis
- Settings apply to new notes only — existing notes are never retroactively changed

---

## Treatment Plans

**Map out the care. Track the progress. Know exactly where every patient stands.**

- Create named treatment plans per patient with provider attribution
- **Plan items** — define each phase of care with appointment type, frequency (e.g., 3x/week for 4 weeks), or flat quantity, and sequence order
- **Plan templates** — build reusable plan templates at the practice level so your most common care plans are one click away
- **Link plans to appointments** — assign a plan to any appointment so each visit counts toward the plan's total
- **Plan progress banner** — every note shows a color-coded banner at the top:
  - **Blue** — 4+ visits remaining
  - **Amber** — 2-3 visits left
  - **Red** — last visit in the plan
  - **Green** — plan complete
- **Inline plan editing** — change a patient's plan directly from the appointments tab with a clickable dropdown. No navigating away
- **Plan status management** — active, completed, cancelled. Filter and track across your entire patient base

---

## Cases & Problem List

**Organize complex patients without complexity.**

- **Case management** — group visits, complaints, diagnoses, and goals under a specific case. Supports case types that matter to chiropractors:
  - Standard care
  - Personal injury (PI) — with attorney name, firm, phone, email, claim number
  - Workers' compensation — with employer details, job title, injury description
  - Auto accident
  - Medicare
- **Case status tracking** — active, on hold, discharged, maximum medical improvement (MMI), settled
- **Problem list** — a running list of patient diagnoses with ICD-10 codes, status (active, chronic, resolved, ruled out), laterality (left, right, bilateral), primary diagnosis flag, and clinical notes
- **Complaint tracking** — 14 body regions (cervical, thoracic, lumbar, shoulders, upper/lower extremities, and more), each with pain levels, onset type, and active/resolved status
- **Check-in pain ratings** — every time a patient checks in, their complaint ratings are captured and timestamped, building a pain trend over time without any extra charting work from you

---

## Billing & Superbills

**Get the paperwork right so you get paid right.**

- **Superbill generation** — select any completed appointment with a signed note and generate a clean, professional superbill PDF
- **Batch superbills** — select multiple visits and generate a combined PDF in one action
- **Patient-facing superbills** — patients can download their own superbill PDFs from the portal for insurance reimbursement
- **Encounter-level billing data** — every note captures diagnosis pointers, procedure codes, units, modifiers, and charge amounts. Your superbills are accurate because the data was entered at the point of care — not reconstructed after the fact

---

## Automated Patient Texting *(via Telnyx)*

**Stop playing phone tag. Let GRIT handle the communication.**

- **Automated appointment reminders** — set timing rules, and GRIT sends SMS reminders before every appointment. You configure it once
- **Two-way texting** — patients can confirm, cancel, or reply. Their responses come straight into GRIT, not your personal phone
- **Customizable message templates** — write messages that sound like your practice, not a corporate script
- **Delivery tracking** — know whether a message was delivered, not just sent
- **No separate app** — texting is integrated directly into GRIT. One login, one system, one workflow

---

## Payments *(via Stripe)*

**Collect what you're owed — before, during, or after the visit.**

- **In-app payment collection** — collect copays, balances, and visit fees right from the patient's profile
- **Text-to-pay** — send a secure payment link via SMS. Patients pay from their phone before they even walk through the door
- **Automatic receipts** — every payment generates a receipt. No more handwritten slips
- **Per-patient payment history** — see every payment a patient has made, when, and for what. No more reconciling bank statements
- **Stripe-powered security** — PCI-DSS compliant out of the box. Card data never touches your server. Zero setup on your end

---

## Practice & Team Management

**Run your office, not just your adjusting room.**

### Provider Management
- Full provider profiles — professional name (for schedule display), license number, provider number, NPI, contact info, and address
- Each provider has their own schedule, lunch breaks, time off, and macros
- Separate login with clinical-level access

### Staff Management
- Staff profiles with position title, start date, and contact info
- Staff see scheduling, patient management, and front desk tools — not clinical notes
- Separate login scoped to administrative functions

### Admin Tools
- **Employee creation** — add a new provider or staff member and GRIT auto-generates their account, sets a temporary password, and sends an invite email. They log in and set their own password
- **Practice profile** — manage your practice name, DBA, EIN, address, phone, and email in one place
- **HIPAA form customization** — edit the text for all three HIPAA consent sections (privacy practices, consent to treat, medical records release) or use GRIT's professionally written defaults
- **Documentation mode** — choose between full, standard, or minimal documentation requirements to match how your practice charts

### Role-Based Access Control
Three distinct roles, each seeing exactly what they should:

| | Provider | Staff | Patient |
|---|---|---|---|
| View/manage schedule | ✅ Own | ✅ All | ❌ |
| Write clinical notes | ✅ | ❌ | ❌ |
| Sign notes | ✅ | ❌ | ❌ |
| Manage patients | ✅ | ✅ | ❌ |
| View own records | — | — | ✅ |
| Book appointments | ❌ | ✅ | ✅ (if enabled) |
| Practice settings | ✅ (admin) | ❌ | ❌ |
| Macros | ✅ Own | ❌ | ❌ |

---

## Security & HIPAA Compliance

**Not an afterthought. Foundational.**

- **JWT authentication** — short-lived access tokens (5-minute expiry) with automatic refresh. Sessions are secure, time-limited, and stateless
- **Forced password change** — new employees must change their temporary password on first login. No exceptions
- **Password reset** — secure email-based reset flow with token validation and rate limiting (5 requests/hour per email, 50/hour globally)
- **Role-based data isolation** — providers see clinical data. Staff see administrative data. Patients see only their own records. The API enforces this at every endpoint, not just in the UI
- **Practice-scoped data** — every query is filtered to the user's practice. Cross-practice data leakage is architecturally impossible
- **Clinical audit logging** — every interaction with patient data is logged: views, creates, updates, deletes, prints, exports. Each log entry captures user identity, email, IP address, timestamp, patient, resource type, and before/after values. Indexed for fast audit retrieval
- **Amendment-only editing on signed notes** — once a provider signs a note, the original text is permanent. Changes go through a formal amendment process that records the original value, new value, reason, and who made the change. This is the HIPAA standard — and GRIT enforces it in code, not policy
- **HIPAA consent tracking** — digital signatures with IP logging and automatic PDF generation
- **Modern, maintained stack** — Django 4 + Vue 3. Actively maintained frameworks with security patches. No legacy code from 2006 hiding in production

---

## Why GRIT?

### What You're Replacing

| | GRIT | The Software You're Using Now |
|---|---|---|
| **Built for** | Solo chiropractors | Hospitals, then scaled down |
| **Interface** | Clean, modern, fast | Tabs inside tabs inside tabs |
| **Note speed** | Macros + spine diagram + auto-save | Click-heavy templates from 2009 |
| **Patient portal** | Built in. Booking, check-in, forms, messaging | $50/month add-on (if it exists) |
| **Texting** | Built in via Telnyx | Third-party integration, extra cost |
| **Payments** | Built in via Stripe | Another vendor, another login |
| **HIPAA compliance** | Audit logs, amendment tracking, role-based access | "We're HIPAA compliant" (citation needed) |
| **Pricing** | One price. Everything included | Base + portal + texting + payments + support |
| **Setup** | Minutes | Days to weeks, plus training fees |
| **Feels like** | 2025 | Somehow, still 2008 |

### The GRIT Philosophy

Most EHR companies started by building for hospitals and large multi-specialty clinics — then stripped features down and called it a "small practice plan." You're paying for complexity you'll never use while missing the things you actually need.

GRIT started with a single question: **What does a solo chiropractor actually need to run their practice?**

Then we built exactly that. Nothing more. Nothing less.

Every screen, every workflow, every button exists because a chiropractor needs it — not because a product manager needed to justify a feature sprint. The result is software that's fast to learn, fast to use, and doesn't get in the way of the thing you actually went to school for: taking care of patients.

---

*GRIT — For the Solo Chiropractor.*
