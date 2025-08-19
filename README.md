FEEL — Festival of Experiential Events & Learning

Stack: Next.js (App Router) + Tailwind CSS + Framer Motion + next-themes + Supabase.

Local dev

1. Create `.env.local` in project root with:
   - `NEXT_PUBLIC_SUPABASE_URL="https://...supabase.co"`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY="<anon-key>"`
   - Optionally for server-side insert: `SUPABASE_SERVICE_ROLE_KEY="<service-role-key>"` (never commit).
2. Install deps: `npm i`
3. Run dev: `npm run dev`

Supabase table

Create table `collaborations` with RLS:

```sql
create table if not exists public.collaborations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz default now()
);

alter table public.collaborations enable row level security;
create policy "Allow inserts from anon" on public.collaborations
  for insert to anon with check (true);
```

Deployment

- Push to GitHub and deploy on Vercel.
- Configure environment variables in Vercel project settings to match `.env.local`.
- Replace placeholder images in `public/speakers`, `public/partners`, `public/throwback`.
- Update `src/data/index.ts` with real content.
