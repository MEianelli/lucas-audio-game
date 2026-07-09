# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # dev server on localhost:3000
npm run build     # production build
npm run lint      # ESLint
```

No test suite configured.

## Environment Variables

Required in `.env.local`:
- `NEXT_PUBLIC_APP_URL` — base URL (e.g. `http://localhost:3000`)
- `SUPABASE_ANON_KEY` — Supabase anon key (server-only)
- `ENCRYPT_KEY` — AES key for cookie encryption

## Architecture

**Stack:** Next.js 15 Pages Router · Stitches.js (CSS-in-JS) · Zustand · Supabase (DB + Storage)

### Routing

Uses `src/pages/` (Pages Router). `src/app/layout.tsx` exists but is vestigial — all real pages live in `src/pages/`. Global app wrapper is `src/pages/_app.tsx`.

### Auth

Two mechanisms (see `docs/SUPABASE_AUTH_SETUP.md` for dashboard setup):

**Supabase Auth social login (primary):** server-side OAuth via `@supabase/ssr` (anon key never ships to browser). `GET /api/auth/signin?provider=google` → provider → `GET /api/auth/callback` exchanges code, sets `sb-*` session cookies, finds-or-creates `users` row by `auth_id`. Logout via `POST /api/auth/logout` (`logoutClient()` in `src/utils/logout.ts`).

**Legacy username/password:** Login POST → `/api/login` → verify in `users` table → AES-encrypt `{name}` → cookie `d187yd`.

Shared `getServerSideProps` (`src/lib/context/getServerSideProps.ts`) checks Supabase session first (by `auth_id`), falls back to legacy cookie (by `name`), passes user as `PageProps`. `useServerData(props)` hydrates the Zustand store on client.

### State (Zustand)

Single store in `src/lib/store.ts`. Holds: `User` fields (id, name, pass, lifes, score, hitids, missids), `screen`, `loginState`, `modalOption`, `rankData`.

`setIds(ids, type)` — core game action. Updates hit/miss arrays + score + lifes locally, then PUTs to `/api/data/users`.

### Game Logic

- Game is at `/content` (`src/pages/content.tsx`)
- `GuessCards` renders columns of `GuessCard` + `Answers` pairs
- `GuessCard` plays audio from Supabase Storage via `use-sound`; auto-plays 400ms after mount
- Cards fetched from `/api/data/fetch-cards` (BFF route), which joins `cards` + `media` tables and filters out already-seen card IDs (hitids + missids)
- Answer options = correct title + wrong titles from `media.wrongs[]`

### API Routes

- `src/pages/api/data/[table].ts` — generic CRUD for any Supabase table (GET/POST/PUT/DELETE). HTML in `posts` table is sanitized via `sanitizeSimpleHtml`.
- `src/pages/api/data/fetch-cards.ts` / `fetch-card.ts` — game-specific card fetching
- `src/pages/api/rank.ts` — leaderboard queries
- `src/pages/api/login.ts` / `register.ts` — auth endpoints

### Styling

Stitches.js. Config in `src/styles/stitches.config.ts` — all design tokens (colors, spacing, breakpoints) defined there. `globalStyles()` called in `_app.tsx`. Components use `styled()` or inline `css` prop. Primitive styled components are exported from `src/components/containers/`, `src/components/buttons/`, `src/components/text/`.

### Supabase Tables

| Table | Purpose |
|-------|---------|
| `users` | Auth + game state (lifes, score, hitids, missids) |
| `cards` | Audio/image asset references (`audio_src`, `image_src` are Storage paths) |
| `media` | Movie/music metadata (title, tags, wrongs, categorie) |
| `posts` | Blog posts |

Asset URLs: `${storageBaseUrl}/${bucket_path}` where `storageBaseUrl = https://hiinnoepvfmkkdioyanc.supabase.co/storage/v1/object/public`.

### Admin Pages

`/addCards`, `/addMedia`, `/addPosts` — content management pages (no auth gate in code; handle carefully).
