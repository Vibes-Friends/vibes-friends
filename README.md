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

### Forms (`apps/forms`)

TypeForm-style form builder cloned from [Nader Dabit's open form](https://github.com/dabit3/openform). Features:

- 13 question types
- Theme customization
- Response analytics
- File uploads (R2) (Not yet configured)

## Contributing

### Branch Strategy

We use trunk-based development with protected `main`:

```md
main (protected)
├── feature/your-feature
├── fix/bug-description
├── chore/task-description
└── docs/what-changed
```

### Workflow

1. Create branch from `main`

   ```bash
   git checkout -b feature/my-feature
   ```

2. Make changes and commit

   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

3. Push and open PR

   ```bash
   git push -u origin feature/my-feature
   ```

4. Get review, then squash merge to `main`

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
