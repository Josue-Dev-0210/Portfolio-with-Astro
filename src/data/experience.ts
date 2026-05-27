export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
    {
    role: 'Software Programming',
    company: 'SENA - Centro de Comercio y Servicios',
    period: 'May 2026 — Actualidad',
    description:
      'Technical training in software development focused on programming logic, databases, web technologies, software architecture, and modern application development.',
    tags: ['Programming', 'Databases', 'Web Development'],
    current: true,
  },
  {
    role: 'Systems & Networks Technician',
    company: 'Inst. Tec. San Agustin',
    period: 'Ene 2025 — Actualidad',
    description:
      'Technical training focused on computer system maintenance, TCP/IP network configurations, server management, and IT technical support',
    tags: ['Systems', 'Databases', 'Networks', 'IT Support'],
    current: true,
  },
  {
    role: 'Multiple IT Certifications',
    company: 'freeCodeCamp & BIG school',
    period: 'Mar 2026 — Abr 2026',
    description:
      'Earned certifications in Relational Databases (~300hrs) and Python development (~300hrs) through freeCodeCamp. Cybersecurity and ethical hacking certification',
    tags: ['Python', 'PostgreSQL', 'MySql', 'PHPMyAdmin', 'Cybersecurity', 'IA'],
  },
  {
    role: 'Technical Support Specialist',
    company: 'CPM SECURITY',
    period: 'Ago 2023 — Dic 2023',
    description:
      'Customer service and Technical support. Repair of mobile devices, modules and electronic equipment. Troubleshooting, diagnostics and maintenance of hardware and software. Inventory management and technical documentation.',
    tags: ['Technical Support', 'Hardware', 'Customer Service'],
  },
  {
    role: 'Electrical Engineering Student',
    company: 'Universidad del Sinú EBZ',
    period: 'Ago 2022 — Ene 2023',
    description:
      'Initial university studies in Electrical Engineering, acquiring solid foundations in mathematics, physics and electrical fundamentals.',
    tags: ['Engineering', 'Physics', 'Mathematics'],
  },
];
