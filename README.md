# Memory Locks Pre-Launch Landing Page (ml-landingpage)

![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)
![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white)

<img src="https://imagedelivery.net/Fh6D8c3CvE0G8hv20vsbkw/43379da0-d88a-42ea-fec6-7b345c7e2800/thumb" alt="Memory Locks Logo" width="200" />

> **Application is live at: https://memorylocks.com ✨**

**Memory Locks Landing Page** is the marketing site for Memory Locks, featuring the hero experience, waitlist capture, and a reservation flow powered by Stripe. Built with SvelteKit and designed for fast edge delivery on Cloudflare.

## ✨ Features

- **Brand-first UI**: Bold visuals, motion-driven sections, and conversion-focused layout.
- **Waitlist + Reservations**: Signup API with MailerLite and a €1.00 reservation flow.
- **Stripe Payments**: Checkout and PaymentIntent flows with client-side Stripe Elements.
- **Edge-ready**: Cloudflare adapter and Wrangler configuration included.
- **SEO Ready**: Title, description, Open Graph, and Twitter card metadata.

## 🛠 Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/)
- **UI**: [Svelte 5](https://svelte.dev/) + [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build**: [Vite](https://vitejs.dev/)
- **Payments**: [Stripe](https://stripe.com/)
- **Email**: [MailerLite](https://www.mailerlite.com/)
- **Hosting**: [Cloudflare Workers](https://workers.cloudflare.com/)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) (recommended)
- [Wrangler](https://developers.cloudflare.com/workers/wrangler/) for deployment

### Installation

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Create a local env file:

   ```bash
   touch .env
   ```

3. Add required environment variables (see Configuration below).

### Local Development

```bash
pnpm run dev
```

Open the app at `http://localhost:5173`.

## ⚙️ Configuration

### Environment Variables

Add these to `.env` for local dev or as production secrets:

- `STRIPE_SECRET_KEY=sk_live_...`
- `MAILERLITE_API_TOKEN=...`

Notes:

- Stripe publishable key is currently hardcoded in `src/lib/components/Checkout.svelte`.
- The reservation flow depends on `STRIPE_SECRET_KEY` and the MailerLite token for VIP tagging.

## 📦 Scripts

- `pnpm run dev` — start local dev server
- `pnpm run build` — production build
- `pnpm run preview` — preview production build
- `pnpm run check` — typecheck
- `pnpm run lint` — format check
- `pnpm run format` — format files

## ☁️ Deployment (Cloudflare)

This repo includes a Wrangler config for Cloudflare Workers. After a build:

```bash
pnpm run build
wrangler deploy
```

## 📂 Project Structure

```
src/
lib/              UI components, state, utilities
routes/           Pages + server endpoints
routes/api/       Stripe + signup endpoints
routes/legal/     Legal page
routes/reserve-complete/  Payment completion
```

---

Built with care.
