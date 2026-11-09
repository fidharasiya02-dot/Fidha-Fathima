# Fidha — Engineering & Creative Portfolio

A modern, high-contrast editorial **"Graphic Design Portfolio"** built for **Fidha**, an engineering student at **Thejus Engineering College**. Inspired by Swiss modernist graphic posters and bold magazine typography, it pairs ultra-bold condensed headlines with delicate script accents, layered depth portraits, silky smooth scrolling, and interactive engineering case studies.

---

## 🚀 Live Local Preview
The development server is running at:
```
http://localhost:3000/
```

- **Build for Production**: `npm run build`
- **Preview Production Build**: `npm run preview`

---

## 🛠 Tech Stack
- **Framework**: React 18 + Vite (Zero hydration lag, sub-millisecond HMR)
- **Styling**: Tailwind CSS (with custom color schemes, fluid typography, dark mode)
- **Smooth Scroll**: [Lenis](https://github.com/darkroomengineering/lenis) synchronized with GSAP
- **Animations**: [Framer Motion 11](https://www.framer.com/motion/) + [GSAP 3](https://gsap.com/) & ScrollTrigger
- **Icons**: [Lucide React](https://lucide.dev/)
- **Micro-Interactions**: Custom magnetic buttons, custom dynamic cursor follower, particle confetti celebration
- **Typography**: Google Fonts (*Bebas Neue*, *Anton*, *Great Vibes*, *Playfair Display*, *Plus Jakarta Sans*, *Space Mono*)

---

## 🎨 Visual Identity & Style
- **Background**: Warm off-white / light greige (`#E9E6E3`), with dark mode palette (`#0E0E10`)
- **Type**: Ultra-bold condensed sans-serif for massive headlines, elegant calligraphy script for accent words, clean sans-serif for body
- **Accent**: Deep Indigo (`#3730A3`) & Electric Cobalt (`#4F46E5`), with crisp crimson accents
- **Badge & Monogram**: Vibrant "NEW" badge and interlocking calligraphic "F" monogram seal

---

## ✏️ How to Customize Your Content

All website content is centralized in **one single, clean configuration file**:
👉 [`src/data/portfolioData.js`](file:///d:/fidhafathima/src/data/portfolioData.js)

### 1. Replace Your Photo
- **Option A (Recommended)**: Drop your portrait photo into the [`public/`](file:///d:/fidhafathima/public) folder and name it `portrait-fidha.png` (replaces the placeholder directly).
- **Option B**: If your photo is hosted online (e.g. Imgur, Unsplash, Cloudinary) or has a different filename, open [`src/data/portfolioData.js`](file:///d:/fidhafathima/src/data/portfolioData.js) and update:
  ```js
  personal: {
    portraitImage: "/my-photo.jpg", // or "https://..."
  }
  ```
> **Tip for the Depth Effect**: Circular cutout portraits with high contrast or transparent background will give the authentic magazine cover depth effect where the massive headline sits behind your head and the script curves across the bottom!

### 2. Replace Your Name, College, and Bio
Open [`src/data/portfolioData.js`](file:///d:/fidhafathima/src/data/portfolioData.js) and edit the `personal` block:
```js
personal: {
  name: "Fidha",
  fullName: "Fidha Fathima",
  college: "Thejus Engineering College",
  degree: "B.Tech in Computer Science & Engineering",
  batch: "Class of 2026",
  location: "Thrissur, Kerala, India",
  email: "your-email@gmail.com",
  bioShort: "...",
  bioLong: "...",
}
```

### 3. Replace or Add Projects
In [`src/data/portfolioData.js`](file:///d:/fidhafathima/src/data/portfolioData.js), locate the `projects` array:
```js
projects: [
  {
    id: "my-project",
    title: "Project Title",
    subtitle: "Project Tagline",
    category: "Engineering & Web Dev", // or "Creative Development", "Graphic Design & Branding"
    year: "2025",
    client: "Context / Competition / Client",
    coverImage: "https://...",
    description: "Detailed description...",
    tags: ["React", "Python", "Tailwind"],
    liveUrl: "https://my-live-demo.com",
    githubUrl: "https://github.com/...",
    highlights: [
      "Key achievement or technical deliverable 1",
      "Key achievement or technical deliverable 2",
    ],
    role: "Full-Stack Developer",
  },
]
```

### 4. Update Social Links & Contact Info
In [`src/data/portfolioData.js`](file:///d:/fidhafathima/src/data/portfolioData.js), edit `socials` and `contact`:
```js
socials: [
  { name: "GitHub", url: "https://github.com/your-username" },
  { name: "LinkedIn", url: "https://linkedin.com/in/your-username" },
  { name: "Instagram", url: "https://instagram.com/your-username" },
  { name: "Behance", url: "https://behance.net/your-username" },
]
```

### 5. Change Monogram or Script Word
In [`src/data/portfolioData.js`](file:///d:/fidhafathima/src/data/portfolioData.js), under `brand`:
```js
brand: {
  monogramLetter: "F",
  monogramSubtext: "FIDHA",
  badgeText: "NEW",
  heroBigHeadline: "FIDHA",
  heroScriptWord: "Developer", // The curved word looping across the portrait
}
```

---

## 📁 Directory Structure
```
d:/fidhafathima/
├── public/
│   ├── monogram.svg         # Crisp vector monogram logo
│   └── portrait-fidha.png   # Editorial portrait photo
├── src/
│   ├── components/
│   │   ├── AboutSection.jsx          # Academic spotlight & skills
│   │   ├── BlogSection.jsx           # Editorial essays & reader modal
│   │   ├── ContactSection.jsx        # Working form with confetti celebration
│   │   ├── CustomCursor.jsx          # Dynamic physics follower cursor
│   │   ├── Footer.jsx                # Dark footer with marquee & live Kerala clock
│   │   ├── HeroSection.jsx           # Layered depth headline + portrait + script
│   │   ├── MagneticButton.jsx        # Physics-based hover attraction
│   │   ├── MarqueeStrip.jsx          # Infinite typographic ribbons
│   │   ├── Navbar.jsx                # Auto-hide on scroll + mobile menu drawer
│   │   ├── Preloader.jsx             # Name reveal percentage intro
│   │   ├── ProjectModal.jsx          # Case study modal dialog
│   │   ├── ProjectsSection.jsx       # Category-filtered work archive
│   │   ├── SkillsServicesSection.jsx # Animated progress lines & deliverables
│   │   └── TimelineSection.jsx       # Scroll-drawn education & work trajectory
│   ├── context/
│   │   └── ThemeContext.jsx          # Light / Dark mode state management
│   ├── data/
│   │   └── portfolioData.js          # Centralized data file (all text, projects, links)
│   ├── App.jsx                       # Main application shell with Lenis + GSAP
│   ├── index.css                     # Editorial typography & noise grain
│   └── main.jsx                      # React 18 bootstrap
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🌟 Highlights & Special Effects
1. **Editorial Hero Layering**: Centerpiece with giant bold condensed typography `FIDHA`, circular cutout portrait, and angled curved script `Developer` overlapping seamlessly.
2. **Smooth Scrolling**: Lenis virtual smooth scrolling synced with GSAP ScrollTrigger ticker.
3. **Scroll-Drawn Timeline**: Visual SVG path connecting milestones at Thejus Engineering College that dynamically draws as you scroll down.
4. **Interactive Contact Form**: Working form validation with real-time feedback and an exuberant multi-color particle confetti celebration on submission.
5. **Dark / Light Mode**: Seamless toggle between editorial warm off-white greige (`#E9E6E3`) and obsidian dark (`#0E0E10`).
6. **Live Kerala Time**: Interactive clock in the footer displaying current local time in Thrissur, Kerala (GMT+5:30).

