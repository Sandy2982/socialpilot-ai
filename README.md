# SocialPilot AI — deployable starter

This Next.js + Supabase project provides account sign-in, private client workspaces, and saved content drafts. It is a real starter foundation, not yet the complete social automation product.

## Not enabled yet
No live Instagram/Facebook/YouTube/Google Business Profile connections, AI generation, automatic publishing, live comment/message retrieval or automated replies. These require official platform permissions, API credentials, server-side integrations and scheduled jobs. Drafts and status labels are not proof of live publishing.

## Beginner deployment checklist
You need free accounts at https://supabase.com, https://github.com and https://vercel.com. Do not send passwords, API keys or tokens in chat.

1. **Create Supabase project:** Sign up at Supabase and create a project named `socialpilot-ai`. Open SQL Editor → New query. Paste the full contents of `supabase/schema.sql` and click Run.
2. **Copy database settings:** In Supabase Project Settings → API/Connect, copy the Project URL and publishable/anon key. Never use a service-role key in a public variable.
3. **Upload to GitHub:** Create a private repository named `socialpilot-ai`. Upload the contents of this ZIP with folder structure intact (not the ZIP itself).
4. **Deploy on Vercel:** Sign in to Vercel, choose Add New → Project, import the GitHub repository. Add environment variables before deploying:
   - `NEXT_PUBLIC_SUPABASE_URL` = Supabase Project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = Supabase publishable/anon key
   Click Deploy. Vercel will provide a temporary `*.vercel.app` URL.
5. **Configure authentication:** Supabase → Authentication → URL Configuration. Set Site URL to your exact Vercel URL and add that URL to Redirect URLs.
6. **Test:** Open the Vercel URL, create an account, confirm email if requested, sign in, add a client, and create a content draft.

## Troubleshooting
- Build failure: check Vercel build logs and ensure every file is uploaded with correct folders.
- Login/database errors: verify the two environment variables, run `supabase/schema.sql`, and redeploy after changing variables.
- Email confirmation: check your inbox and the Supabase URL configuration.

## Roadmap
1. AI caption/hashtag generation via a server-side AI key.
2. Monthly calendars, media uploads and client approval workflow.
3. Official OAuth connections for Meta, YouTube and Google Business Profile.
4. Scheduled publishing worker, retries and publishing logs.
5. Unified inbox/replies only where official platform APIs permit.
6. Agency team permissions, audit log and subscription billing.

Official docs: https://vercel.com/docs/frameworks/full-stack/nextjs · https://supabase.com/docs/guides/auth/quickstarts/nextjs
