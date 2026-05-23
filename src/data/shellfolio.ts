// src/data/shellfolio.ts

// Links e dados que são iguais em qualquer idioma
export const contactLinks = [
  { protocol: "mailto", handle: "joao.fogaca@tuta.io", url: "mailto:joao.fogaca@tuta.io" },
  { protocol: "linkedin", handle: "in/joaovfdo", url: "https://www.linkedin.com/in/joaovfdo/" },
  { protocol: "youtube", handle: "@fajremvp", url: "https://www.youtube.com/@fajremvp" },
  { protocol: "reddit", handle: "u/FajreMVP", url: "https://www.reddit.com/user/FajreMVP" },
  { protocol: "nostr", handle: "npub1dykmduj9qepw44zcwqah0wvxftzvd0escfrqqrxjhawd8c8mzagqgxfysu" }
];

export const paymentMethods = [
  { name: "BTC", address: "bc1qfv5qan7dpsaffwlxtm299wwxffgnkzq0eld06p", qr: "/assets/qr-btc.webp" },
  { name: "Lightning", address: "fajre@blink.sv", qr: "/assets/qr-ln.webp" },
  { name: "XMR", address: "85UMFQfR6AhUBV6ed5hP5b5E668yBU9KfKJGtQ1YkRf1NLSbNpoBrydBQaJuFcPo5LgainWyqkpr6ARTtob2KGnW6rN8jo8", qr: "/assets/qr-xmr.webp" },
  { name: "Pix", address: "17ef428e-49d7-405e-9e90-fce5b8ee3ddf", qr: "/assets/qr-pix.webp" }
];

export const data = {
  pt: {
    profile: {
      Name: "Joao Vitor Fogaca de Oliveira",
      Online: "Fajre",
      Uptime: "19 anos",
      Location: "Ibirama/SC/Brasil",
      Role: "Estudante de Engenharia de Software",
      Status: "Disponivel para trabalho",
      OS: "NixOS 26.05 (Yarara) x86_64",
      Host: "Aspire A315-41 (V1.18)",
      Kernel: "Linux 6.18.26",
      Shell: "bash 5.3.9",
      WM: "niri 26.04 (Wayland)",
      about: `Profissional de Infraestrutura e DevOps com mentalidade analítica, visão sistêmica de ambientes complexos e foco em Segurança Zero Trust e proteção de dados. Diferente do perfil acadêmico padrão, possuo experiência prática na arquitetura e operação de infraestruturas de nuvem privada, priorizando automação (IaC) e resiliência. Combino a base teórica de Engenharia de Software com capacidade de execução técnica para implementar ambientes auditáveis e seguros. Busco desafios que exijam autonomia, resolução de problemas estruturais e rigor técnico.`
    },
    skills: [
      { category: "Infraestrutura & Virtualização", items: "Proxmox VE, Docker, LXC, ZFS (RAID/Storage), LUKS2, Linux (Debian, Alpine, Arch, NixOS), Systemd (Custom Units), Kernel Tuning, Hardware Troubleshooting, Dropbear (Initramfs SSH), GRUB Rescue/Emergency Shell, Disk Passthrough, Storage Resilience (Fstab/UUID), NUT." },
      { category: "DevOps & Automação (IaC)", items: "Ansible (Playbooks, Roles, Vault), Jinja2, Docker Compose, Shell Scripting, Cloud-Init, Chezmoi, Restic (Encrypted Snapshots), Backblaze B2, GitOps workflows, CI/CD Pipelines, Pre-Commit Hooks, Code Quality Gates." },
      { category: "Segurança & Identidade (Zero Trust)", items: "HashiCorp Vault (AppRole, Raft), Authentik (SSO/OIDC), CrowdSec, Fail2Ban, Socket Proxy (Docker Hardening), PKI (internal CA), SSH hardening, Incident Response, Secret Scanning (Gitleaks), Shift-Left Security." },
      { category: "Redes & Conectividade", items: "OPNsense, VLANs (802.1Q), Traefik v3, Tailscale (VPN Mesh/ACLs), DNS (AdGuard Home/Split-Horizon), Tor (Hidden Services), Network Debugging (tcpdump/nmap), NAT/Masquerading, P2P Sync (Syncthing), Edge Computing." },
      { category: "Observabilidade", items: "Prometheus, Grafana (Dashboards as Code), Loki, Alloy, Alertmanager, Ntfy, Node Exporter, SRE Methodologies (U.S.E. / R.E.D.), Passive Monitoring (Healthchecks.io)." },
      { category: "Desenvolvimento & Dados", items: "Java (Security, Swing), Python (Scripting/Automation), PostgreSQL, SQLite, Regular Expressions (Regex), WebSockets, Git." }
    ],
    experiences: [
      {
        perms: "drwxr-xr-x",
        date: "Abr/2026-Pres",
        company: "Honorato & Bini Advogados Associados",
        format: "Freelance/Híbrido",
        folder: "Assistente de Gestao de Dados e Documentos",
        content: `Trabalho temporário de processamento e regularização de registros de habitualidade de clube de tiro para integração com o sistema SINARM (Polícia Federal).
- Digitalização de documentos físicos e normalização de dados para importação automatizada em sistemas.
- Validação e correção de inconsistências entre registros físicos e digitais em alto volume de dados críticos.
- Estruturação de dados em planilhas (Excel/CSV) para integração com sistemas.
- Automação parcial do fluxo de digitalização e extração de dados com uso de IA (OCR + LLM), aumentando a produtividade na migração e processamento de registros.
- Garantia de integridade e precisão em dados sensíveis sob exigência regulatória.`
      },
      {
        perms: "drwxr-xr-x", date: "Dez/2025-Pres", company: "Projeto_Pessoal", format: "Remoto", folder: "Homelab",
        content: "Arquitetura de Nuvem Privada (Proxmox, LUKS2, VLANs, OPNsense). Automação IaC via Ansible. Segurança Zero Trust (Vault, Authentik, CrowdSec). Observabilidade PLG e Disaster Recovery com cold boot e Restic."
      },
      {
        perms: "drwxr-xr-x", date: "Abr/2025-Dez/2025", company: "UDESC", format: "Presencial/Ibirama", folder: "Bolsista",
        content: "Atuei no Laboratório de Robótica (LABOT) em projetos de extensão com foco em inclusão digital, ministrando oficinas para capacitar o público idoso no uso de smartphones e tecnologias, além de aulas de robótica educacional para crianças com atividades lúdicas e interativas para o estímulo do raciocínio lógico."
      }
    ],
    projects: [
      {
        perms: "-rwxr-xr-x", file: "HyprRun.sh", link: "https://github.com/fajremvp/HyprRun",
        content: "Criei um launcher de aplicações minimalista em Bash para gerenciadores de janelas de tiling dinâmico (Hyprland/Niri/Wayland). Integrei o fzf para busca fuzzy de alta performance via terminal, evitando janelas flutuantes e a sobrecarga de interfaces gráficas."
      },
      {
        perms: "-rw-r--r--", file: "S4F3-C0D3S.java", link: "https://github.com/fajremvp/S4F3-C0D3S",
        content: "Desenvolvi um gerenciador de códigos 2FA em Java. Implementei criptografia AES-256-GCM com derivação de chave PBKDF2+HMAC-SHA256 e salts aleatórios. A arquitetura inclui defesa contra força bruta (delays), limpeza de memória de dados sensíveis e destruição segura por sobrescrita em caso de adulteração ou múltiplas falhas de autenticação."
      },
      {
        perms: "-rw-r--r--", file: "dotfiles.conf", link: "https://github.com/fajremvp/dotfiles",
        content: "Mantenho a automação e gestão do meu ambiente de desenvolvimento Linux com configurações próprias, usando Chezmoi e Git para garantir versionamento, portabilidade e provisionamento rápido (IaC para desktop). O repositório inclui scripts em Shell para monitoramento de recursos, ajuste de parâmetros do sistema e interfaces interativas via terminal, padronizando workflows em Arch Linux com Hyprland."
      }
    ],
    education: [
      {
        perms: "drwxr-xr-x", date: "2025-2028", institution: "UDESC", format: "Presencial/Ibirama", folder: "Bacharelado em Engenharia de Software",
        content: "Universidade do Estado de Santa Catarina (UDESC) - Fase 3/8. Foco em engenharia base, estrutura de dados e arquitetura de sistemas."
      }
    ],
    remotes: [
      { name: "github", url: "git@github.com:fajremvp/repo.git", webLink: "https://github.com/fajremvp" },
      { name: "codeberg", url: "git@codeberg.org:fajre/repo.git", webLink: "https://codeberg.org/fajre" }
    ],
    ui: {
      repoLink: "Link do Repositório",
      langEn: "[ Inglês ]",
      langPt: "[ Português ]"
    }
  },
  en: {
    profile: {
      Name: "Joao Vitor Fogaca de Oliveira",
      Online: "Fajre",
      Uptime: "19 years",
      Location: "Ibirama/SC/Brazil",
      Role: "Software Engineering Student",
      Status: "Open to work",
      OS: "NixOS 26.05 (Yarara) x86_64",
      Host: "Aspire A315-41 (V1.18)",
      Kernel: "Linux 6.18.26",
      Shell: "bash 5.3.9",
      WM: "niri 26.04 (Wayland)",
      about: `Infrastructure and DevOps professional with an analytical mindset, systemic view of complex environments, and a focus on Zero Trust Security and data protection. Unlike the standard academic profile, I possess practical experience in architecting and operating private cloud infrastructures, prioritizing automation (IaC) and resilience. I combine the theoretical foundation of Software Engineering with technical execution capability to implement auditable and secure environments. I seek challenges that demand autonomy, resolution of structural problems, and technical rigor.`
    },
    skills: [
      { category: "Infrastructure & Virtualization", items: "Proxmox VE, Docker, LXC, ZFS (RAID/Storage), LUKS2, Linux (Debian, Alpine, Arch, NixOS), Systemd (Custom Units), Kernel Tuning, Hardware Troubleshooting, Dropbear (Initramfs SSH), GRUB Rescue/Emergency Shell, Disk Passthrough, Storage Resilience (Fstab/UUID), NUT." },
      { category: "DevOps & Automation (IaC)", items: "Ansible (Playbooks, Roles, Vault), Jinja2, Docker Compose, Shell Scripting, Cloud-Init, Chezmoi, Restic (Encrypted Snapshots), Backblaze B2, GitOps workflows, CI/CD Pipelines, Pre-Commit Hooks, Code Quality Gates." },
      { category: "Security & Identity (Zero Trust)", items: "HashiCorp Vault (AppRole, Raft), Authentik (SSO/OIDC), CrowdSec, Fail2Ban, Socket Proxy (Docker Hardening), PKI (internal CA), SSH hardening, Incident Response, Secret Scanning (Gitleaks), Shift-Left Security." },
      { category: "Networking & Connectivity", items: "OPNsense, VLANs (802.1Q), Traefik v3, Tailscale (VPN Mesh/ACLs), DNS (AdGuard Home/Split-Horizon), Tor (Hidden Services), Network Debugging (tcpdump/nmap), NAT/Masquerading, P2P Sync (Syncthing), Edge Computing." },
      { category: "Observability", items: "Prometheus, Grafana (Dashboards as Code), Loki, Alloy, Alertmanager, Ntfy, Node Exporter, SRE Methodologies (U.S.E. / R.E.D.), Passive Monitoring (Healthchecks.io)." },
      { category: "Development & Data", items: "Java (Security, Swing), Python (Scripting/Automation), PostgreSQL, SQLite, Regular Expressions (Regex), WebSockets, Git." }
    ],
    experiences: [
      {
        perms: "drwxr-xr-x",
        date: "Apr/2026-Pres",
        company: "Honorato & Bini Advogados Associados",
        format: "Freelance/Hybrid",
        folder: "Data and Document Management Assistant",
        content: `Temporary work processing and regularizing shooting club attendance records for integration with the SINARM system (Federal Police).
- Digitization of physical documents and data normalization for automated import into systems.
- Validation and correction of inconsistencies between physical and digital records in a high volume of critical data.
- Structuring data in spreadsheets (Excel/CSV) for system integration.
- Partial automation of the digitization and data extraction flow using AI (OCR + LLM), increasing productivity in record migration and processing.
- Guaranteeing integrity and accuracy in sensitive data under regulatory requirements.`
      },
      {
        perms: "drwxr-xr-x", date: "Dez/2025-Pres", company: "Personal_Project", format: "Remote", folder: "Homelab",
        content: "Private Cloud Architecture (Proxmox, LUKS2, VLANs, OPNsense). IaC Automation via Ansible. Zero Trust Security (Vault, Authentik, CrowdSec). PLG Observability and Disaster Recovery with cold boot and Restic."
      },
      {
        perms: "drwxr-xr-x", date: "Apr/2025-Dez/2025", company: "UDESC", format: "On-site/Ibirama", folder: "Scholarship Holder",
        content: "Worked at the Robotics Laboratory (LABOT) on extension projects focused on digital inclusion, teaching workshops to empower the elderly in using smartphones and technology, as well as educational robotics classes for children with playful and interactive activities to stimulate logical reasoning."
      }
    ],
    projects: [
      {
        perms: "-rwxr-xr-x", file: "HyprRun.sh", link: "https://github.com/fajremvp/HyprRun",
        content: "Created a minimalist Bash application launcher for dynamic tiling window managers (Hyprland/Niri/Wayland). Integrated fzf for high-performance fuzzy search via terminal, avoiding floating windows and GUI overhead."
      },
      {
        perms: "-rw-r--r--", file: "S4F3-C0D3S.java", link: "https://github.com/fajremvp/S4F3-C0D3S",
        content: "Developed a 2FA code manager in Java. Implemented AES-256-GCM encryption with PBKDF2+HMAC-SHA256 key derivation and random salts. Architecture includes brute-force defense (delays), memory clearing of sensitive data, and secure destruction by overwriting in case of tampering or multiple authentication failures."
      },
      {
        perms: "-rw-r--r--", file: "dotfiles.conf", link: "https://github.com/fajremvp/dotfiles",
        content: "Maintain automation and management of my Linux development environment with custom configurations, using Chezmoi and Git to ensure versioning, portability, and fast provisioning (IaC for desktop). Repository includes Shell scripts for resource monitoring, system tuning, and interactive terminal interfaces, standardizing workflows on Arch Linux with Hyprland."
      }
    ],
    education: [
      {
        perms: "drwxr-xr-x", date: "2025-2028", institution: "UDESC", format: "On-site/Ibirama", folder: "BSc_Software_Engineering",
        content: "Santa Catarina State University (UDESC) - Term 3/8. Focus on core engineering, data structures, and systems architecture."
      }
    ],
    remotes: [
      { name: "github", url: "git@github.com:fajremvp/repo.git", webLink: "https://github.com/fajremvp" },
      { name: "codeberg", url: "git@codeberg.org:fajre/repo.git", webLink: "https://codeberg.org/fajre" }
    ],
    ui: {
      repoLink: "Repository Link",
      langEn: "[ English ]",
      langPt: "[ Portuguese ]"
    }
  }
};
