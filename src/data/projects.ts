export interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  github?: string;
  demo?: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'other';
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Interactive Terminal-Style CV | JC',
    description:
      'Interactive terminal-inspired portfolio website built with Vanilla JavaScript, featuring skills, projects, certificates, and contact information through a cyberpunk terminal interface.',
    tags: ['HTML', 'CSS', 'JavaScript', 'SVG'],
    category: 'frontend',
    featured: true,
    github: 'https://github.com/Josue-Dev-0210/Interactive-Terminal-Style-CV',
    demo: 'https://josue-dev-0210.github.io/Interactive-Terminal-Style-CV/',
  },
  {
    title: 'Network Scanner Simulator | JC',
    description:
      'An interactive scanner simulator built with Vanilla JavaScript. Simulates network scanning process, detecting active hosts, open ports, closed ports, and inactive address through a modern interface.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Canvas API', 'SVG'],
    category: 'frontend',
    featured: true,
    github: 'https://github.com/Josue-Dev-0210/Net-Scanner-JC',
    demo: 'https://josue-dev-0210.github.io/Net-Scanner-JC/',
  },
  {
    title: 'SUB-NET CALCULATOR | JC',
    description:
      'Interactive subnet calculator built with Vanilla JavaScript. Calculates subnet ranges, hosts, CIDR, subnet masks, IP class/type, and visual bit distribution with color-coded network and host bits.',
    tags: ['HTML', 'CSS', 'JavaScript', 'SheetJS', 'jsPDF'],
    category: 'frontend',
    github: 'https://github.com/Josue-Dev-0210/Calculadora-Subredes-JC',
    demo: 'https://josue-dev-0210.github.io/Calculadora-Subredes-JC/',
  },
  {
    title: 'Password Strength Tester | JC',
    description:
      'AInteractive password strength tester built with Vanilla JavaScript. Analyzes password security through entropy calculation, crack time estimation, character analysis and security recomendations.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'frontend',
    github: 'https://github.com/Josue-Dev-0210/Password-tester-JC',
    demo: 'https://josue-dev-0210.github.io/Password-tester-JC/',
  },
  {
    title: 'Linuxdex',
    description:
      'Interactive Linux command index built with Vanilla JavaScript. Provides categorized Linux commands with a fast search system and a modern terminal-inspired interface.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'frontend',
    github: 'https://github.com/Josue-Dev-0210/LinuxDex',
    demo: 'https://josue-dev-0210.github.io/LinuxDex/',
  },
];