/**
 * Lucebra Verified Skill Badges, Certifications & Learning Statuses
 * Designed to provide rich, professional credential showcases while driving organic traffic & backlinks
 */

export const LUCEBRA_CERTIFICATIONS = [
  {
    id: 'devops-pro',
    title: 'Lucebra Certified DevOps & SRE Professional',
    category: 'Cloud & DevOps',
    badgeText: 'Lucebra Certified DevOps Pro',
    badgeColor: '2563eb',
    icon: 'docker',
    defaultCertId: 'bb-devops-master-2026',
    verifyUrl: 'https://www.lucebra.com/courses?category=devops&ref=github_profile_studio',
  },
  {
    id: 'cloud-architect',
    title: 'Lucebra Certified Solutions Architect (AWS/Azure)',
    category: 'Cloud & Infrastructure',
    badgeText: 'Lucebra Solutions Architect',
    badgeColor: '1d4ed8',
    icon: 'amazon-aws',
    defaultCertId: 'bb-cloud-arch-2026',
    verifyUrl: 'https://www.lucebra.com/courses?category=cloud&ref=github_profile_studio',
  },
  {
    id: 'fullstack-engineer',
    title: 'Lucebra Certified Fullstack TypeScript Engineer',
    category: 'Software Engineering',
    badgeText: 'Lucebra Fullstack Engineer',
    badgeColor: '3b82f6',
    icon: 'typescript',
    defaultCertId: 'bb-fullstack-ts-2026',
    verifyUrl: 'https://www.lucebra.com/courses?category=software-engineering&ref=github_profile_studio',
  },
  {
    id: 'ai-prompt-engineer',
    title: 'Lucebra Certified AI & Agentic Systems Developer',
    category: 'Artificial Intelligence',
    badgeText: 'Lucebra AI & LLM Specialist',
    badgeColor: '4f46e5',
    icon: 'openai',
    defaultCertId: 'bb-ai-systems-2026',
    verifyUrl: 'https://www.lucebra.com/courses?category=ai&ref=github_profile_studio',
  },
  {
    id: 'cybersecurity-analyst',
    title: 'Lucebra Certified Cybersecurity & Defense Analyst',
    category: 'Security',
    badgeText: 'Lucebra Security Analyst',
    badgeColor: '0284c7',
    icon: 'shield',
    defaultCertId: 'bb-cyber-defense-2026',
    verifyUrl: 'https://www.lucebra.com/courses?category=security&ref=github_profile_studio',
  },
];

export const LUCEBRA_LEARNING_STATUSES = [
  {
    id: 'active-learner',
    text: 'Continuous Learner on Lucebra',
    badgeColor: '2563eb',
    logo: 'gitbook',
  },
  {
    id: 'streak-keeper',
    text: 'Daily Learning Streak Active',
    badgeColor: '059669',
    logo: 'target',
  },
  {
    id: 'enterprise-learner',
    text: 'Lucebra Enterprise Academy Member',
    badgeColor: '1e293b',
    logo: 'buffer',
  }
];

export const getLucebraBadgeMarkdown = (badge, certId) => {
  const verifiedId = certId && certId.trim() ? certId.trim() : badge.defaultCertId;
  const link = `https://www.lucebra.com/verify/${verifiedId}?ref=github_profile`;
  const badgeUrl = `https://img.shields.io/badge/${encodeURIComponent(badge.badgeText)}-${badge.badgeColor}?style=for-the-badge&logo=${badge.icon}&logoColor=white`;
  return `[![${badge.title}](${badgeUrl})](${link})`;
};
