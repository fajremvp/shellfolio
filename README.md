# 🖥️ shellfolio

A highly performant, minimalist portfolio template built with [Astro.js](https://astro.build/). Focused on TUI (Terminal User Interface) aesthetics, keyboard-friendly navigation, and absolute zero JavaScript bloat.

## ✨ Features

- **Dynamic Boot Sequence:** A realistic `systemd`-inspired bootloader animation dynamically generated from your portfolio data. Graceful fallback for `noscript` users.
- **`fastfetch` Hero:** Authentic terminal system-info banner rendering your tech stack and OS details.
- **Zero-Config Theming:** Hardcoded TTY phosphor-green and crust-black color palette for absolute contrast and immersion.
- **Type-Safe Configuration:** All data (Profile, Projects, Experience, Skills) is managed via pure TypeScript interfaces, preventing build errors.
- **Modular Architecture:** Fully decoupled. Enable or disable entire sections (Wallets, Tor mirrors, Education) globally via `site.config.ts` without ever touching the Astro/HTML components.
- **Built-in SEO & A11y:** OpenGraph meta tags ready, `rel="noopener noreferrer"` enforced on external links, and strict keyboard focus outlines for accessibility.
- **Dual Language:** Built-in boilerplate for English and Portuguese (easily extensible) with zero-flicker routing.

## 📂 Project Structure

shellfolio is designed to be easily forkable. You rarely need to touch the `.astro` files.

## 🚀 Quick Start

1. **Clone the repository:**
```bash
git clone https://github.com/fajremvp/shellfolio.git my-portfolio
cd my-portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Configure your site:**
Open `src/config/site.config.ts` and set your global branding and feature flags:
```typescript
export const siteConfig = {
  author: "Your Name",
  title: "user@domain:~$",
  prompt: { user: "user", host: "domain" },
  features: {
    fastfetch: true,
    wallets: false, // Turn true to show crypto addresses
    // ...
  }
};
```

4. **Add your content:**
Edit `src/data/shellfolio.ts` to inject your own `experiences`, `projects`, `skills`, and terminal `AsciiFace.astro` art.

5. **Run locally:**
```bash
npm run dev
```

## 🌐 Deployment (Cloudflare Pages)

Because shellfolio is an SSG (Static Site Generator) template, it deploys flawlessly on edge networks.
1. Push your code to a GitHub repository.
2. Go to Cloudflare Pages -> Connect to Git.
3. Select your repository.
4. Framework preset: `Astro`
5. Environment Variable: Add `NODE_VERSION` set to `22.12.0` (Critical for Astro 4+).
6. Click Deploy.

## 🔐 Advanced / Sovereign Hosting

shellfolio was originally designed to be hosted within Zero Trust Homelabs and the Tor Network.

- **Tor Hidden Service:** If you enable `features: { torMirror: true }`, the template will automatically generate a `<section>` rendering the `cat /etc/tor/shellfolio/hostname` output.

- **Nostr Identity (NIP-05):** If you wish to verify your identity on the Nostr protocol, create a `public/.well-known/nostr.json` file providing your hexadecimal public key and configure your CORS headers.

## 📜 Credits & License

- Typography relies on the legendary Terminus Font by Dimitar Zhekov and standard VGA web fonts to achieve the authentic hardware-rendered look.

- Released under the MIT License.
