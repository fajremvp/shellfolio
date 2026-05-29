// src/data/shellfolio.ts

// --- Types ---
export interface Profile {
  Name: string;
  Online: string;
  Uptime: string;
  Location: string;
  Role: string;
  Status: string;
  OS: string;
  Host: string;
  Kernel: string;
  Shell: string;
  WM: string;
  about: string;
}

export interface Skill {
  category: string;
  items: string;
}

export interface Experience {
  perms: string;
  date: string;
  company: string;
  folder: string;
  content: string;
}

export interface Project {
  perms: string;
  file: string;
  link: string;
  content: string;
}

export interface Education {
  perms: string;
  date: string;
  institution: string;
  folder: string;
  content: string;
}

export interface Remote {
  name: string;
  url: string;
  webLink: string;
}

export interface UIStrings {
  repoLink: string;
  langEn: string;
  langPt: string;
}

export interface LanguageData {
  profile: Profile;
  skills: Skill[];
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  remotes: Remote[];
  ui: UIStrings;
}

export interface PortfolioData {
  en: LanguageData;
  pt: LanguageData;
}

// --- Data ---
export const contactLinks = [
  { protocol: "mailto", handle: "dev@johndoe.com", url: "mailto:dev@johndoe.com" },
  { protocol: "github", handle: "johndoe", url: "https://github.com/johndoe" },
  { protocol: "linkedin", handle: "in/johndoe", url: "https://linkedin.com/in/johndoe" }
];

export const paymentMethods = [
  { name: "BTC", address: "bc1q...", qr: "/assets/qr-btc.webp" },
  { name: "XMR", address: "85UM...", qr: "/assets/qr-xmr.webp" }
];

export const data: PortfolioData = {
  en: {
    profile: {
      Name: "John Doe",
      Online: "john",
      Uptime: "25 years",
      Location: "Earth",
      Role: "Sysadmin & Developer",
      Status: "Open to work",
      OS: "Arch Linux x86_64",
      Host: "ThinkPad T14",
      Kernel: "Linux 6.6",
      Shell: "zsh",
      WM: "Hyprland",
      about: `Hello, World! I am a software engineer and open-source enthusiast.\nI specialize in building minimal, fast, and secure tools for the modern web.`
    },
    skills: [
      { category: "Languages", items: "TypeScript, Go, Rust, Python, Bash" },
      { category: "Infra", items: "Docker, Kubernetes, Linux, Nginx, Ansible" }
    ],
    experiences: [
      {
        perms: "drwxr-xr-x",
        date: "2023-Pres",
        company: "Open Source Corp",
        folder: "Senior Developer",
        content: `Lead developer for critical infrastructure projects.\n- Built highly scalable microservices.\n- Migrated legacy systems to cloud-native architectures.`
      }
    ],
    projects: [
      {
        perms: "drwxr-xr-x", file: "shellfolio", link: "https://github.com/your-username/shellfolio",
        content: `Minimalist TUI portfolio template built with Astro.js. Features a realistic boot sequence and systemd-inspired logs.`
      }
    ],
    education: [
      {
        perms: "drwxr-xr-x", date: "2018-2022", institution: "University of Technology", folder: "Computer Science",
        content: "Bachelor of Science in Computer Science."
      }
    ],
    remotes: [
      { name: "github", url: "git@github.com:johndoe/repo.git", webLink: "https://github.com/johndoe" }
    ],
    ui: {
      repoLink: "Repository Link",
      langEn: "[ English ]",
      langPt: "[ Portuguese ]"
    }
  },
  pt: {
    profile: {
      Name: "John Doe",
      Online: "john",
      Uptime: "25 anos",
      Location: "Terra",
      Role: "Sysadmin & Desenvolvedor",
      Status: "Disponível",
      OS: "Arch Linux x86_64",
      Host: "ThinkPad T14",
      Kernel: "Linux 6.6",
      Shell: "zsh",
      WM: "Hyprland",
      about: `Olá, Mundo! Sou engenheiro de software e entusiasta open-source.\nEspecializado em criar ferramentas minimalistas e seguras.`
    },
    skills: [
      { category: "Linguagens", items: "TypeScript, Go, Rust, Python, Bash" },
      { category: "Infra", items: "Docker, Kubernetes, Linux, Nginx, Ansible" }
    ],
    experiences: [
      {
        perms: "drwxr-xr-x",
        date: "2023-Pres",
        company: "Open Source Corp",
        folder: "Desenvolvedor Sênior",
        content: `Desenvolvedor líder para projetos críticos.\n- Construiu microsserviços escaláveis.\n- Migrou sistemas legados para arquitetura em nuvem.`
      }
    ],
    projects: [
      {
        perms: "drwxr-xr-x", file: "shellfolio", link: "https://github.com/your-username/shellfolio",
        content: `Template minimalista de portfólio TUI construído com Astro.js.`
      }
    ],
    education: [
      {
        perms: "drwxr-xr-x", date: "2018-2022", institution: "Universidade de Tecnologia", folder: "Ciência da Computação",
        content: "Bacharelado em Ciência da Computação."
      }
    ],
    remotes: [
      { name: "github", url: "git@github.com:johndoe/repo.git", webLink: "https://github.com/johndoe" }
    ],
    ui: {
      repoLink: "Link do Repositório",
      langEn: "[ Inglês ]",
      langPt: "[ Português ]"
    }
  }
};
