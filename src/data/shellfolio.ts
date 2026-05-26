// src/data/shellfolio.ts

// Links e dados que são iguais em qualquer idioma
export const contactLinks = [
  { protocol: "mailto", handle: "fajre.eastcoast399@aleeas.com", url: "mailto:fajre.eastcoast399@aleeas.com" },
  { protocol: "linkedin", handle: "in/joaovfdo", url: "https://www.linkedin.com/in/joaovfdo/" },
  { protocol: "youtube", handle: "@fajremvp", url: "https://www.youtube.com/@fajremvp" },
  { protocol: "reddit", handle: "u/FajreMVP", url: "https://www.reddit.com/user/FajreMVP" },
  { protocol: "nostr", handle: "npub1dykmduj9qepw44zcwqah0wvxftzvd0escfrqqrxjhawd8c8mzagqgxfysu" },
  { protocol: "simplex", handle: "SimpleX Chat", url: "https://smp14.simplex.im/a#J67Nzetqn5zkzqu7UzZB1YJPl8Usxa-VJNqCg6oIi6o" }
];

export const onionAddress = "4pxhc3ncqn22tbcp3ohvavuwhcggfrsbyshvqodlraayxudpzi6bvdyd.onion";

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
      Location: "Ibirama, SC, Brasil",
      Role: "Estudante de Engenharia de Software",
      Status: "Disponivel para trabalho",
      OS: "NixOS 26.05 (Yarara) x86_64",
      Host: "Aspire A315-41 (V1.18)",
      Kernel: "Linux 6.18.26",
      Shell: "bash 5.3.9",
      WM: "niri 26.04 (Wayland)",
      about: `Engenheiro de Infraestrutura e DevOps, entusiasta de open-source e sistemas descentralizados.
Interesses: Segurança, Privacidade, Linux, Auto-Hospedagem, IA, Economia e Filosofia.
"I use Nix, btw"`
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
        folder: "Assistente de Gestao de Dados e Documentos",
        content: `Trabalho temporário de processamento e regularização de registros de habitualidade de clube de tiro para integração com o sistema SINARM (Polícia Federal).
- Digitalização de documentos físicos e normalização de dados para importação automatizada em sistemas.
- Validação e correção de inconsistências entre registros físicos e digitais em alto volume de dados críticos.
- Estruturação de dados em planilhas (Excel/CSV) para integração com sistemas.
- Automação parcial do fluxo de digitalização e extração de dados com uso de IA (OCR + LLM), aumentando a produtividade na migração e processamento de registros.
- Garantia de integridade e precisão em dados sensíveis sob exigência regulatória.`
      },
      {
        perms: "drwxr-xr-x", date: "Dez/2025-Pres", company: "Homelab", folder: "Engenheiro de Infraestrutura e DevOps",
        content: `Minha infraestrutura auto-hospedada focada em privacidade, resiliência e controle total do usuário. Projetada para isolamento de rede, armazenamento criptografado, reprodutibilidade e como uma contribuição para a descentralização.
- Arquitetura de Nuvem Privada: Projetei e opero um ambiente resiliente em Proxmox VE, com criptografia de disco total (LUKS2), segmentação de rede (VLANs 802.1Q) e roteamento/firewall via OPNsense (Router-on-a-Stick).
- Automação, GitOps e Documentação: Implementei Infrastructure as Code (IaC) com Ansible e Git como "Fonte da Verdade", orquestrando mais de 25 containers Docker, eliminando configurações manuais (ClickOps) e garantindo a consistência e controle de configuração dos servidores. Mantenho extensa documentação técnica (Runbooks, Threat Models e Políticas de Arquitetura) estruturada no repositório.
- Segurança Zero Trust: Arquitetei ecossistema de segurança com HashiCorp Vault (AppRole) para segredos, identidade via Authentik (SSO/OIDC) e hardening de containers via Socket Proxy, além de defesa ativa com CrowdSec (arquitetura LAPI/Bouncer) e Fail2Ban. Implementei restrições via Kernel (Cgroups) para controle de Blast Radius.
- Observabilidade e Auditoria: Configurei stack PLG (Prometheus, Loki, Grafana) baseada nas metodologias U.S.E. e R.E.D. com Dashboards as Code para métricas e centralização de logs de segurança (SIEM leve), com alertas via Ntfy.
- Engenharia de Redes: Implementei acesso remoto seguro via VPN Mesh (Tailscale) com ACLs estritas, além de Traefik v3 (proxy reverso) com gestão de certificados internos (CA própria) e DNS redundante.
- Disaster Recovery Validado: Estabeleci backups criptografados offsite (Restic + B2) e implementei desbloqueio remoto de disco via Dropbear SSH para recuperação headless, executando fire drills e cold boot recovery, com integração de UPS/NUT delegada a um Edge Node (Raspberry Pi) para desligamento e retorno seguro, validando a recuperação orquestrada dos serviços.
- Node Runner: Opero infraestrutura Bitcoin Core, Electrs e Monero com tráfego via Tor e SSD dedicado. Tuning de LMDB, LevelDB e RocksDB para indexação blockchain, com limites via Systemd Cgroups e KVM Throttling.

>> Link do Repositório: github.com/fajremvp/homelab`
      },
      {
        perms: "drwxr-xr-x", date: "Abr/2025-Dez/2025", company: "UDESC", folder: "Bolsista",
        content: "Atuei no Laboratório de Robótica (LABOT) em projetos de extensão com foco em inclusão digital, ministrando oficinas para capacitar o público idoso no uso de smartphones e tecnologias, além de aulas de robótica educacional para crianças com atividades lúdicas e interativas para o estímulo do raciocínio lógico."
      }
    ],
    projects: [
      {
        perms: "-rw-r--r--", file: "nixos-config", link: "https://github.com/fajremvp/nixos-config",
        content: `OS as Code. Configuração declarativa completa dos meus sistemas operacionais (NixOS) e ambientes de usuário, gerenciados inteiramente via Nix Flakes e Home Manager. Aplica a filosofia de Infraestrutura como Código (IaC) direto no desktop, garantindo reprodutibilidade instantânea em hardware novo, imutabilidade, rollbacks à prova de falhas pelo GRUB e um Single Source of Truth (SSOT) para toda a minha rede, serviços, drivers e dotfiles.`
      },
      {
        perms: "-rw-r--r--", file: "shellfolio", link: "https://github.com/fajremvp/shellfolio",
        content: `Template do meu portfólio minimalista construído com Astro.js, focado em alta performance e estética TUI (Terminal User Interface). Ele simula um ambiente de terminal Unix realista no navegador, incluindo uma sequência de boot dinâmica inspirada no systemd, sintaxe highlight de logs e renderização tipográfica fiel para desenvolvedores, sysadmins e entusiastas Linux que buscam uma identidade visual nostálgica e autêntica.`
      },
      {
        perms: "-rwxr-xr-x", file: "HyprRun", link: "https://github.com/fajremvp/HyprRun",
        content: "Criei um launcher de aplicações minimalista em Bash para gerenciadores de janelas de tiling dinâmico (Hyprland/Niri/Wayland). Integrei o fzf para busca fuzzy de alta performance via terminal, evitando janelas flutuantes e a sobrecarga de interfaces gráficas."
      },
      {
        perms: "-rw-r--r--", file: "dotfiles", link: "https://github.com/fajremvp/dotfiles",
        content: "Mantenho a automação e gestão do meu ambiente de desenvolvimento Linux com configurações próprias, usando Chezmoi e Git para garantir versionamento, portabilidade e provisionamento rápido (IaC para desktop). O repositório inclui scripts em Shell para monitoramento de recursos, ajuste de parâmetros do sistema e interfaces interativas via terminal, padronizando workflows em Arch Linux com Hyprland."
      },
      {
        perms: "-rw-r--r--", file: "S4F3-C0D3S", link: "https://github.com/fajremvp/S4F3-C0D3S",
        content: "Desenvolvi um gerenciador de códigos 2FA em Java. Implementei criptografia AES-256-GCM com derivação de chave PBKDF2+HMAC-SHA256 e salts aleatórios. A arquitetura inclui defesa contra força bruta (delays), limpeza de memória de dados sensíveis e destruição segura por sobrescrita em caso de adulteração ou múltiplas falhas de autenticação."
      }
    ],
    education: [
      {
        perms: "drwxr-xr-x", date: "2025-2028", institution: "UDESC", folder: "Bacharelado em Engenharia de Software",
        content: "Universidade do Estado de Santa Catarina (UDESC) - Fase 3/8."
      }
    ],
    remotes: [
      { name: "github", url: "git@github.com:fajremvp/repo.git", webLink: "https://github.com/fajremvp" },
      { name: "codeberg", url: "git@codeberg.org:fajre/repo.git", webLink: "https://codeberg.org/fajre" }
    ],
    ui: {
      repoLink: "Link do Repositório",
      langEn: "[ Inglês ]",
      langPt: "[ Português ]",
      torMessage: "Also available on Tor: "
    }
  },
  en: {
    profile: {
      Name: "Joao Vitor Fogaca de Oliveira",
      Online: "Fajre",
      Uptime: "19 years",
      Location: "Ibirama, SC, Brazil",
      Role: "Software Engineering Student",
      Status: "Open to work",
      OS: "NixOS 26.05 (Yarara) x86_64",
      Host: "Aspire A315-41 (V1.18)",
      Kernel: "Linux 6.18.26",
      Shell: "bash 5.3.9",
      WM: "niri 26.04 (Wayland)",
      about: `Infrastructure and DevOps Engineer, passionate about open-source and decentralized systems.
Interests: Security, Privacy, Linux, Self-Hosting, AI, Economics, and Philosophy.
“I use Nix, btw.”`
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
        folder: "Data and Document Management Assistant",
        content: `Temporary work involving processing and standardization of shooting club records for integration with the SINARM system (Federal Police of Brazil).
- Digitization of physical documents and data normalization for automated system import.
- Validation and correction of inconsistencies between physical and digital records in large volumes of sensitive data.
- Structuring data in spreadsheets (Excel/CSV) for system integration.
- Partial automation of document digitization and data extraction workflows using AI (OCR + LLM), improving productivity in record migration and processing.
- Ensuring integrity and accuracy of sensitive data under regulatory requirements.`
      },
      {
        perms: "drwxr-xr-x", date: "Dez/2025-Pres", company: "Homelab", folder: "Infrastructure and DevOps Engineer",
        content: `My self-hosted infrastructure focused on privacy, resilience, and full user control. Designed for network isolation, encrypted storage, reproducibility, and as a contributor to decentralization.
- Private Cloud Architecture: I designed and operate a resilient environment in Proxmox VE, with full disk encryption (LUKS2), network segmentation (802.1Q VLANs), and routing/firewalling via OPNsense (router-on-a-stick architecture).
- Automation, GitOps, and Documentation: I implemented Infrastructure as Code (IaC) using Ansible and Git as the single source of truth, orchestrating more than 25 Docker containers, eliminating manual configuration (ClickOps), and ensuring server consistency and configuration control. I maintain extensive technical documentation (runbooks, threat models, and architecture policies) structured within the repository.
- Zero Trust Security: I architected a security ecosystem with HashiCorp Vault (AppRole) for secrets management, identity via Authentik (SSO/OIDC), and container hardening via Socket Proxy. I also implemented active defense using CrowdSec (LAPI/Bouncer architecture) and Fail2Ban. Kernel-level restrictions (cgroups) were applied to control blast radius.
- Observability and Auditing: I set up a PLG stack (Prometheus, Loki, Grafana) based on the U.S.E. and R.E.D. methodologies, with dashboards-as-code for metrics and centralized security logging (lightweight SIEM), including alerting via Ntfy.
- Network Engineering: I implemented secure remote access via a VPN mesh (Tailscale) with strict ACLs, as well as Traefik v3 (reverse proxy) with internal certificate management (private CA) and redundant DNS.
- Validated Disaster Recovery: I established encrypted off-site backups (Restic + Backblaze B2) andimplemented remote disk unlocking via Dropbear SSH for headless recovery. I regularly execute fire drills and cold boot recovery tests, with UPS/NUT integration delegated to an edge node (Raspberry Pi) for safe shutdown and startup, validating orchestrated service recovery.
- Node Runner: I operate Bitcoin Core, Electrs, and Monero infrastructure with traffic routed over Tor and dedicated SSD storage. I perform tuning of LMDB, LevelDB, and RocksDB for blockchain indexing, with system limits enforced via systemd cgroups and KVM throttling.

>> Repository Link: github.com/fajremvp/homelab`
      },
      {
        perms: "drwxr-xr-x", date: "Apr/2025-Dez/2025", company: "UDESC", folder: "Scholarship Holder",
        content: "Worked at the Robotics Laboratory (LABOT) on extension projects focused on digital inclusion, teaching workshops to empower the elderly in using smartphones and technology, as well as educational robotics classes for children with playful and interactive activities to stimulate logical reasoning."
      }
    ],
    projects: [
      {
        perms: "-rw-r--r--", file: "nixos-config", link: "https://github.com/fajremvp/nixos-config",
        content: `OS as Code. Complete declarative configuration of my operating systems (NixOS) and user environments, managed entirely via Nix Flakes and Home Manager. Applies the Infrastructure as Code (IaC) philosophy directly to the desktop, ensuring instant reproducibility on new hardware, immutability, fail-proof rollbacks via GRUB, and a Single Source of Truth (SSOT) for all my networking, services, drivers, and dotfiles.`
      },
      {
        perms: "-rw-r--r--", file: "shellfolio", link: "https://github.com/fajremvp/shellfolio",
        content: `Minimalist portfolio template built with Astro.js, focused on high performance and TUI (Terminal User Interface) aesthetics. It simulates a realistic Unix terminal environment in the browser, featuring a dynamic systemd-inspired boot sequence, log syntax highlighting, and faithful typographic rendering for developers, sysadmins, and Linux enthusiasts seeking a nostalgic and authentic visual identity.`
      },
      {
        perms: "-rwxr-xr-x", file: "HyprRun", link: "https://github.com/fajremvp/HyprRun",
        content: "Created a minimalist Bash application launcher for dynamic tiling window managers (Hyprland/Niri/Wayland). Integrated fzf for high-performance fuzzy search via terminal, avoiding floating windows and GUI overhead."
      },
      {
        perms: "-rw-r--r--", file: "dotfiles", link: "https://github.com/fajremvp/dotfiles",
        content: "Maintain automation and management of my Linux development environment with custom configurations, using Chezmoi and Git to ensure versioning, portability, and fast provisioning (IaC for desktop). Repository includes Shell scripts for resource monitoring, system tuning, and interactive terminal interfaces, standardizing workflows on Arch Linux with Hyprland."
      },
      {
        perms: "-rw-r--r--", file: "S4F3-C0D3S", link: "https://github.com/fajremvp/S4F3-C0D3S",
        content: "Developed a 2FA code manager in Java. Implemented AES-256-GCM encryption with PBKDF2+HMAC-SHA256 key derivation and random salts. Architecture includes brute-force defense (delays), memory clearing of sensitive data, and secure destruction by overwriting in case of tampering or multiple authentication failures."
      }
    ],
    education: [
      {
        perms: "drwxr-xr-x", date: "2025-2028", institution: "UDESC", folder: "Bachelor of Software Engineering",
        content: "Santa Catarina State University (UDESC) - Term 3/8."
      }
    ],
    remotes: [
      { name: "github", url: "git@github.com:fajremvp/repo.git", webLink: "https://github.com/fajremvp" },
      { name: "codeberg", url: "git@codeberg.org:fajre/repo.git", webLink: "https://codeberg.org/fajre" }
    ],
    ui: {
      repoLink: "Repository Link",
      langEn: "[ English ]",
      langPt: "[ Portuguese ]",
      torMessage: "Also available on Tor: "
    }
  }
};
