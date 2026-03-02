# Marcelo’s 3D Developer Portfolio

An interactive 3D portfolio built with React, Vite, Three.js and Tailwind CSS to showcase my experience as a JavaScript developer.

The goal is to present projects, skills and experience in a modern, performant way with a visually memorable 3D experience.

---

## 🌐 Live

- Production site (Netlify): https://mmsc-3d-resume.netlify.app/

---

## 📦 What this project offers

- **3D Hero section** with a desktop model rendered via React Three Fiber and Drei.
- **3D skills grid** with technology icons on animated spheres.
- **Projects section** with animations and links to code / live demos.
- **Experience timeline** for professional history.
- **Contact section with a 3D Earth** and a working form (EmailJS).
- A **fully responsive layout** for mobile, tablet and desktop.

---

## 🧠 Key improvements I implemented

- 3D and performance optimizations (using `frameloop="demand"`, shared geometry/materials, DPR cap).
- Lazy‑loading of heavier 3D canvases using an Intersection Observer–based wrapper.
- Contact flow integrated with **EmailJS + Gmail** via Vite environment variables.
- Contact feedback via success/error banners with automatic scroll to the section.
- New branding with M logos (`logoM2`, `logoM3`) and a reworked hero/navbar layout for better visual balance.
- Netlify deployment setup with:
  - `netlify.toml` (build, publish, SPA redirect, Node 20).
  - Environment variables (`VITE_EMAILJS_*`) configured in the dashboard.

---

## ⚙️ Tech stack

- **Frontend**: React 18, Vite
- **3D**: Three.js, React Three Fiber, @react-three/drei
- **Styling & animation**: Tailwind CSS, Framer Motion
- **Contact**: EmailJS (with Gmail provider)
- **Deploy**: Netlify

---

## 🧩 Running the project locally

### 1. Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (recommended v20.x)
- [npm](https://www.npmjs.com/)

### 2. Clone & install dependencies

```bash
git clone <your-repo-url>.git
cd project_3D_developer_portfolio
npm install
```

### 3. Configure environment variables (EmailJS)

Create a `.env` file in the project root with:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

You can find these values in the [EmailJS dashboard](https://www.emailjs.com/).  
In Vite, variables exposed to the client must start with `VITE_`.

### 4. Start dev server

```bash
npm run dev
```

Then open `http://localhost:5173` in your browser.

### 5. Create a production build

```bash
npm run build
```

The optimized files will be output to the `dist` folder.

---

## ☁️ Deploy on Netlify

This repo already includes a `netlify.toml`:

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **SPA redirect**: all routes (`/*`) go to `/index.html` so React Router works on direct URLs.

In the Netlify dashboard, define the same environment variables you use locally:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Then connect the GitHub repository and trigger a deploy.

---

## 💡 Next ideas

- Add more real projects with more detailed case studies.
- Explore additional code splitting to make the initial bundle even lighter.
- Integrate simple analytics to understand how recruiters browse the portfolio.

Feedback and suggestions are always welcome. 🙂

