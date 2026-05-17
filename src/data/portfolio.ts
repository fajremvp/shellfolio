// src/data/portfolio.ts

export const profile = {
  name: "Joao Vitor Fogaca de Oliveira",
  role: "Engenheiro de Infraestrutura e DevOps",
  location: "Ibirama/SC/Brazil",
  uptime: "19 years",
  about: `Profissional de Infraestrutura e DevOps com mentalidade analítica, visão sistêmica de ambientes complexos e foco em Segurança Zero Trust e proteção de dados. Diferente do perfil acadêmico padrão, possuo experiência prática na arquitetura e operação de infraestruturas de nuvem privada, priorizando automação (IaC) e resiliência. Combino a base teórica de Engenharia de Software com capacidade de execução técnica para implementar ambientes auditáveis e seguros. Busco desafios que exijam autonomia, resolução de problemas estruturais e rigor técnico.`
};

export const skills = [
  { category: "Infra & Virt", items: "Proxmox VE, Docker, LXC, ZFS, LUKS2, Linux (Debian, Alpine, Arch)" },
  { category: "DevOps & IaC", items: "Ansible, Docker Compose, Shell Scripting, Cloud-Init, Chezmoi, GitOps" },
  { category: "Security", items: "HashiCorp Vault, Authentik (SSO), CrowdSec, PKI, SSH Hardening" },
  { category: "Networking", items: "OPNsense, VLANs, Traefik v3, Tailscale (Mesh VPN), DNS, NAT" },
  { category: "Observability", items: "Prometheus, Grafana, Loki, Alertmanager, SRE (USE/RED)" },
  { category: "Dev & Data", items: "Java, Python, PostgreSQL, SQLite, Regex, Git" }
];

export const experiences = [
  {
    perms: "drwxr-xr-x",
    date: "2025-Pres",
    folder: "Private_Cloud_Homelab",
    content: "Arquitetura de Nuvem Privada (Proxmox, LUKS2, VLANs, OPNsense). Automação IaC via Ansible. Segurança Zero Trust (Vault, Authentik, CrowdSec). Observabilidade PLG e Disaster Recovery com cold boot e Restic."
  },
  {
    perms: "drwxr-xr-x",
    date: "2025-2025",
    folder: "UDESC_LABOT_Researcher",
    content: "Atuei no Laboratório de Robótica (LABOT) em projetos de extensão com foco em inclusão digital, ministrando oficinas para capacitar o público idoso no uso de smartphones e tecnologias, além de aulas de robótica educacional para crianças com atividades lúdicas e interativas para o estímulo do raciocínio lógico."
  }
];

export const projects = [
  {
    perms: "-rwxr-xr-x", /* Permissão de execução porque é shell */
    size: "18K",
    file: "HyprRun.sh",
    link: "https://github.com/fajremvp/HyprRun",
    content: "Criei um launcher de aplicações minimalista em Bash para gerenciadores de janelas de tiling dinâmico (Hyprland/Niri/Wayland). Integrei o fzf para busca fuzzy de alta performance via terminal, evitando janelas flutuantes e a sobrecarga de interfaces gráficas."
  },
  {
    perms: "-rw-r--r--",
    size: "45K",
    file: "S4F3-C0D3S.java",
    link: "https://github.com/fajremvp/S4F3-C0D3S",
    content: "Desenvolvi um gerenciador de códigos 2FA em Java. Implementei criptografia AES-256-GCM com derivação de chave PBKDF2+HMAC-SHA256 e salts aleatórios. A arquitetura inclui defesa contra força bruta (delays), limpeza de memória de dados sensíveis e destruição segura por sobrescrita em caso de adulteração ou múltiplas falhas de autenticação."
  },
  {
    perms: "-rw-r--r--",
    size: "12K",
    file: "dotfiles.conf",
    link: "https://github.com/fajremvp/dotfiles",
    content: "Mantenho a automação e gestão do meu ambiente de desenvolvimento Linux com configurações próprias, usando Chezmoi e Git para garantir versionamento, portabilidade e provisionamento rápido (IaC para desktop). O repositório inclui scripts em Shell para monitoramento de recursos, ajuste de parâmetros do sistema e interfaces interativas via terminal, padronizando workflows em Arch Linux com Hyprland."
  }
];

export const education = [
  {
    perms: "drwxr-xr-x",
    date: "2025-2029",
    folder: "BSc_Software_Engineering",
    content: "Universidade do Estado de Santa Catarina (UDESC) - Fase 3/8. Foco em engenharia base, estrutura de dados e arquitetura de sistemas."
  }
];
