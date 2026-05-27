export interface TechCard {
  name: string;
  description: string;
  category: 'Frontend' | 'Backend' | 'Networks' | 'Security' | 'Tools';
  icon: string;
}

export const techCards: TechCard[] = [
  {
    name: 'Python',
    description: 'Data processing, scripting and automation',
    category: 'Backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'Astro',
    description: 'Modern static site builder for fast web experiences',
    category: 'Frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg',
  },
  {
    name: 'JavaScript',
    description: 'Dynamic interfaces, logic and browser tooling',
    category: 'Frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'Flask',
    description: 'Lightweight Python framework for REST APIs',
    category: 'Backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
  },
  {
    name: 'Linux',
    description: 'System administration, hardening and automation',
    category: 'Networks',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  },
  {
    name: 'Bash',
    description: 'Shell scripting and system-level automation',
    category: 'Tools',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
  },
  {
    name: 'Git',
    description: 'Version control and collaborative development',
    category: 'Tools',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'PostgreSQL',
    description: 'Relational databases, queries and data modeling',
    category: 'Backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'Cisco Packet Tracer',
    description: 'Network design, routing and switching simulation',
    category: 'Networks',
    icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/cisco.svg',
  },
  {
    name: 'HTML & CSS',
    description: 'Semantic structure, responsive layouts and styling',
    category: 'Frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'Java',
    description: 'OOP fundamentals and desktop application development',
    category: 'Backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
];

export const techStack = [
  'Python', 'JavaScript', 'Bash', 'SQL', 'Java',
  'Astro', 'Flask', 'HTML', 'CSS', 'Git',
  'Linux', 'TCP/IP',
  'Cisco Packet Tracer',
  'PostgreSQL', 'SQLite', 'MySql', 'VSCode', 'GitHub Actions',
];