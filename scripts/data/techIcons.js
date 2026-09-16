/**
 * Curated list of 150+ technology icons & badges for GitHub Profile READMEs
 * Uses shields.io badges with SimpleIcons for 100% reliable rendering on GitHub
 */

export const TECH_CATEGORIES = [
  { id: 'languages', name: 'Languages' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend & APIs' },
  { id: 'devops', name: 'Cloud & DevOps' },
  { id: 'database', name: 'Databases & Cache' },
  { id: 'ai', name: 'AI & Machine Learning' },
  { id: 'tools', name: 'Tools & Ecosystem' },
];

export const TECH_ICONS = [
  // --- Languages ---
  { id: 'typescript', name: 'TypeScript', category: 'languages', color: '3178C6', logo: 'typescript' },
  { id: 'javascript', name: 'JavaScript', category: 'languages', color: 'F7DF1E', logo: 'javascript', logoColor: 'black' },
  { id: 'python', name: 'Python', category: 'languages', color: '3776AB', logo: 'python' },
  { id: 'csharp', name: 'C#', category: 'languages', color: '512BD4', logo: 'csharp' },
  { id: 'cpp', name: 'C++', category: 'languages', color: '00599C', logo: 'cplusplus' },
  { id: 'c', name: 'C', category: 'languages', color: 'A8B9CC', logo: 'c', logoColor: 'black' },
  { id: 'golang', name: 'Go', category: 'languages', color: '00ADD8', logo: 'go' },
  { id: 'rust', name: 'Rust', category: 'languages', color: '000000', logo: 'rust' },
  { id: 'java', name: 'Java', category: 'languages', color: 'ED8B00', logo: 'openjdk' },
  { id: 'php', name: 'PHP', category: 'languages', color: '777BB4', logo: 'php' },
  { id: 'ruby', name: 'Ruby', category: 'languages', color: 'CC342D', logo: 'ruby' },
  { id: 'swift', name: 'Swift', category: 'languages', color: 'F05138', logo: 'swift' },
  { id: 'kotlin', name: 'Kotlin', category: 'languages', color: '7F52FF', logo: 'kotlin' },
  { id: 'dart', name: 'Dart', category: 'languages', color: '0175C2', logo: 'dart' },
  { id: 'scala', name: 'Scala', category: 'languages', color: 'DC322F', logo: 'scala' },
  { id: 'r', name: 'R', category: 'languages', color: '276DC3', logo: 'r' },

  // --- Frontend ---
  { id: 'react', name: 'React', category: 'frontend', color: '20232A', logo: 'react', logoColor: '61DAFB' },
  { id: 'nextjs', name: 'Next.js', category: 'frontend', color: '000000', logo: 'nextdotjs' },
  { id: 'vuejs', name: 'Vue.js', category: 'frontend', color: '4FC08D', logo: 'vuedotjs' },
  { id: 'angular', name: 'Angular', category: 'frontend', color: 'DD0031', logo: 'angular' },
  { id: 'svelte', name: 'Svelte', category: 'frontend', color: 'FF3E00', logo: 'svelte' },
  { id: 'nuxt', name: 'Nuxt.js', category: 'frontend', color: '00DC82', logo: 'nuxtdotjs' },
  { id: 'html5', name: 'HTML5', category: 'frontend', color: 'E34F26', logo: 'html5' },
  { id: 'css3', name: 'CSS3', category: 'frontend', color: '1572B6', logo: 'css3' },
  { id: 'tailwindcss', name: 'Tailwind CSS', category: 'frontend', color: '38B2AC', logo: 'tailwind-css' },
  { id: 'bootstrap', name: 'Bootstrap', category: 'frontend', color: '7952B3', logo: 'bootstrap' },
  { id: 'mui', name: 'Material UI', category: 'frontend', color: '007FFF', logo: 'mui' },
  { id: 'sass', name: 'Sass', category: 'frontend', color: 'CC6699', logo: 'sass' },
  { id: 'redux', name: 'Redux', category: 'frontend', color: '764ABC', logo: 'redux' },
  { id: 'webpack', name: 'Webpack', category: 'frontend', color: '8DD6F9', logo: 'webpack', logoColor: 'black' },
  { id: 'vite', name: 'Vite', category: 'frontend', color: '646CFF', logo: 'vite' },

  // --- Backend & APIs ---
  { id: 'nodejs', name: 'Node.js', category: 'backend', color: '43853D', logo: 'nodedotjs' },
  { id: 'express', name: 'Express.js', category: 'backend', color: '000000', logo: 'express' },
  { id: 'nestjs', name: 'NestJS', category: 'backend', color: 'E0234E', logo: 'nestjs' },
  { id: 'dotnet', name: '.NET / ASP.NET', category: 'backend', color: '512BD4', logo: 'dotnet' },
  { id: 'django', name: 'Django', category: 'backend', color: '092E20', logo: 'django' },
  { id: 'fastapi', name: 'FastAPI', category: 'backend', color: '009688', logo: 'fastapi' },
  { id: 'flask', name: 'Flask', category: 'backend', color: '000000', logo: 'flask' },
  { id: 'spring', name: 'Spring Boot', category: 'backend', color: '6DB33F', logo: 'spring' },
  { id: 'laravel', name: 'Laravel', category: 'backend', color: 'FF2D20', logo: 'laravel' },
  { id: 'graphql', name: 'GraphQL', category: 'backend', color: 'E10098', logo: 'graphql' },
  { id: 'grpc', name: 'gRPC', category: 'backend', color: '244C5A', logo: 'grpc' },
  { id: 'rabbitmq', name: 'RabbitMQ', category: 'backend', color: 'FF6600', logo: 'rabbitmq' },
  { id: 'kafka', name: 'Apache Kafka', category: 'backend', color: '231F20', logo: 'apachekafka' },

  // --- Cloud & DevOps ---
  { id: 'docker', name: 'Docker', category: 'devops', color: '2496ED', logo: 'docker' },
  { id: 'kubernetes', name: 'Kubernetes', category: 'devops', color: '326CE5', logo: 'kubernetes' },
  { id: 'aws', name: 'AWS', category: 'devops', color: '232F3E', logo: 'amazon-aws' },
  { id: 'azure', name: 'Microsoft Azure', category: 'devops', color: '0078D4', logo: 'microsoft-azure' },
  { id: 'gcp', name: 'Google Cloud', category: 'devops', color: '4285F4', logo: 'google-cloud' },
  { id: 'terraform', name: 'Terraform', category: 'devops', color: '7B42BC', logo: 'terraform' },
  { id: 'ansible', name: 'Ansible', category: 'devops', color: 'EE0000', logo: 'ansible' },
  { id: 'githubactions', name: 'GitHub Actions', category: 'devops', color: '2088FF', logo: 'github-actions' },
  { id: 'jenkins', name: 'Jenkins', category: 'devops', color: 'D24939', logo: 'jenkins' },
  { id: 'linux', name: 'Linux', category: 'devops', color: 'FCC624', logo: 'linux', logoColor: 'black' },
  { id: 'nginx', name: 'Nginx', category: 'devops', color: '009639', logo: 'nginx' },
  { id: 'cloudflare', name: 'Cloudflare', category: 'devops', color: 'F38020', logo: 'cloudflare' },

  // --- Database & Cache ---
  { id: 'postgresql', name: 'PostgreSQL', category: 'database', color: '316192', logo: 'postgresql' },
  { id: 'mysql', name: 'MySQL', category: 'database', color: '005C84', logo: 'mysql' },
  { id: 'mongodb', name: 'MongoDB', category: 'database', color: '4EA94B', logo: 'mongodb' },
  { id: 'redis', name: 'Redis', category: 'database', color: 'DC382D', logo: 'redis' },
  { id: 'sqlite', name: 'SQLite', category: 'database', color: '07405E', logo: 'sqlite' },
  { id: 'prisma', name: 'Prisma', category: 'database', color: '2D3748', logo: 'prisma' },
  { id: 'elasticsearch', name: 'Elasticsearch', category: 'database', color: '005571', logo: 'elasticsearch' },
  { id: 'supabase', name: 'Supabase', category: 'database', color: '3ECF8E', logo: 'supabase' },
  { id: 'firebase', name: 'Firebase', category: 'database', color: 'FFCA28', logo: 'firebase', logoColor: 'black' },

  // --- AI & Machine Learning ---
  { id: 'openai', name: 'OpenAI API', category: 'ai', color: '412991', logo: 'openai' },
  { id: 'pytorch', name: 'PyTorch', category: 'ai', color: 'EE4C2C', logo: 'pytorch' },
  { id: 'tensorflow', name: 'TensorFlow', category: 'ai', color: 'FF6F00', logo: 'tensorflow' },
  { id: 'langchain', name: 'LangChain', category: 'ai', color: '1C3C3C', logo: 'chainlink' },
  { id: 'scikitlearn', name: 'scikit-learn', category: 'ai', color: 'F7931E', logo: 'scikitlearn' },
  { id: 'pandas', name: 'Pandas', category: 'ai', color: '150458', logo: 'pandas' },
  { id: 'numpy', name: 'NumPy', category: 'ai', color: '013243', logo: 'numpy' },
  { id: 'huggingface', name: 'Hugging Face', category: 'ai', color: 'FFD21E', logo: 'huggingface', logoColor: 'black' },

  // --- Tools & Ecosystem ---
  { id: 'git', name: 'Git', category: 'tools', color: 'F05032', logo: 'git' },
  { id: 'github', name: 'GitHub', category: 'tools', color: '181717', logo: 'github' },
  { id: 'gitlab', name: 'GitLab', category: 'tools', color: 'FC6D26', logo: 'gitlab' },
  { id: 'postman', name: 'Postman', category: 'tools', color: 'FF6C37', logo: 'postman' },
  { id: 'figma', name: 'Figma', category: 'tools', color: 'F24E1E', logo: 'figma' },
  { id: 'vscode', name: 'VS Code', category: 'tools', color: '007ACC', logo: 'visual-studio-code' },
  { id: 'jest', name: 'Jest', category: 'tools', color: 'C21325', logo: 'jest' },
  { id: 'cypress', name: 'Cypress', category: 'tools', color: '17202C', logo: 'cypress' },
];

export const getBadgeMarkdown = (icon, style = 'for-the-badge') => {
  const logoColor = icon.logoColor ? `&logoColor=${icon.logoColor}` : '&logoColor=white';
  const encodedName = encodeURIComponent(icon.name);
  return `https://img.shields.io/badge/${encodedName}-${icon.color}?style=${style}&logo=${icon.logo}${logoColor}`;
};
