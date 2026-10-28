# Embedding AI Connections on aviperera.com

This guide provides drop-in instructions for embedding the **AI Connections** game into [aviperera.com](https://aviperera.com) (WordPress Kadence Theme) or any modern web container.

---

## 1. Quick Iframe Embed (Recommended)

Drop this responsive iframe snippet directly into a **Custom HTML Block** in the WordPress Block Editor (Gutenberg / Kadence):

```html
<!-- AI Connections Responsive Container -->
<div class="ai-connections-wrapper" style="width: 100%; max-width: 680px; margin: 0 auto; min-height: 640px;">
  <iframe
    id="ai-connections-frame"
    src="https://a-vip.github.io/ai-connections/?embed=true"
    title="AI Connections: The AI Law & Policy Puzzle"
    width="100%"
    height="660"
    style="border: none; border-radius: 16px; width: 100%; overflow: hidden; background: transparent;"
    loading="lazy"
    allow="clipboard-write"
  ></iframe>
</div>

<!-- Dynamic Height Auto-Resizer -->
<script>
  window.addEventListener('message', function (event) {
    if (event.data && event.data.type === 'connections-resize') {
      var frame = document.getElementById('ai-connections-frame');
      if (frame && event.data.height) {
        frame.style.height = (event.data.height + 20) + 'px';
      }
    }
  });
</script>
```

---

## 2. Supported URL Parameters

You can customize the game behavior via query parameters in the iframe `src`:

| Parameter | Options | Description |
| :--- | :--- | :--- |
| `embed` | `true` | Strips exterior margins/background for a seamless flush iframe fit. |
| `theme` | `dark` \| `light` | Forces dark or light mode (matches Kadence palette tokens). |
| `puzzle` | `1` to `20` | Pins the game to a specific curated puzzle rather than the daily rotation. |
| `sound` | `0` \| `1` | `0` mutes Web Audio API effects by default. |

### Example Combinations
- **Dark Mode Daily Embed:**  
  `https://a-vip.github.io/ai-connections/?embed=true&theme=dark`
- **Specific Autonomous Weapons Challenge (Puzzle #2):**  
  `https://a-vip.github.io/ai-connections/?embed=true&puzzle=2`
- **Muted Minimalist:**  
  `https://a-vip.github.io/ai-connections/?embed=true&sound=0`

---

## 3. Direct Hosting Options on Hostinger / Subdomain

Because the entire application has **zero dependencies** and totals **under 150 KB**, it can be deployed via multiple zero-cost avenues:

### Option A: GitHub Pages (Instant & Free)
1. In the GitHub repository settings (`https://github.com/a-vip/ai-connections`), go to **Settings → Pages**.
2. Source: **Deploy from a branch** → Branch: `main` → Folder: `/ (root)`.
3. Live URL will be: `https://a-vip.github.io/ai-connections/`.

### Option B: Hostinger Subdomain (`connections.aviperera.com`)
1. In Hostinger hPanel, create subdomain `connections.aviperera.com`.
2. Upload `index.html`, `styles.css`, `app.js`, and `puzzles.js` into `public_html/connections` via Git or File Manager.
3. Access directly at `https://connections.aviperera.com`.

### Option C: Subfolder in WordPress Theme
Place the folder in `avi-wp-theme/apps/connections` to serve it under your main domain structure.

---

## 4. Performance & Security Notes
- **Zero Dependencies:** No npm packages, node_modules, or vulnerable build scripts.
- **Local Storage Isolation:** Game progress, streaks, and preferences are stored under namespaced keys (`ai_connections_*`).
- **Web Audio API:** All haptic feedback and chimes are polyphonically synthesized at runtime with zero external audio MP3/WAV assets to load.
- **CSP Compliant:** Works cleanly under strict Content Security Policies with `clipboard-write` permissions for sharing results.
