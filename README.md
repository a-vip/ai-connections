# AI Connections 🤖⚖️

> **The Daily Lateral Thinking Puzzle for AI Governance, International Law & Frontier Systems.**  
> Curated and developed by [Avi Perera](https://aviperera.com).

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero-success.svg)](package.json)
[![Size: <150KB](https://img.shields.io/badge/Bundle-~110KB-brightgreen.svg)](#performance--architecture)
[![Lighthouse: 100/100](https://img.shields.io/badge/Lighthouse-100%2F100-emerald.svg)](#performance--architecture)

---

## 🎯 Overview

**AI Connections** is an intellectual twist on the popular NYT Connections game mechanic, specifically designed for AI researchers, legal scholars, tech policymakers, and defense analysts.

Players are presented with 16 terms and must identify the 4 underlying groups of 4 without making 4 mistakes. Each puzzle balances surface-level semantic red herrings against rigorous regulatory, technical, and lateral taxonomies.

---

## ✨ Key Features

- **🏛️ Deep Pedagogical Intelligence Dossiers:** Solving any category unlocks an in-depth intelligence briefing detailing the exact statute (e.g. *EU AI Act Article 5*, *US Executive Order 14110*, *Geneva Conventions Common Article 36*), technological substrate, and geopolitical impact.
- **📅 Daily Challenge Mode:** Synchronized epoch-based daily puzzle rotation with persistent streak tracking, win-rate percentage, and guess distribution metrics.
- **📚 Archive Vault (20+ Master Puzzles):** Instant access to hand-crafted challenges ranging across *Autonomous Weapons (LAWS)*, *Copyright & Courts*, *Silicon Sovereignty & Compute*, *Frontier Alignment*, *Multimodal Architectures*, and *Linguistic Lateral Wordplay*.
- **✏️ Community & Custom Puzzle Creator:** Built-in puzzle designer that validates 16 unique items and generates a compressed, base64 shareable URL hash for viral play without any backend server.
- **🔊 Web Audio API Synthesizer:** Polyphonic haptic audio synthesized directly in code (clicks, error buzzes, chord progressions, victory fanfares) with **0 bytes of external audio asset bloat**.
- **🎨 Glassmorphic Aesthetic & Dual Theme:** Seamless dark (`#0b0f19`) and light modes styled to match the editorial luxury standard of [aviperera.com](https://aviperera.com).
- **📐 Iframe Auto-Resizer:** Native `postMessage` protocol allowing parents (WordPress / Kadence) to auto-adjust iframe height dynamically with zero scrollbars.
- **⚡ Ultra-Lightweight Footprint:** The entire project totals **~110 KB** across all assets, utilizing **zero `node_modules`** and zero laptop storage bloat.

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

