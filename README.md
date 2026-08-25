# Onboarding_Wizard

A multi-step onboarding form built with React. Instead of dumping every field onto one page, it walks the user through three short steps - personal info, account details and a final review before submitting.

Built as a small SaaS/FinTech-style onboarding flow, with a focus on getting the state management, validation and UX details right rather than just making the forms work.

## Features

- Three-step wizard (Personal Info → Account Details → Review & Submit)
- Form state lives in a single parent component, so nothing is lost if you go back and forth between steps
- Real-time validation as you type, not just on submit
- Next/Submit buttons stay disabled until the current step is actually valid
- Password field with a show/hide toggle
- A progress bar that updates as you move through the steps
- Fully responsive - works down to mobile widths

## Tech stack

- React (Vite)
- React Hook Form — for per-step form handling and validation state
- Zod — for the validation schemas
- lucide-react — icons

## Running it locally

```bash
git clone https://github.com/<your-username>/onboarding-wizard.git
cd onboarding-wizard
npm install
npm run dev
```

Then open the local URL Vite prints in your terminal (usually `http://localhost:5173`).

## Building for production

```bash
npm run build
```

Output goes to `dist/`.

## Deploying

This is set up to deploy on Vercel with zero config — just import the repo,
and Vercel will detect it as a Vite project automatically (build command
`npm run build`, output directory `dist`).


## Notes

Submission doesn't hit a real backend — on submit, the final form data is logged to the browser console and the UI switches to a success state. This was built as a frontend-only exercise, so there's no server or database involved.
