# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

# My Portfolio (customized)

This project is a modern, responsive portfolio template built with React + Vite. It includes sections for hero, about, skills, education, experience, projects, and contact.

## Local development

1. Install dependencies

   npm install

2. Start dev server

   npm run dev

3. Build for production

   npm run build

## Deployment

I recommend deploying to Vercel or Netlify. Steps (Vercel):

- Create an account at vercel.com and connect the GitHub repo
- Select the project and the default build command `npm run build`
- Output directory: `dist`
- Deploy and copy the live URL into submission fields

## Notes

- Replace placeholder content in `src/components` with your real information (name, photo, resume, projects, links)
- Ensure resume is available in `public/resume.pdf` before submitting the live link

---

## Final polish checklist

- Verify site at multiple widths (mobile, tablet, desktop) and confirm no overflow or layout issues
- Confirm all images have alt text and use `loading="lazy"` where appropriate
- Check color contrast for readability and ensure keyboard focus states are visible
- Test contact form `mailto:` flow and resume download
- Replace placeholder project links and GitHub repo URLs with real URLs

When you're ready to deploy, follow the "Deployment" section above or let me know and I can give step-by-step instructions.

---

## Contact

- **Email:** sahriarrahman701@gmail.com
- **Phone:** +880-1752-649293

**Resume:** `public/resume.pdf` (replace with your final resume file named `resume.pdf` or update the link in `src/components/Hero.jsx`).
