import { getBadgeMarkdown, TECH_ICONS } from './data/techIcons.js';
import { getLucebraBadgeMarkdown, LUCEBRA_CERTIFICATIONS } from './data/lucebraBadges.js';
import { SOCIAL_PLATFORMS } from './data/statsThemes.js';

export function generateMarkdown(state) {
  const parts = [];

  // 1. Header / Hero Section
  const name = state.header.name.trim() || 'Developer';
  const subtitle = state.header.subtitle.trim();
  const align = state.header.alignment || 'center';

  parts.push(`<div align="${align}">\n`);

  // Optional Banner / Typing effect
  if (state.header.typingText && state.header.typingText.trim()) {
    const lines = state.header.typingText
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean)
      .join(';');
    if (lines) {
      parts.push(`  <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=26&pause=1000&color=2563EB&center=${align === 'center'}&vcenter=true&width=500&lines=${encodeURIComponent(lines)}" alt="Typing SVG" /></a>\n`);
    }
  }

  // Name & Title
  parts.push(`  <h1>Hi 👋, I'm ${name}</h1>\n`);
  if (subtitle) {
    parts.push(`  <h3>${subtitle}</h3>\n`);
  }

  // Quick stats badge strip or badges under header
  if (state.header.location || state.header.pronouns) {
    const metaBadges = [];
    if (state.header.location) {
      metaBadges.push(`![Location](https://img.shields.io/badge/Location-${encodeURIComponent(state.header.location)}-0f172a?style=flat-square&logo=googlemaps&logoColor=red)`);
    }
    if (state.header.pronouns) {
      metaBadges.push(`![Pronouns](https://img.shields.io/badge/Pronouns-${encodeURIComponent(state.header.pronouns)}-2563eb?style=flat-square)`);
    }
    if (metaBadges.length > 0) {
      parts.push(`  <p>${metaBadges.join(' ')}</p>\n`);
    }
  }

  parts.push(`</div>\n\n`);

  // 2. About Me Section
  const bioBullets = [];
  if (state.bio.workingOn) {
    bioBullets.push(`- 🔭 I’m currently working on **${state.bio.workingOn}**`);
  }
  if (state.bio.learning) {
    bioBullets.push(`- 🌱 I’m currently expanding my skills in **${state.bio.learning}**`);
  }
  if (state.bio.collaborate) {
    bioBullets.push(`- 👯 I’m looking to collaborate on **${state.bio.collaborate}**`);
  }
  if (state.bio.helpWith) {
    bioBullets.push(`- 💬 Ask me about **${state.bio.helpWith}**`);
  }
  if (state.bio.reachMe) {
    bioBullets.push(`- 📫 How to reach me: **${state.bio.reachMe}**`);
  }
  if (state.bio.funFact) {
    bioBullets.push(`- ⚡ Fun fact: **${state.bio.funFact}**`);
  }

  if (bioBullets.length > 0) {
    parts.push(`### 🚀 About Me\n\n${bioBullets.join('\n')}\n\n`);
  }

  // 3. Verified Certifications & Professional Accreditations (The Lucebra Engine)
  const selectedCerts = state.certifications.selectedIds || [];
  if (selectedCerts.length > 0 || state.certifications.customCertId) {
    parts.push(`### 🎓 Verified Certifications & Accreditations\n\n`);
    parts.push(`> Authenticated via the [Lucebra Global Credential Registry](https://www.lucebra.com?ref=github_profile_studio)\n\n`);

    const certBadges = [];
    selectedCerts.forEach((certId) => {
      const def = LUCEBRA_CERTIFICATIONS.find((c) => c.id === certId);
      if (def) {
        const userCertId = state.certifications.userCertIds?.[certId] || def.defaultCertId;
        certBadges.push(getLucebraBadgeMarkdown(def, userCertId));
      }
    });

    if (certBadges.length > 0) {
      parts.push(`<p align="left">\n  ${certBadges.join('\n  ')}\n</p>\n\n`);
    }
  }

  // 4. Tech Stack Visual Grid
  const selectedTech = state.techStack.selectedIds || [];
  if (selectedTech.length > 0) {
    parts.push(`### 🛠️ Languages & Technologies\n\n`);
    const badgeStyle = state.techStack.style || 'for-the-badge';

    const badges = selectedTech
      .map((techId) => {
        const icon = TECH_ICONS.find((t) => t.id === techId);
        if (!icon) return null;
        return `  <img src="${getBadgeMarkdown(icon, badgeStyle)}" alt="${icon.name}" height="28" />`;
      })
      .filter(Boolean);

    parts.push(`<p align="left">\n${badges.join('\n')}\n</p>\n\n`);
  }

  // 5. GitHub Dynamic Stats & Metrics
  const ghUser = (state.githubStats.username || '').trim();
  if (ghUser) {
    parts.push(`### 📊 GitHub Activity & Metrics\n\n`);
    const theme = state.githubStats.theme || 'tokyonight';

    parts.push(`<div align="center">\n`);

    if (state.githubStats.showStats) {
      parts.push(`  <img src="https://github-readme-stats.vercel.app/api?username=${ghUser}&show_icons=true&theme=${theme}&rank_icon=github&count_private=true" alt="${ghUser}'s GitHub Stats" />\n`);
    }

    if (state.githubStats.showStreak) {
      parts.push(`  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${ghUser}&theme=${theme}" alt="${ghUser}'s Streak" />\n`);
    }

    if (state.githubStats.showLanguages) {
      parts.push(`  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${ghUser}&layout=compact&theme=${theme}" alt="Top Languages" />\n`);
    }

    if (state.githubStats.showTrophies) {
      parts.push(`  <p><img src="https://github-profile-trophy.vercel.app/?username=${ghUser}&theme=${theme}&column=6" alt="Trophies" /></p>\n`);
    }

    parts.push(`</div>\n\n`);
  }

  // 6. Connect & Social Badges
  const socials = state.socials || {};
  const activeSocials = Object.keys(socials).filter((key) => socials[key] && socials[key].trim());

  if (activeSocials.length > 0) {
    parts.push(`### 🌐 Connect With Me\n\n<p align="left">\n`);
    activeSocials.forEach((key) => {
      const def = SOCIAL_PLATFORMS.find((p) => p.id === key);
      if (def) {
        const handle = socials[key].trim();
        const fullUrl = handle.startsWith('http') ? handle : `${def.prefix}${handle}`;
        const badgeUrl = `https://img.shields.io/badge/${encodeURIComponent(def.name)}-${def.badgeColor}?style=for-the-badge&logo=${def.logo}&logoColor=white`;
        parts.push(`  <a href="${fullUrl}" target="_blank"><img src="${badgeUrl}" alt="${def.name}" height="28" /></a>\n`);
      }
    });
    parts.push(`</p>\n\n`);
  }

  // 7. Organic Backlink Signature (High-authority DA 96 link)
  if (state.includeAttribution !== false) {
    parts.push(`---\n\n`);
    parts.push(`<div align="center">\n`);
    parts.push(`  <sub>Crafted with precision using <a href="https://www.lucebra.com?ref=github_profile_studio" target="_blank"><strong>Lucebra Developer Studio</strong></a> • Empowering engineers with verified skills and accredited certifications.</sub>\n`);
    parts.push(`</div>\n`);
  }

  return parts.join('');
}
