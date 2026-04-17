# Supabase Shared Setup

This app can run as a shared live board using Supabase Postgres + Realtime.

## 1. Create a Supabase project

1. Open the Supabase dashboard.
2. Create a project.
3. Copy your project URL and anon key from `Project Settings -> API`.

Official docs:
- https://supabase.com/docs/reference/javascript/v1

## 2. Create the shared board table

Run this in the SQL editor:

```sql
create table if not exists public.shared_boards (
  board_id text primary key,
  shared_state jsonb not null,
  updated_at timestamptz not null default now(),
  updated_by text
);
```

## 3. Turn on Row Level Security and allow browser access

Run this in the SQL editor:

```sql
alter table public.shared_boards enable row level security;

create policy "anon can read shared boards"
on public.shared_boards
for select
to anon
using (true);

create policy "anon can insert shared boards"
on public.shared_boards
for insert
to anon
with check (true);

create policy "anon can update shared boards"
on public.shared_boards
for update
to anon
using (true)
with check (true);
```

For a quick internal team board this is fine. For a stricter setup, add Supabase Auth later.

## 4. Enable Realtime for the table

Run this in the SQL editor:

```sql
alter publication supabase_realtime add table public.shared_boards;
```

Official docs:
- https://supabase.com/docs/guides/realtime/postgres-changes

## 5. Paste your Supabase config

Edit [shared-config.js](/c:/web/shared-config.js:1):

- Set `enabled: true`
- Replace `url`
- Replace `anonKey`
- Keep `table: "shared_boards"` unless you renamed it
- Set `boardId` to the board slug you want the team to share

If everyone uses the same `boardId`, they all see the same live board.

## 6. Publish the site

Host the app on Netlify, GitHub Pages, or another static host.

## Notes

- Shared data syncs in real time.
- Reminder popups stay local per browser.
- The app uses a browser-local client id for `updated_by`.
- Anyone with the site URL can edit the board while the current anon policies stay open.
