# Olimov Muhammadzoir — Coder Boy | Developer Portfolio

A modern, high-performance, multilingual personal developer portfolio built for **Olimov Muhammadzoir** ("CODER BOY"), an ambitious young developer from Namangan, Uzbekistan studying at **Ilmhub Learning Center**.

![Portfolio Preview](/public/favicon.svg)

---

## ⚡ Tech Stack & Architecture

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Internationalization (i18n)**: Native typed 3-language system (Uzbek Latin, Russian Cyrillic, English)
- **Theming**: Dark mode (default) & Light mode with persistent `localStorage` preference
- **Interactive Features**: Executable CLI terminal, interactive mini project demos, custom cursor, typewriter role animation
- **Deployment**: 100% Vercel-ready and GitHub-ready static SPA

---

## 🚀 Quick Start

### 1. Installation
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
The application will launch at `http://localhost:3000` (or `http://localhost:5173`).

### 3. Production Build
```bash
npm run build
```
This produces a fully optimized, production-ready bundle inside the `dist/` directory.

### 4. Local Production Preview
```bash
npm run preview
```

---

## 🌐 Deploy to GitHub & Vercel

### Push to GitHub

1. Initialize git and commit your files:
```bash
git init
git add .
git commit -m "feat: initial commit for Olimov Muhammadzoir Coder Boy Portfolio"
```

2. Create a new repository on [GitHub](https://github.com/new).

3. Link your remote repository and push:
```bash
git branch -M main
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/<YOUR-REPO-NAME>.git
git push -u origin main
```

---

### Deploy to Vercel

This project is zero-config ready for Vercel:

#### Method A: Via Vercel Web Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New Project"** -> **"Import Git Repository"**.
3. Select your GitHub repository.
4. Keep the default settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**. Your portfolio is live with free automatic SSL and global CDN!

#### Method B: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 🛠️ Customization Guide

All personal data, links, translations, and assets are centralized in clean, dedicated configuration files:

### 1. Change Personal Information & Links
Open `/src/config/site.ts`:
```ts
export const siteConfig = {
  name: "Muhammadzoir",
  fullName: "Olimov Muhammadzoir",
  city: "Namangan",
  country: "O‘zbekiston",
  email: "your_email@example.com",
  github: "https://github.com/your-username",
  telegram: "https://t.me/your_telegram",
  instagram: "https://instagram.com/your_instagram",
  resumeUrl: "/cv.pdf",
  avatarUrl: "/avatar.png", // or /avatar.svg
  ...
};
```

### 2. Change Avatar / Photo
- Place your photo inside `/public/avatar.png` (or `/public/avatar.jpg`).
- In `/src/config/site.ts`, set `avatarUrl: "/avatar.png"`.
- If the file is missing or fails to load, the portfolio automatically displays a futuristic **"MZ"** monogram coder boy badge with an active status light.

### 3. Add Your CV / Resume
- Place your PDF resume at `/public/cv.pdf`.
- The "Download CV" buttons in the Hero and Navigation will immediately download it.

### 4. Edit or Add Projects
Open `/src/data/projects.ts`:
- Each project supports multilingual title, short description, long description, features checklist, learning outcomes, tags, category, and live demo links.

### 5. Edit Skills & Tech Stack
Open `/src/data/skills.ts`:
- Update `skillsData` and `techStackData`.
- Categorized into:
  - `programming`: HTML, CSS, JavaScript, React, Scratch, Arduino, etc.
  - `creative`: UI/UX, responsive web design, animations.
  - `ai`: Google AI Studio, prompt engineering, generative workflows.
  - `english`: Cambridge-style grammar, vocabulary, speaking.
  - `computer`: Terminal/CLI, Git, operating systems.
- Mark honest levels: `'learning'`, `'familiar'`, or `'exploring'`.

### 6. Edit Translations (UZ / RU / EN)
Translations are located in `/src/i18n/`:
- `/src/i18n/uz.ts` — Uzbek (Latin)
- `/src/i18n/ru.ts` — Russian (Cyrillic)
- `/src/i18n/en.ts` — English

### 7. Change Favicon
- Replace `/public/favicon.svg` with your SVG logo or keep the default modern MZ terminal icon.

---

## 💻 Interactive Terminal CLI Commands

Visitors can open the interactive terminal section (`#terminal`) and execute commands:

| Command | Description |
| :--- | :--- |
| `whoami` | Displays Muhammadzoir's full identity, role, and learning center |
| `skills` | Lists technical competencies and categories |
| `projects` | Summarizes featured applications and concepts |
| `status` | Shows real-time learning focus and goals |
| `contact` | Outputs email and social media links |
| `theme` | Toggles Dark / Light mode directly from the terminal |
| `lang <code >` | Changes website language (`uz`, `ru`, `en`) |
| `clear` | Clears the terminal screen |
| `help` | Lists all available terminal commands |

---

## 📄 License & Attribution

Crafted with passion by **Olimov Muhammadzoir** · Ilmhub O‘quv Markazi.
All rights reserved © 2026.
