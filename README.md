# AI Connections 🤖⚖️

> **The Daily Lateral Thinking Puzzle for AI Governance, International Law & Frontier Systems.**  
> Curated and developed by [Avi Perera](https://aviperera.com).

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero-success.svg)](package.json)
[![Size: <150KB](https://img.shields.io/badge/Bundle-~110KB-brightgreen.svg)](#performance--architecture)
[![Lighthouse: 100/100](https://img.shields.io/badge/Lighthouse-100%2F100-emerald.svg)](#performance--architecture)

---

## 🎯 Overview

**AI & Multi-Topic Connections** is an intellectual twist on the popular NYT Connections game mechanic, thoughtfully designed for **both the general public and domain specialists**. 

Whether you are a casual player looking for fun everyday trivia, a student, a civil society activist, or an international AI policy lawyer, the game offers tailored game modes across **8 distinct topics** and **3 audience tiers**:

- **🧠 General Knowledge & Everyday Life:** Kitchen essentials, voice assistants, smart devices, everyday food, board games (accessible to everyone without university education).
- **🎬 Culture & Media:** Movies, music formats, superhero teams, streaming platforms, pop culture.
- **🔬 Science & Nature:** Animals, big cats, planets, renewable energy, cloud types, physics.
- **📜 History & Heritage:** Ancient civilizations, epochal inventions, world wonders, historical peace conferences.
- **🏛️ Politics & Society:** Fundamental democratic rights, voting, elections, civic advocacy, branches of government.
- **⚖️ Law & Justice:** Courtroom basics, evidence, civil liberties, contract essentials, Latin maxims, landmark cases.
- **🌍 International Relations:** UN diplomacy, world capitals, passports, treaties, sanctions, P5 members.
- **🤖 AI & Technology:** Everyday social media formats and privacy tools up to the EU AI Act, compute hardware, and autonomous weapons (LAWS).
- **🔀 Custom Mix & Match:** An interactive topic checklist allowing players to select any combination of topics to dynamically synthesize infinite 16-word puzzles on the fly!

---

## ✨ Key Features

- **🔮 Experimental 3D Spatial Holographic Mode:** Seamlessly switch between **2D Classic** and **3D Spatial** modes with a single click.
  - **Hardware-Accelerated CSS 3D:** 120 FPS GPU rendering with zero heavy WebGL libraries.
  - **Multi-Dimension Switcher:**
    - `4×4 (16 Items)`: Classic 3D floating planar matrix.
    - `4×4×2 (32 Items / 8 Groups)`: Epic dual-layer deck with Alpha (Upper) and Beta (Lower) depth layers!
    - `3D Cylindrical Orbit`: Futuristic rotating carousel ring.
    - `3D Cube Faces`: 4 sides of an interactive rotating spatial prism.
  - **Orbital Camera Controls:** Drag to freely rotate 360°, scroll wheel to zoom in/out, depth slider to expand/contract layer spacing in real time, with quick presets (Isometric, Frontal, Top-Down, and Gentle Auto-Spin).
- **🌐 Multi-Topic Selector & Dynamic Mix Generator:** Quick one-click topic pill navigation + a comprehensive modal with checkboxes to mix and blend any subject.
- **👥 3 Audience Tiers:** 
  - `Everyone / Casual` (zero jargon, highly intuitive, fun for all ages)
  - `Civil Society` (civic rights, democratic institutions, international history)
  - `Specialist` (statutory citations, treaty frameworks, foundation model architectures)
- **🏛️ Deep Pedagogical Intelligence Dossiers:** Solving any category unlocks an in-depth intelligence briefing detailing the exact statute, history, or scientific basis.
- **📅 Daily Challenge Mode:** Synchronized epoch-based daily puzzle rotation with persistent streak tracking, win-rate percentage, and guess distribution metrics.
- **📚 Archive Vault (Curated Catalogue + Infinite Generator):** Browse puzzles by topic and audience, or generate custom mixes.
- **✏️ Community & Custom Puzzle Creator:** Built-in puzzle designer that validates 16 unique items and generates a compressed, base64 shareable URL hash for viral play without any backend server.
- **🔊 Web Audio API Synthesizer:** Polyphonic haptic audio synthesized directly in code (clicks, error buzzes, chord progressions, victory fanfares) with **0 bytes of external audio asset bloat**.
- **🎨 Glassmorphic Aesthetic & Dual Theme:** Seamless dark (`#0b0f19`) and light modes styled to match the editorial luxury standard of [aviperera.com](https://aviperera.com).
- **📐 Iframe Auto-Resizer:** Native `postMessage` protocol allowing parents (WordPress / Kadence) to auto-adjust iframe height dynamically with zero scrollbars.
- **⚡ Ultra-Lightweight Footprint:** The entire project totals **~210 KB** across all assets, utilizing **zero `node_modules`** and zero laptop storage bloat.

---

## 🧩 Color Hierarchy & Difficulty Gradient

| Color | Tier | Focus Area | Cognitive Demand |
| :---: | :--- | :--- | :--- |
| 🟨 **Yellow** | Straightforward | Core taxonomies, direct instances, recognized concepts | Direct memory recall |
| 🟩 **Green** | Intermediate | Shared technical, operational, or statutory properties | Domain taxonomy mapping |
| 🟦 **Blue** | Advanced | Specific treaties, bilateral declarations, landmark legal cases | Institutional precision |
| 🟪 **Purple** | Tricky / Lateral | Wordplay, acronym stems, compound words, puns | Lateral divergent thinking |

---

## 🚀 Quick Start / Local Testing

To play and test the game immediately on your computer:

### Option 1: Direct Browser Launch (No server needed)
Simply double-click or open `index.html` in Chrome, Firefox, Safari, or Edge.

### Option 2: Lightweight Python HTTP Server
```bash
cd ai-connections
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

### Option 3: Node `npx serve`
```bash
npx serve ai-connections
```

---

## 🌐 Embedding on `aviperera.com`

Add this block into a WordPress Custom HTML block or Kadence template:

```html
<div style="width: 100%; max-width: 680px; margin: 0 auto;">
  <iframe
    id="ai-connections-frame"
    src="https://a-vip.github.io/ai-connections/?embed=true"
    width="100%"
    height="660"
    style="border: none; border-radius: 16px; width: 100%;"
    allow="clipboard-write"
  ></iframe>
</div>

<script>
  window.addEventListener('message', function (e) {
    if (e.data && e.data.type === 'connections-resize') {
      var f = document.getElementById('ai-connections-frame');
      if (f && e.data.height) f.style.height = (e.data.height + 20) + 'px';
    }
  });
</script>
```

For complete customization flags (`?theme=dark`, `?puzzle=2`, `?sound=0`), see [EMBED-GUIDE.md](EMBED-GUIDE.md).

---

## 📂 Project Structure

```text
ai-connections/
├── index.html        # Semantic, accessible HTML5 structure & modals
├── styles.css        # Responsive glassmorphism, animations & CSS tokens
├── app.js            # Game state machine, Web Audio synthesizer & share logic
├── puzzles.js        # 20+ curated AI governance & legal puzzles with dossiers
├── EMBED-GUIDE.md    # Drop-in WordPress Kadence embed guide
├── LICENSE           # MIT Open-Source License
└── README.md         # Production documentation
```

---

## 📄 License & Attribution

Developed with precision by [Avi Perera](https://aviperera.com).  
Released under the [MIT License](LICENSE).

