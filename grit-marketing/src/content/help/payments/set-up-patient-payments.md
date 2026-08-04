---
title: "Set up patient payments with Stripe"
description: "Connect your Stripe account so you can charge patients in the office and let them pay from the patient portal."
category: payments
order: 1
updatedDate: 2026-08-04
faqs:
  - q: "Does GRIT take a cut of my patient payments?"
    a: "No. Payments go directly to your bank account through your own Stripe account. GRIT adds no platform fee — Stripe deducts only its standard per-transaction processing fee."
  - q: "How long until I can take my first payment?"
    a: "The Stripe setup form takes about 5 minutes. Most accounts are approved instantly; some need 1–2 business days of verification. You can take payments as soon as your status shows Active."
  - q: "Can I charge a card my patient saved in the portal?"
    a: "Not yet. Patients can save cards for their own use when paying through the portal, but staff-initiated charges always ask the patient to enter their card. Charging saved cards from the front desk is on the roadmap."
  - q: "What if I want to stop using Stripe?"
    a: "Settings → Payments has a Disconnect button. Disconnecting stops new payments immediately; your Stripe account and its history remain yours at stripe.com."
---

GRIT uses [Stripe](https://stripe.com) to process patient payments. Your practice gets its
own Stripe account, payments land directly in **your** bank account, and GRIT never holds
your money. Setup is a one-time, roughly five-minute task.

## Before you start

Have these on hand — Stripe asks for them during setup:

- Your **legal business name** and address
- Your **EIN** (or SSN for sole proprietors)
- The **bank account** where payments should land (routing + account number)

## Connect your Stripe account

1. In GRIT, go to **Settings → Payments**.
2. Click **Connect with Stripe**. Stripe's secure setup opens in a new tab — GRIT stays
   open behind it.
3. Work through Stripe's form: business details, your identity, and your bank account.
4. When you finish, come back to the GRIT tab. Your status updates automatically.

## What the statuses mean

- **Pending verification** — Stripe is reviewing your details. This usually takes 1–2
  business days. Nothing to do but wait; GRIT checks the status for you.
- **Restricted** — Stripe needs one more piece of information. Click **Complete
  Onboarding** and it will take you straight to whatever is missing.
- **Active** — you're live. The **Collect Payment** button appears on patient billing,
  and patients can pay their balance from the portal.

## Taking payments once you're active

- **In the office:** open a patient → **Billing** → **Collect Payment**. Enter the
  amount and the patient's card. The payment posts to their balance ledger
  automatically, with the card brand and last four saved on the record.
- **From the portal:** patients see their balance and can pay it themselves with a card.
  They can also save cards to their account for faster checkout next time.
- **Receipts:** every successful payment gets a Stripe receipt link, visible on the
  payment record and in the patient's payment history.
- **Refunds:** open the payment in your payment history and refund it — full or
  partial. The balance ledger updates to match.

Visit charges post to the patient's balance automatically when you **sign the note**,
so the front desk always sees an up-to-date amount owed.

## Troubleshooting

- **The Stripe tab said my link expired.** Go back to **Settings → Payments** — GRIT
  mints a fresh link and sends you straight back into setup where you left off.
- **I finished the form but GRIT still says Pending.** That's Stripe's verification
  window, not a stuck screen. If it's been more than two business days, open the Stripe
  form again via **Complete Onboarding** — Stripe will show anything it's still waiting
  on.
- **Collect Payment isn't showing.** It only appears once your account status is
  **Active** — check Settings → Payments.
