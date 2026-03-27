# Luca - Personal Website

A modern, clean personal website for Luca — a CS & Economics student interested in trading.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## ✨ Features

- **Hero Section** — Name, tagline, and call-to-action
- **About Section** — CS + Economics + Trading background
- **Skills Section** — Programming, Technologies, Finance, Soft Skills
- **Contact Section** — Email, GitHub, LinkedIn links
- **Dark Mode** — Automatic based on system preference
- **Responsive Design** — Works on all devices
- **Smooth Animations** — Framer Motion powered transitions
- **Static Export** — Ready for deployment anywhere

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone or navigate to the project
cd luca-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create static export
npm run build
```

The static site will be generated in the `dist/` folder, ready for deployment.

## 📝 Customization

### Personal Information

Update the following files with Luca's actual information:

- `src/components/Hero.tsx` — Name, tagline, social links
- `src/components/About.tsx` — Bio and highlights
- `src/components/Skills.tsx` — Skill lists
- `src/components/Contact.tsx` — Email and social URLs
- `src/app/layout.tsx` — Page metadata (title, description)

### Styling

- Colors and theme: `tailwind.config.ts`
- Global styles: `src/app/globals.css`
- Dark mode: Uses `prefers-color-scheme` media query

## 🚀 Deployment

### Static Hosting (Recommended)

The site is configured for static export. Upload the `dist/` folder to:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages
- Any static web host

### Vercel (One-click)

```bash
npm i -g vercel
vercel --prod
```

## 📄 License

MIT License — feel free to use this template for your own portfolio!

---

Built with ❤️ for Luca
