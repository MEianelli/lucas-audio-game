# Supabase Social Login Setup

The app now supports Supabase Auth social login (Google) alongside the legacy
username/password flow. Follow these steps once in the Supabase dashboard and
Google Cloud to make it work.

## 1. Database migration

Run in Supabase **SQL Editor**:

```sql
-- Link game profiles to Supabase Auth users
alter table public.users
  add column auth_id uuid unique references auth.users (id) on delete cascade;

-- Social-login users have no password
alter table public.users
  alter column pass drop not null;
```

## 2. Google Cloud OAuth client

1. Go to https://console.cloud.google.com/ → create (or pick) a project.
2. **APIs & Services → OAuth consent screen**: configure it (External, app name
   "Filmguess", your support email). Publish the app when done testing.
3. **APIs & Services → Credentials → Create Credentials → OAuth client ID**:
   - Application type: **Web application**
   - Authorized JavaScript origins:
     - `https://www.filmguess.com`
     - `http://localhost:3000`
   - Authorized redirect URIs:
     - `https://hiinnoepvfmkkdioyanc.supabase.co/auth/v1/callback`
4. Copy the **Client ID** and **Client Secret**.

## 3. Enable Google provider in Supabase

1. Supabase dashboard → **Authentication → Sign In / Providers → Google**.
2. Toggle **Enable Sign in with Google**.
3. Paste the Client ID and Client Secret from step 2.
4. Save.

## 4. Redirect URLs in Supabase

Supabase only redirects back to URLs on an allowlist.

1. Dashboard → **Authentication → URL Configuration**.
2. **Site URL**: `https://www.filmguess.com`
3. **Redirect URLs** — add both:
   - `https://www.filmguess.com/api/auth/callback`
   - `http://localhost:3000/api/auth/callback`

## 5. Environment variables

No new variables. The flow reuses:

- `NEXT_PUBLIC_APP_URL` — must match the environment
  (`http://localhost:3000` locally, `https://www.filmguess.com` in prod),
  because it builds the OAuth `redirectTo`.
- `SUPABASE_ANON_KEY` — stays server-only; the whole OAuth flow runs through
  API routes, nothing Supabase-related ships to the browser.

## How the flow works

1. User clicks **Continue with Google** → browser hits
   `GET /api/auth/signin?provider=google`.
2. Server calls `signInWithOAuth` (PKCE), stores the code verifier in a
   cookie, redirects to Google.
3. Google → Supabase (`/auth/v1/callback`) → back to
   `GET /api/auth/callback?code=...`.
4. Callback exchanges the code for a session (sets `sb-*` cookies), then
   finds-or-creates the row in `public.users` matched by `auth_id`
   (nickname derived from the Google profile name / email).
5. `getServerSideProps` checks the Supabase session first, then falls back to
   the legacy encrypted cookie — existing password accounts keep working.

## Adding more providers later

1. Enable the provider in Supabase (same as step 3, e.g. GitHub/Discord).
2. Add it to `ALLOWED_PROVIDERS` in `src/pages/api/auth/signin.ts`.
3. Add a button pointing to `/api/auth/signin?provider=<name>`.
