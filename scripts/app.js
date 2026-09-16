import { TECH_CATEGORIES, TECH_ICONS } from './data/techIcons.js';
import { LUCEBRA_CERTIFICATIONS } from './data/lucebraBadges.js';
import { STATS_THEMES, SOCIAL_PLATFORMS } from './data/statsThemes.js';
import { generateMarkdown } from './generator.js';

// Application Reactive State
const state = {
  header: {
    name: 'Toghrul Gafarov',
    subtitle: 'Senior Fullstack & Cloud Solutions Architect',
    alignment: 'center',
    typingText: 'Building High-Scale Cloud Systems\nDevOps & Kubernetes Enthusiast\nContinuous Learner & Mentor',
    location: 'Baku / Remote',
    pronouns: 'he/him',
  },
  bio: {
    workingOn: 'Distributed Cloud Architecture & Enterprise LMS',
    learning: 'Advanced Kubernetes & AI Agentic Workflows',
    collaborate: 'Open Source Developer Tools & DevSecOps',
    helpWith: 'TypeScript, Next.js, C# / .NET, Docker',
    reachMe: 'contact@lucebra.com',
    funFact: 'I believe clean code is like fine poetry.',
  },
  certifications: {
    selectedIds: ['devops-pro', 'cloud-architect'],
    userCertIds: {
      'devops-pro': 'bb-bdda5b3675344853a1',
      'cloud-architect': 'bb-cloud-arch-2026',
    },
  },
  techStack: {
    style: 'for-the-badge',
    selectedIds: ['typescript', 'react', 'nextjs', 'nodejs', 'dotnet', 'docker', 'kubernetes', 'aws', 'postgresql', 'redis'],
  },
  githubStats: {
    username: 'Lucebrallc',
    showStats: true,
    showLanguages: true,
    showStreak: true,
    showTrophies: false,
    theme: 'tokyonight',
  },
  socials: {
    linkedin: 'https://linkedin.com/company/lucebra',
    twitter: 'https://x.com/lucebra',
    portfolio: 'https://www.lucebra.com',
    github: 'https://github.com/Lucebrallc',
  },
  includeAttribution: true,
};

let activeTechCategory = 'all';
let techSearchQuery = '';
let activePreviewTab = 'rendered'; // 'rendered' | 'raw'

// --- Initialize App ---
document.addEventListener('DOMContentLoaded', () => {
  renderTechIcons();
  renderCertifications();
  renderSocialInputs();
  renderStatsThemes();
  bindFormInputs();
  updateOutput();
});

// --- Render Tech Stack Picker ---
function renderTechIcons() {
  const container = document.getElementById('tech-icons-grid');
  if (!container) return;

  const filtered = TECH_ICONS.filter((icon) => {
    const matchesCat = activeTechCategory === 'all' || icon.category === activeTechCategory;
    const matchesSearch = icon.name.toLowerCase().includes(techSearchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  container.innerHTML = filtered
    .map((icon) => {
      const isSelected = state.techStack.selectedIds.includes(icon.id);
      return `
        <div class="icon-chip ${isSelected ? 'selected' : ''}" data-tech-id="${icon.id}">
          <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#${icon.color}"></span>
          <span>${icon.name}</span>
        </div>
      `;
    })
    .join('');

  // Bind click events
  container.querySelectorAll('.icon-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      const id = chip.dataset.techId;
      if (state.techStack.selectedIds.includes(id)) {
        state.techStack.selectedIds = state.techStack.selectedIds.filter((t) => t !== id);
      } else {
        state.techStack.selectedIds.push(id);
      }
      renderTechIcons();
      updateOutput();
    });
  });
}

// Tech Category & Search Filters
window.setCategory = (cat) => {
  activeTechCategory = cat;
  document.querySelectorAll('.cat-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.cat === cat);
  });
  renderTechIcons();
};

window.handleTechSearch = (query) => {
  techSearchQuery = query;
  renderTechIcons();
};

// --- Render Lucebra Certifications ---
function renderCertifications() {
  const container = document.getElementById('certifications-list');
  if (!container) return;

  container.innerHTML = LUCEBRA_CERTIFICATIONS.map((cert) => {
    const isSelected = state.certifications.selectedIds.includes(cert.id);
    const userCertId = state.certifications.userCertIds[cert.id] || '';

    return `
      <div class="cert-option" style="${isSelected ? 'border-color: var(--primary);' : ''}">
        <div style="display:flex;gap:0.75rem;align-items:flex-start;">
          <input type="checkbox" id="cert-${cert.id}" ${isSelected ? 'checked' : ''} data-cert-id="${cert.id}" style="margin-top:4px;cursor:pointer;" />
          <div class="cert-info">
            <h4>${cert.title}</h4>
            <p>${cert.category} • <a href="${cert.verifyUrl}" target="_blank" style="color:var(--primary-light);">Explore course on Lucebra →</a></p>
          </div>
        </div>
        <input type="text" class="cert-id-input" placeholder="Cert ID / Verification Code" value="${userCertId}" data-cert-id-val="${cert.id}" />
      </div>
    `;
  }).join('');

  container.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
    cb.addEventListener('change', (e) => {
      const id = e.target.dataset.certId;
      if (e.target.checked) {
        if (!state.certifications.selectedIds.includes(id)) {
          state.certifications.selectedIds.push(id);
        }
      } else {
        state.certifications.selectedIds = state.certifications.selectedIds.filter((c) => c !== id);
      }
      updateOutput();
    });
  });

  container.querySelectorAll('.cert-id-input').forEach((input) => {
    input.addEventListener('input', (e) => {
      const id = e.target.dataset.certIdVal;
      state.certifications.userCertIds[id] = e.target.value.trim();
      updateOutput();
    });
  });
}

// --- Render Social Inputs ---
function renderSocialInputs() {
  const container = document.getElementById('social-inputs-grid');
  if (!container) return;

  container.innerHTML = SOCIAL_PLATFORMS.map((platform) => {
    const val = state.socials[platform.id] || '';
    return `
      <div class="form-group">
        <label>${platform.name}</label>
        <input type="text" placeholder="${platform.prefix}username" value="${val}" data-social-id="${platform.id}" />
      </div>
    `;
  }).join('');

  container.querySelectorAll('input').forEach((input) => {
    input.addEventListener('input', (e) => {
      const id = e.target.dataset.socialId;
      state.socials[id] = e.target.value;
      updateOutput();
    });
  });
}

// --- Render Stats Themes ---
function renderStatsThemes() {
  const select = document.getElementById('stats-theme-select');
  if (!select) return;

  select.innerHTML = STATS_THEMES.map((theme) => {
    return `<option value="${theme.id}" ${state.githubStats.theme === theme.id ? 'selected' : ''}>${theme.name}</option>`;
  }).join('');

  select.addEventListener('change', (e) => {
    state.githubStats.theme = e.target.value;
    updateOutput();
  });
}

// --- Bind Form Inputs to State ---
function bindFormInputs() {
  const bind = (id, obj, prop) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.value = obj[prop] || '';
    el.addEventListener('input', (e) => {
      obj[prop] = e.target.value;
      updateOutput();
    });
  };

  bind('header-name', state.header, 'name');
  bind('header-subtitle', state.header, 'subtitle');
  bind('header-alignment', state.header, 'alignment');
  bind('header-typing', state.header, 'typingText');
  bind('header-location', state.header, 'location');
  bind('header-pronouns', state.header, 'pronouns');

  bind('bio-workingOn', state.bio, 'workingOn');
  bind('bio-learning', state.bio, 'learning');
  bind('bio-collaborate', state.bio, 'collaborate');
  bind('bio-helpWith', state.bio, 'helpWith');
  bind('bio-reachMe', state.bio, 'reachMe');
  bind('bio-funFact', state.bio, 'funFact');

  bind('gh-username', state.githubStats, 'username');

  const bindCheck = (id, obj, prop) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.checked = Boolean(obj[prop]);
    el.addEventListener('change', (e) => {
      obj[prop] = e.target.checked;
      updateOutput();
    });
  };

  bindCheck('gh-stats', state.githubStats, 'showStats');
  bindCheck('gh-streak', state.githubStats, 'showStreak');
  bindCheck('gh-langs', state.githubStats, 'showLanguages');
  bindCheck('gh-trophies', state.githubStats, 'showTrophies');
  bindCheck('include-attribution', state, 'includeAttribution');

  const badgeStyleSelect = document.getElementById('badge-style-select');
  if (badgeStyleSelect) {
    badgeStyleSelect.value = state.techStack.style;
    badgeStyleSelect.addEventListener('change', (e) => {
      state.techStack.style = e.target.value;
      updateOutput();
    });
  }
}

// --- Update Markdown Output and Preview ---
function updateOutput() {
  const markdown = generateMarkdown(state);

  const rawEl = document.getElementById('raw-markdown');
  if (rawEl) {
    rawEl.textContent = markdown;
  }

  const renderedEl = document.getElementById('rendered-markdown');
  if (renderedEl) {
    if (window.marked) {
      renderedEl.innerHTML = window.marked.parse(markdown);
    } else {
      renderedEl.textContent = markdown;
    }
  }
}

// --- Preview Tab Switcher ---
window.switchPreviewTab = (tab) => {
  activePreviewTab = tab;
  document.getElementById('tab-btn-rendered')?.classList.toggle('active', tab === 'rendered');
  document.getElementById('tab-btn-raw')?.classList.toggle('active', tab === 'raw');
  document.getElementById('rendered-markdown')?.style.setProperty('display', tab === 'rendered' ? 'block' : 'none');
  document.getElementById('raw-markdown')?.style.setProperty('display', tab === 'raw' ? 'block' : 'none');
};

// --- Copy to Clipboard ---
window.copyMarkdown = async () => {
  const markdown = generateMarkdown(state);
  try {
    await navigator.clipboard.writeText(markdown);
    showToast('🎉 README Markdown copied to clipboard!');
  } catch (e) {
    showToast('Failed to copy. Please select and copy manually.');
  }
};

// --- Download README.md ---
window.downloadReadme = () => {
  const markdown = generateMarkdown(state);
  const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'README.md';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('📥 README.md downloaded successfully!');
};

// --- Toast helper ---
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

// --- Theme Toggle ---
window.toggleTheme = () => {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  const btn = document.getElementById('theme-toggle-btn');
  if (btn) {
    btn.innerHTML = next === 'dark' ? '🌙 Dark' : '☀️ Light';
  }
};
