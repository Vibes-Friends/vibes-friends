# Vibes Friends

A community platform for AI and vibe coding enthusiasts. Share builds, learnings, content, participate in events and have fun.

## Structure

```md
vibes-friends-landing/
├── apps/
│ ├── landing/ # Main site (vibesfriends.com)
│ └── forms/ # Form builder (vibesfriends.com/forms)
├── packages/
│ ├── ui/ # Shared React components (shadcn-based)
│ ├── supabase/ # Supabase client factories
│ ├── utils/ # Shared utilities (cn, etc.)
│ └── config/ # Shared tsconfig, eslint, prettier
├── pnpm-workspace.yaml
└── turbo.json
```

## Tech Stack

- **Framework:** Next.js 15 (landing), Next.js 16 (forms)
- **Monorepo:** pnpm workspaces + Turborepo
- **Styling:** Tailwind CSS v4
- **Database:** Supabase (Postgres + Auth)
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
pnpm install

# Run all apps
pnpm dev

# Run specific app
pnpm dev:landing    # localhost:3000
pnpm dev:forms      # localhost:3001
```

## Environment Setup

Copy example env files:

```bash
cp apps/landing/.env.example apps/landing/.env.local
cp apps/forms/.env.example apps/forms/.env.local
```

Configure your Supabase credentials in `apps/forms/.env.local`.

## Apps

### Landing (`apps/landing`)

Main marketing site at the root domain. Proxies `/forms/*` routes to the forms app.

### Forms (`apps/forms`) - For Internal Team Use

TypeForm-style form builder cloned from [Nader Dabit's open form](https://github.com/dabit3/openform). Features:

- 13 question types
- Theme customization
- Response analytics
- File uploads (R2) (Not yet configured)

## Contributing

We welcome contributions! This is an open source project and we love community involvement.

### Getting Started with Contributions

1. **Fork** this repo on GitHub

2. **Clone** your fork

   ```bash
   git clone https://github.com/YOUR_USERNAME/vibes-friends.git
   cd vibes-friends
   ```

3. **Create a branch**

   ```bash
   git checkout -b feature/my-feature
   ```

4. **Make changes** and commit

   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

5. **Push** to your fork

   ```bash
   git push origin feature/my-feature
   ```

6. **Open a PR** from your fork to `vibes-friends/vibes-friends:main`

### Branch Naming

| Prefix     | Use                      |
| ---------- | ------------------------ |
| `feature/` | New functionality        |
| `fix/`     | Bug fixes                |
| `chore/`   | Deps, configs, refactors |
| `docs/`    | Documentation            |

### Commit Messages

Follow [Conventional Commits](https://conventionalcommits.org):

```md
feat: add user authentication
fix: resolve form submission error
chore: update dependencies
docs: add API documentation
```

## Commands

| Command           | Description       |
| ----------------- | ----------------- |
| `pnpm dev`        | Start all apps    |
| `pnpm build`      | Build all apps    |
| `pnpm lint`       | Lint all packages |
| `pnpm type-check` | TypeScript check  |

## License

MIT
