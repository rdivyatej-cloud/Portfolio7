# Divyatej Rallapalli — Engineering Portfolio

A cinematic, high-performance personal portfolio website for **Divyatej Rallapalli**, Backend & AI Engineer and Computer Science (Cybersecurity) undergraduate at SRM University-AP.

Inspired by modern interactive engineering aesthetics ([therishithakor.com](https://therishithakor.com/work)), featuring custom 3D WebGL ID card authentication, horizontal scroll-pinned skill vaults, animated chronological story timeline, and interactive inquiry dispatches.

---

## ⚡ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Animations**: [GSAP](https://greensock.com/) (ScrollTrigger) & [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Three.js](https://threejs.org/) with `@react-three/fiber` & `@react-three/drei` (lazy-loaded)
- **Routing**: [React Router](https://reactrouter.com/) (Hash-based for 100% static host compatibility)
- **Icons**: [Lucide React](https://lucide.dev/) + custom vector SVG primitives

---

## 🚀 Key Features

1. **3D Access Badge Loader**:
   - Realistic 3D rotating engineer ID card displaying name, clearance, and SRM University-AP credentials.
   - Smooth 0-100% progress counter, skip button (`ESC`), and a 2.2s failsafe timeout so slow devices are never blocked.
   - Lazy-loaded Three.js chunk keeping the initial page bundle at just **34 kB gzipped**.

2. **Hero & Live Status**:
   - Rotating role ticker: `Backend Engineer` / `AI Engineer` / `Cybersecurity`.
   - Real-time IST clock (`Asia/Kolkata` ticker) and location badge (*"Based in India"*).
   - "Hire me", "See my work", and conditional "Download CV" actions.

3. **"One door per skill" (Horizontal Scroll Vaults)**:
   - 4 specialized vaults pinned with GSAP `ScrollTrigger` on desktop (and responsive swipe on mobile):
     1. **Backend Engineering**
     2. **AI / LLM Integration**
     3. **Full-Stack Apps**
     4. **Secure Software & Cybersecurity**
   - Each door links to a dedicated detail page (`#/door/:doorId`) showing all verified projects, stack tags, and architecture bullets.

4. **"Let's go back in time" Story Timeline**:
   - Animated chronological timeline featuring a sticky desktop **Year Ticker** and **`01 / 05` counter**.
   - Highlights FlyRank AI internship, SRM University-AP B.Tech, Intermediate (MPC) at Sri Chaitanya, and Cisco/Google/Infosys certifications.

5. **Featured Projects & Categorized Skills**:
   - Cards for all 5 verified projects (FlyRank Capstone Metering & Billing, Smart Expense Tracker, SubScript, Study-Mate, FitLife Pulse).
   - Smart image fallback (`SafeImage`): automatically renders custom blueprint graphics if screenshots are not yet added.
   - 6 categorized skill groups: Languages, Backend & APIs, Databases, AI & Engineering, Tools & DevOps, and CS Foundations.

6. **Interactive Contact Portal**:
   - "What do you need?" reason selector (*Internship / full-time role*, *Freelance project*, *Collaboration*, *Just saying hi*).
   - Name and message fields with automated `mailto:` pre-fill and an "Almost there" modal.
   - Direct email card with one-click copy feedback.

---

## 🛠️ How to Edit Content

All text content, project descriptions, skills, and links are centralized in a single file:
```text
src/data/content.ts
```

- **Update Personal Bio & Availability**: Edit `PERSONAL_INFO` in `content.ts`.
- **Add / Edit Projects**: Update the `PROJECTS` array in `content.ts`.
- **Update Career Milestones**: Edit the `TIMELINE` array in `content.ts`.
- **Update Skills**: Modify the `SKILL_CATEGORIES` list in `content.ts`.

---

## 🖼️ Adding Custom Assets & Photos

Place your image files in `/public/images/` and your resume in `/public/resume/`:

| Asset File | Target Path | Description | Fallback Behavior |
| :--- | :--- | :--- | :--- |
| **Profile Photo** | `/public/images/profile.jpg` | Your headshot photo | Shows stylish `"DR"` monogram badge |
| **FlyRank Capstone** | `/public/images/project-flyrank.png` | Metering engine screenshot | Shows blueprint card |
| **Expense Tracker** | `/public/images/project-expense-tracker.png` | App screenshot | Shows blueprint card |
| **SubScript** | `/public/images/project-subscript.png` | Dashboard screenshot | Shows blueprint card |
| **Study-Mate** | `/public/images/project-studymate.png` | UI screenshot | Shows blueprint card |
| **FitLife Pulse** | `/public/images/project-fitlife.png` | Analytics screenshot | Shows blueprint card |
| **Social Share** | `/public/images/og.jpg` | 1200x630 OpenGraph card | Uses built-in `/public/images/og.svg` |
| **Resume / CV** | `/public/resume/Divyatej_Rallapalli_CV.pdf` | Your downloadable PDF CV | Button automatically hides if missing |

---

## 💻 Local Development

```bash
# 1. Clone repository
git clone https://github.com/rdivyatej-cloud/Portfolio7.git
cd Portfolio7

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

---

## 🚢 Deployment

The website is 100% static and ready to deploy to any static hosting provider.

### Option A: GitHub Pages (Automated via GitHub Actions)
A production deployment workflow is already included in `.github/workflows/deploy.yml`.
1. Push your repository to GitHub (`git push origin main` or `master`).
2. Go to your repository settings on GitHub: **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. Every push to `main` / `master` will automatically build and publish the live site.

### Option B: Vercel
1. Install Vercel CLI (`npm i -g vercel`) or go to [vercel.com](https://vercel.com).
2. Import the `Portfolio7` repository.
3. Keep default settings (Framework: Vite, Build command: `npm run build`, Output directory: `dist`).
4. Click **Deploy**.

---

## 📄 License

MIT © [Divyatej Rallapalli](https://github.com/rdivyatej-cloud).
