---
title: "Bring your patients over from your old EHR"
description: "Export from your old system, and GRIT's import wizard maps, validates, and imports your patients, insurance, and upcoming appointments — with a dry run before anything is written."
category: imports
order: 1
updatedDate: 2026-08-04
faqs:
  - q: "Which systems does the import recognize?"
    a: "Jane, ChiroTouch, ChiroFusion, ChiroSpring, EZBIS, Platinum, and Genesis (ClinicMind) exports are auto-detected and pre-mapped. Any other system works too — export to CSV or Excel and map the columns yourself in about a minute."
  - q: "Will it create duplicates if I run it twice?"
    a: "No. Rows matching an existing patient are skipped and counted as duplicates in the review step, so re-running an import is safe."
  - q: "Does my visit history come over?"
    a: "No — the import covers patients, insurance policies, and future appointments. Past visit notes stay in your old system; keep export/PDF access to them for your records-retention obligations."
  - q: "My file is a .xls and the upload fails."
    a: "Legacy .xls files (usually from Platinum) aren't parseable — open the file in Excel and save it as .xlsx, then upload that. Takes ten seconds."
---

Switching systems shouldn't mean re-typing your patient list. GRIT's import wizard
takes the export file from your old EHR and walks it through four steps — **Upload →
Map columns → Review → Done** — with nothing written to your account until you've seen
exactly what will happen.

## What you can import

Run these as separate imports, **in this order** (insurance and appointments look up
the patients created by the first one):

1. **Patients** — names, contact info, addresses, DOB
2. **Insurance policies** — carrier, member ID, group, subscriber — matched to your
   imported patients
3. **Future appointments** — date, time, provider, appointment type. Past dates are
   skipped automatically; history stays in your old system.

## Step 1 — Export from your old system, upload to GRIT

Export your patient list as **CSV or Excel** from your old EHR (usually under Reports
or Export). Then in GRIT open the **Import Data** wizard, choose what you're importing,
and drop the file in.

If the file came from **Jane, ChiroTouch, ChiroFusion, ChiroSpring, EZBIS, Platinum, or
Genesis**, GRIT recognizes the export format and pre-maps the columns for you.

> One gotcha: legacy **.xls** files can't be read — re-save as **.xlsx** in Excel
> first. Plain CSV is always safe.

## Step 2 — Map columns

Each GRIT field gets matched to a column in your file. Auto-detected exports arrive
mostly mapped; you just review. Required fields are marked with *, and anything you
leave unmapped is simply skipped — you don't need to import every column.

Fields labeled "for lookup" (like Patient Email on an insurance import) aren't stored —
they're only used to find which existing patient each row belongs to.

## Step 3 — Review the dry run

Click **Validate** and GRIT runs the entire import *without writing anything*, then
shows you the outcome:

- **Will be imported** — clean rows
- **Skipped** — duplicates of patients already in GRIT
- **Errors** — rows that can't import, each with a row number and a plain-language
  reason (downloadable as a CSV if the list is long)

Fix anything worth fixing in your file and start over, or proceed — error rows are
skipped, never half-imported.

## Step 4 — Import

Click the import button and GRIT writes the clean rows. You'll get final counts and,
for patient imports, a **View patients** button to go see the result.

## Troubleshooting

- **Lots of duplicate skips on a re-run.** That's the dedupe working — rows matching an
  existing patient are skipped, so running the same file twice doesn't double your
  patient list.
- **Appointment rows erroring.** The provider name and appointment type in the file
  must match a provider and appointment type that exist in GRIT — set those up in
  Settings first, then re-run.
- **Insurance rows can't find their patient.** Import patients first, and make sure the
  lookup columns (name, DOB, or email) are mapped so each policy can find its owner.
