/**
 * AI CONNECTIONS - GAME ENGINE
 * Author: Avi Perera (aviperera.com)
 * High-performance, zero-dependency, modular client-side engine with Web Audio API synthesis
 */

import { PUZZLES } from './puzzles.js';

// --- Web Audio Synthesizer (Zero External Audio Assets) ---
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = localStorage.getItem('ai_connections_sound') !== 'false';
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem('ai_connections_sound', this.enabled ? 'true' : 'false');
    return this.enabled;
  }

  playTone(freq, type = 'sine', duration = 0.1, gainVal = 0.15) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // AudioContext unavailable or restricted
    }
  }

  playTap() {
    this.playTone(520, 'sine', 0.06, 0.12);
  }

  playDeselect() {
    this.playTone(380, 'sine', 0.05, 0.08);
  }

  playShuffle() {
    this.playTone(420, 'triangle', 0.08, 0.1);
  }

  playWrong() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(140, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(110, this.ctx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.25);
    } catch (e) {}
  }

  playOneAway() {
    this.playTone(660, 'sine', 0.12, 0.15);
    setTimeout(() => this.playTone(880, 'sine', 0.15, 0.12), 80);
  }

  playCorrect() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        setTimeout(() => {
          this.playTone(freq, 'triangle', 0.35, 0.14);
        }, idx * 70);
      });
    } catch (e) {}
  }

  playWin() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      notes.forEach((freq, idx) => {
        setTimeout(() => {
          this.playTone(freq, 'sine', 0.5, 0.18);
        }, idx * 100);
      });
    } catch (e) {}
  }
}

// --- Main Game State Machine ---
class ConnectionsGame {
  constructor() {
    this.sound = new SoundEngine();
    this.puzzleIndex = 0;
    this.currentPuzzle = null;
    this.remainingTiles = [];
    this.selectedTiles = new Set();
    this.solvedCategories = [];
    this.mistakesRemaining = 4;
    this.maxMistakes = 4;
    this.guessHistory = [];
    this.submittedCombinations = new Set();
    this.gameOver = false;
    this.gameWon = false;
    this.isCustom = false;

    // DOM Elements
    this.dom = {
      grid: document.getElementById('grid-container'),
      solved: document.getElementById('solved-categories'),
      mistakeDots: document.getElementById('mistake-dots'),
      btnSubmit: document.getElementById('btn-submit'),
      btnShuffle: document.getElementById('btn-shuffle'),
      btnDeselect: document.getElementById('btn-deselect'),
      btnHint: document.getElementById('btn-hint'),
      puzzleTitle: document.getElementById('puzzle-title-display'),
      puzzleDiff: document.getElementById('puzzle-difficulty-display'),
      puzzleMode: document.getElementById('puzzle-mode-tag'),
      toastContainer: document.getElementById('toast-container'),
      btnArchive: document.getElementById('btn-archive'),
      btnCustom: document.getElementById('btn-custom'),
      btnHelp: document.getElementById('btn-help'),
      btnStats: document.getElementById('btn-stats'),
      btnSound: document.getElementById('btn-sound'),
      btnTheme: document.getElementById('btn-theme'),
      btnShareCopy: document.getElementById('btn-share-copy'),
      btnGenerateCustom: document.getElementById('btn-generate-custom'),
      shareSection: document.getElementById('share-section'),
      sharePreview: document.getElementById('share-preview'),
      archiveList: document.getElementById('archive-list')
    };

    this.stats = this.loadStats();
    this.init();
  }

  init() {
    this.detectEnvironment();
    this.bindEvents();
    this.initThemeAndSound();
    this.resolveTargetPuzzle();
    this.startPuzzle(this.puzzleIndex);
    this.notifyParentHeight();
  }

  detectEnvironment() {
    const params = new URLSearchParams(window.location.search);
    const isEmbed = params.get('embed') === 'true' || window.self !== window.top;
    if (isEmbed) {
      document.body.classList.add('embedded');
    }
  }

  initThemeAndSound() {
    const params = new URLSearchParams(window.location.search);
    const themeParam = params.get('theme');
    const storedTheme = localStorage.getItem('ai_connections_theme');
    const theme = themeParam || storedTheme || 'dark';
    document.documentElement.setAttribute('data-theme', theme);

    if (params.get('sound') === '0') {
      this.sound.enabled = false;
    }
    this.updateSoundIcon();
  }

  updateSoundIcon() {
    this.dom.btnSound.textContent = this.sound.enabled ? '🔊' : '🔇';
    this.dom.btnSound.title = this.sound.enabled ? 'Mute Sound' : 'Enable Sound';
  }

  resolveTargetPuzzle() {
    const params = new URLSearchParams(window.location.search);
    const customData = params.get('custom');
    if (customData) {
      try {
        const decoded = JSON.parse(decodeURIComponent(escape(atob(customData))));
        if (decoded && decoded.categories && decoded.categories.length === 4) {
          this.currentPuzzle = decoded;
          this.isCustom = true;
          return;
        }
      } catch (e) {
        this.showToast('Invalid custom puzzle link! Loading Daily.');
      }
    }

    const puzzleParam = params.get('puzzle');
    if (puzzleParam !== null) {
      const idx = parseInt(puzzleParam, 10);
      if (!isNaN(idx) && idx >= 1 && idx <= PUZZLES.length) {
        this.puzzleIndex = idx - 1;
        return;
      }
    }

    // Default to Daily Puzzle (Epoch Day modulo count)
    const epochDays = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
    this.puzzleIndex = epochDays % PUZZLES.length;
  }

  startPuzzle(index) {
    if (!this.isCustom) {
      this.puzzleIndex = index;
      this.currentPuzzle = PUZZLES[this.puzzleIndex];
    }

    this.solvedCategories = [];
    this.selectedTiles.clear();
    this.mistakesRemaining = this.maxMistakes;
    this.guessHistory = [];
    this.submittedCombinations.clear();
    this.gameOver = false;
    this.gameWon = false;

    // Collect 16 items
    const allItems = [];
    this.currentPuzzle.categories.forEach(cat => {
      cat.items.forEach(item => {
        allItems.push({
          text: item.trim().toUpperCase(),
          category: cat.name,
          color: cat.color
        });
      });
    });

    this.remainingTiles = this.shuffleArray(allItems);

    // Update Header Metadata
    this.dom.puzzleTitle.textContent = this.isCustom ? 'Custom AI Puzzle' : `Puzzle #${this.currentPuzzle.id}`;
    this.dom.puzzleDiff.textContent = this.currentPuzzle.difficulty || 'Intermediate';
    this.dom.puzzleDiff.className = `difficulty-pill ${this.currentPuzzle.difficulty || 'Intermediate'}`;
    this.dom.puzzleMode.textContent = this.isCustom ? 'Community Created' : (this.puzzleIndex === (Math.floor(Date.now() / 86400000) % PUZZLES.length) ? 'Daily Challenge' : 'Archive Vault');

    this.renderMistakes();
    this.renderSolvedCategories();
    this.renderGrid();
    this.updateControls();
    this.notifyParentHeight();
  }

  renderMistakes() {
    this.dom.mistakeDots.innerHTML = '';
    for (let i = 0; i < this.maxMistakes; i++) {
      const dot = document.createElement('span');
      dot.className = i < this.mistakesRemaining ? 'dot' : 'dot lost';
      this.dom.mistakeDots.appendChild(dot);
    }
  }

  renderSolvedCategories() {
    this.dom.solved.innerHTML = '';
    this.solvedCategories.forEach(cat => {
      const card = document.createElement('div');
      card.className = `category-card ${cat.color}`;
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `View dossier for ${cat.name}`);

      const title = document.createElement('div');
      title.className = 'card-title';
      title.textContent = cat.name;

      const items = document.createElement('div');
      items.className = 'card-items';
      items.textContent = cat.items.join(', ');

      const hint = document.createElement('div');
      hint.className = 'card-hint';
      hint.innerHTML = '📖 Tap for Intelligence Dossier';

      card.appendChild(title);
      card.appendChild(items);
      card.appendChild(hint);

      card.addEventListener('click', () => {
        this.sound.playTap();
        this.openDossierModal(cat);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.openDossierModal(cat);
        }
      });

      this.dom.solved.appendChild(card);
    });
  }

  renderGrid() {
    this.dom.grid.innerHTML = '';
    this.remainingTiles.forEach(tileObj => {
      const tile = document.createElement('div');
      tile.className = 'tile';
      tile.textContent = tileObj.text;
      tile.setAttribute('role', 'checkbox');
      tile.setAttribute('aria-checked', this.selectedTiles.has(tileObj.text) ? 'true' : 'false');
      tile.setAttribute('tabindex', '0');

      // Adaptive text size for long phrases
      if (tileObj.text.length > 22) {
        tile.classList.add('extra-long-text');
      } else if (tileObj.text.length > 14) {
        tile.classList.add('long-text');
      }

      if (this.selectedTiles.has(tileObj.text)) {
        tile.classList.add('selected');
      }

      tile.addEventListener('click', () => this.handleTileClick(tileObj.text, tile));
      tile.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.handleTileClick(tileObj.text, tile);
        }
      });

      this.dom.grid.appendChild(tile);
    });
  }

  handleTileClick(text, element) {
    if (this.gameOver) return;

    if (this.selectedTiles.has(text)) {
      this.selectedTiles.delete(text);
      this.sound.playDeselect();
      element.classList.remove('selected');
      element.setAttribute('aria-checked', 'false');
    } else {
      if (this.selectedTiles.size >= 4) {
        this.showToast('You can only select 4 items!');
        return;
      }
      this.selectedTiles.add(text);
      this.sound.playTap();
      element.classList.add('selected');
      element.setAttribute('aria-checked', 'true');
    }

    this.updateControls();
  }

  updateControls() {
    this.dom.btnSubmit.disabled = this.selectedTiles.size !== 4 || this.gameOver;
  }

  handleShuffle() {
    if (this.gameOver) return;
    this.sound.playShuffle();
    this.remainingTiles = this.shuffleArray(this.remainingTiles);
    this.renderGrid();
  }

  handleDeselectAll() {
    if (this.gameOver || this.selectedTiles.size === 0) return;
    this.sound.playDeselect();
    this.selectedTiles.clear();
    this.renderGrid();
    this.updateControls();
  }

  handleHint() {
    if (this.gameOver) return;
    // Find an unsolved category and highlight 2 of its items
    const unsolvedCat = this.currentPuzzle.categories.find(cat => 
      !this.solvedCategories.some(solved => solved.name === cat.name)
    );
    if (!unsolvedCat) return;

    const availableItems = unsolvedCat.items.filter(item => 
      this.remainingTiles.some(t => t.text === item.toUpperCase())
    );

    if (availableItems.length >= 2) {
      this.sound.playOneAway();
      this.showToast(`💡 Hint: "${availableItems[0]}" and "${availableItems[1]}" share a connection!`);
    }
  }

  handleSubmit() {
    if (this.selectedTiles.size !== 4 || this.gameOver) return;

    const selectedArray = Array.from(this.selectedTiles);
    const sortedKey = [...selectedArray].sort().join('|');

    // Duplicate check
    if (this.submittedCombinations.has(sortedKey)) {
      this.showToast('Already guessed!');
      this.sound.playDeselect();
      return;
    }
    this.submittedCombinations.add(sortedKey);

    // Map each selected item to its category
    const guessWithColors = selectedArray.map(item => {
      const tileObj = this.remainingTiles.find(t => t.text === item);
      return { item, color: tileObj ? tileObj.color : 'yellow' };
    });
    this.guessHistory.push(guessWithColors);

    // Check if the 4 items match any unsolved category
    let matchedCategory = null;
    for (const cat of this.currentPuzzle.categories) {
      const isAlreadySolved = this.solvedCategories.some(s => s.name === cat.name);
      if (isAlreadySolved) continue;

      const catItemsUpper = cat.items.map(i => i.trim().toUpperCase());
      const allMatch = selectedArray.every(item => catItemsUpper.includes(item));
      if (allMatch) {
        matchedCategory = cat;
        break;
      }
    }

    if (matchedCategory) {
      // Correct!
      this.sound.playCorrect();
      this.solvedCategories.push(matchedCategory);
      this.remainingTiles = this.remainingTiles.filter(t => !selectedArray.includes(t.text));
      this.selectedTiles.clear();

      this.renderSolvedCategories();
      this.renderGrid();
      this.updateControls();
      this.notifyParentHeight();

      // Check win condition
      if (this.solvedCategories.length === 4) {
        this.handleGameWin();
      }
    } else {
      // Check for "One away..."
      let isOneAway = false;
      for (const cat of this.currentPuzzle.categories) {
        const isAlreadySolved = this.solvedCategories.some(s => s.name === cat.name);
        if (isAlreadySolved) continue;

        const catItemsUpper = cat.items.map(i => i.trim().toUpperCase());
        const matchCount = selectedArray.filter(item => catItemsUpper.includes(item)).length;
        if (matchCount === 3) {
          isOneAway = true;
          break;
        }
      }

      this.mistakesRemaining--;
      this.renderMistakes();

      // Animate shake on selected tiles
      const tileDoms = this.dom.grid.querySelectorAll('.tile.selected');
      tileDoms.forEach(t => t.classList.add('shake'));
      setTimeout(() => tileDoms.forEach(t => t.classList.remove('shake')), 400);

      if (isOneAway) {
        this.sound.playOneAway();
        this.showToast('One away...');
      } else {
        this.sound.playWrong();
      }

      if (this.mistakesRemaining <= 0) {
        this.handleGameOver();
      }
    }
  }

  handleGameWin() {
    this.gameOver = true;
    this.gameWon = true;
    this.sound.playWin();
    this.showToast('Superb! All connections solved! 🎯');
    this.updateStats(true);
    setTimeout(() => this.openStatsModal(), 1200);
  }

  handleGameOver() {
    this.gameOver = true;
    this.gameWon = false;
    this.showToast('Game over! Revealing remaining connections...');
    this.updateStats(false);

    // Auto-reveal remaining categories with a progressive reveal
    setTimeout(() => {
      this.currentPuzzle.categories.forEach(cat => {
        if (!this.solvedCategories.some(s => s.name === cat.name)) {
          this.solvedCategories.push(cat);
        }
      });
      this.remainingTiles = [];
      this.selectedTiles.clear();
      this.renderSolvedCategories();
      this.renderGrid();
      this.updateControls();
      this.notifyParentHeight();
      setTimeout(() => this.openStatsModal(), 1500);
    }, 1000);
  }

  openDossierModal(cat) {
    const modal = document.getElementById('modal-dossier');
    const pill = document.getElementById('dossier-pill');
    const itemsEl = document.getElementById('dossier-items');
    const summaryEl = document.getElementById('dossier-summary');
    const basisEl = document.getElementById('dossier-basis');
    const impactEl = document.getElementById('dossier-impact');

    pill.className = `dossier-pill ${cat.color}`;
    pill.textContent = cat.name;
    itemsEl.textContent = cat.items.join(' • ');

    if (cat.dossier) {
      summaryEl.textContent = cat.dossier.summary || 'No summary provided.';
      basisEl.textContent = cat.dossier.legalOrTechBasis || 'Statutory / technical literature consensus.';
      impactEl.textContent = cat.dossier.impact || 'Constitutes an essential pillar of contemporary AI governance.';
    } else {
      summaryEl.textContent = 'Curated grouping in AI governance and frontier systems.';
      basisEl.textContent = 'International AI regulatory frameworks and benchmark evaluations.';
      impactEl.textContent = 'Defines the structural boundaries of lawful and safe machine learning systems.';
    }

    this.openModal(modal);
  }

  openStatsModal() {
    const modal = document.getElementById('modal-stats');
    document.getElementById('stat-played').textContent = this.stats.played;
    const winPct = this.stats.played > 0 ? Math.round((this.stats.won / this.stats.played) * 100) : 0;
    document.getElementById('stat-win-pct').textContent = `${winPct}%`;
    document.getElementById('stat-streak').textContent = this.stats.streak;
    document.getElementById('stat-max-streak').textContent = this.stats.maxStreak;

    if (this.gameOver && this.guessHistory.length > 0) {
      this.dom.shareSection.classList.remove('hidden');
      const shareText = this.generateShareText();
      this.dom.sharePreview.textContent = shareText;
    } else {
      this.dom.shareSection.classList.add('hidden');
    }

    this.openModal(modal);
  }

  generateShareText() {
    const colorEmojiMap = {
      yellow: '🟨',
      green: '🟩',
      blue: '🟦',
      purple: '🟪'
    };

    let titleText = this.isCustom 
      ? 'AI Connections (Custom Challenge)'
      : `AI Connections #${this.currentPuzzle.id}`;

    let matrix = this.guessHistory.map(row => {
      return row.map(g => colorEmojiMap[g.color] || '⬜').join('');
    }).join('\n');

    return `${titleText}\nScore: ${this.gameWon ? `${this.guessHistory.length} Guesses` : 'Revealed'}\n${matrix}\nPlay at aviperera.com`;
  }

  copyShareResult() {
    const text = this.generateShareText();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        this.sound.playTap();
        this.showToast('Results copied to clipboard! 📋');
      }).catch(() => {
        this.fallbackCopy(text);
      });
    } else {
      this.fallbackCopy(text);
    }
  }

  fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      this.sound.playTap();
      this.showToast('Results copied to clipboard! 📋');
    } catch (e) {
      this.showToast('Could not auto-copy. Please copy manually.');
    }
    document.body.removeChild(textarea);
  }

  openArchiveModal() {
    const modal = document.getElementById('modal-archive');
    this.dom.archiveList.innerHTML = '';

    PUZZLES.forEach((p, idx) => {
      const card = document.createElement('div');
      card.className = `archive-card ${idx === this.puzzleIndex && !this.isCustom ? 'active' : ''}`;
      
      const meta = document.createElement('div');
      meta.className = 'archive-meta';

      const title = document.createElement('div');
      title.className = 'archive-title';
      title.textContent = `#${p.id} — ${p.title}`;

      const tags = document.createElement('div');
      tags.className = 'archive-tags';
      tags.textContent = (p.tags || []).join(' • ');

      meta.appendChild(title);
      meta.appendChild(tags);

      const diffPill = document.createElement('span');
      diffPill.className = `difficulty-pill ${p.difficulty || 'Intermediate'}`;
      diffPill.textContent = p.difficulty || 'Intermediate';

      card.appendChild(meta);
      card.appendChild(diffPill);

      card.addEventListener('click', () => {
        this.sound.playTap();
        this.closeModal(modal);
        this.isCustom = false;
        // Clean URL params if needed
        window.history.pushState({}, '', `?puzzle=${p.id}`);
        this.startPuzzle(idx);
      });

      this.dom.archiveList.appendChild(card);
    });

    this.openModal(modal);
  }

  openCustomModal() {
    this.openModal(document.getElementById('modal-custom'));
  }

  generateCustomPuzzle() {
    const title = document.getElementById('custom-puzzle-title').value.trim() || 'Custom AI Challenge';
    const groups = [
      { color: 'yellow', prefix: 'custom-g1' },
      { color: 'green', prefix: 'custom-g2' },
      { color: 'blue', prefix: 'custom-g3' },
      { color: 'purple', prefix: 'custom-g4' }
    ];

    const categories = [];
    const allItems = new Set();

    for (const g of groups) {
      const catName = document.getElementById(`${g.prefix}-title`).value.trim();
      const items = [
        document.getElementById(`${g.prefix}-item1`).value.trim().toUpperCase(),
        document.getElementById(`${g.prefix}-item2`).value.trim().toUpperCase(),
        document.getElementById(`${g.prefix}-item3`).value.trim().toUpperCase(),
        document.getElementById(`${g.prefix}-item4`).value.trim().toUpperCase()
      ];

      if (!catName) {
        this.showToast(`Please enter a category name for ${g.color.toUpperCase()} group.`);
        return;
      }

      for (const item of items) {
        if (!item) {
          this.showToast(`All 4 items in ${catName} must be filled.`);
          return;
        }
        if (allItems.has(item)) {
          this.showToast(`Duplicate item detected: "${item}". All 16 items must be unique.`);
          return;
        }
        allItems.add(item);
      }

      categories.push({
        name: catName.toUpperCase(),
        color: g.color,
        items
      });
    }

    const payload = {
      id: 'CUSTOM',
      title,
      difficulty: 'Custom',
      categories
    };

    const b64 = btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
    const shareUrl = `${window.location.origin}${window.location.pathname}?custom=${b64}`;

    this.fallbackCopy(shareUrl);
    this.showToast('Custom puzzle link copied to clipboard! 🔗');
    this.closeModal(document.getElementById('modal-custom'));
  }

  showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    this.dom.toastContainer.appendChild(toast);
    setTimeout(() => {
      if (toast.parentElement) toast.parentElement.removeChild(toast);
    }, 2500);
  }

  openModal(modal) {
    modal.classList.add('open');
  }

  closeModal(modal) {
    modal.classList.remove('open');
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('ai_connections_theme', nextTheme);
    this.sound.playTap();
  }

  toggleSound() {
    this.sound.toggle();
    this.updateSoundIcon();
    if (this.sound.enabled) {
      this.sound.playTap();
    }
  }

  notifyParentHeight() {
    if (window.parent && window.parent !== window) {
      const height = document.documentElement.scrollHeight || document.body.scrollHeight;
      window.parent.postMessage({ type: 'connections-resize', height }, '*');
    }
  }

  shuffleArray(arr) {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  loadStats() {
    const defaultStats = { played: 0, won: 0, streak: 0, maxStreak: 0 };
    try {
      const stored = localStorage.getItem('ai_connections_stats');
      return stored ? JSON.parse(stored) : defaultStats;
    } catch (e) {
      return defaultStats;
    }
  }

  updateStats(won) {
    this.stats.played++;
    if (won) {
      this.stats.won++;
      this.stats.streak++;
      if (this.stats.streak > this.stats.maxStreak) {
        this.stats.maxStreak = this.stats.streak;
      }
    } else {
      this.stats.streak = 0;
    }
    try {
      localStorage.setItem('ai_connections_stats', JSON.stringify(this.stats));
    } catch (e) {}
  }

  bindEvents() {
    this.dom.btnShuffle.addEventListener('click', () => this.handleShuffle());
    this.dom.btnDeselect.addEventListener('click', () => this.handleDeselectAll());
    this.dom.btnHint.addEventListener('click', () => this.handleHint());
    this.dom.btnSubmit.addEventListener('click', () => this.handleSubmit());
    this.dom.btnArchive.addEventListener('click', () => this.openArchiveModal());
    this.dom.btnCustom.addEventListener('click', () => this.openCustomModal());
    this.dom.btnHelp.addEventListener('click', () => this.openModal(document.getElementById('modal-help')));
    this.dom.btnStats.addEventListener('click', () => this.openStatsModal());
    this.dom.btnSound.addEventListener('click', () => this.toggleSound());
    this.dom.btnTheme.addEventListener('click', () => this.toggleTheme());
    this.dom.btnShareCopy.addEventListener('click', () => this.copyShareResult());
    this.dom.btnGenerateCustom.addEventListener('click', () => this.generateCustomPuzzle());

    // Modal Close Buttons and Backdrop click
    document.querySelectorAll('[data-close]').forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-close');
        this.closeModal(document.getElementById(modalId));
      });
    });

    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) this.closeModal(modal);
      });
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === 's' || e.key === 'S') {
        this.handleShuffle();
      } else if (e.key === 'Escape') {
        // Close modals if open, else deselect
        const openModal = document.querySelector('.modal-overlay.open');
        if (openModal) {
          this.closeModal(openModal);
        } else {
          this.handleDeselectAll();
        }
      } else if (e.key === 'Enter') {
        if (this.selectedTiles.size === 4 && !this.dom.btnSubmit.disabled) {
          this.handleSubmit();
        }
      }
    });

    // Resize observer for iframe communication
    if (window.ResizeObserver) {
      new ResizeObserver(() => this.notifyParentHeight()).observe(document.body);
    }
  }
}

// Instantiate engine when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  window.__AI_CONNECTIONS__ = new ConnectionsGame();
});
