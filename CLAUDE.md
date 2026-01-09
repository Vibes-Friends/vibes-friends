# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
pnpm install

# Development
pnpm dev              # Run all apps concurrently
pnpm dev:landing      # Run landing app only (localhost:3000)
pnpm dev:forms        # Run forms app only (localhost:3001)

# Build & Quality
pnpm build            # Build all apps
pnpm lint             # Lint all packages
pnpm type-check       # TypeScript check all packages
```

## Architecture

This is a pnpm + Turborepo monorepo with two Next.js apps and shared packages.

### Apps

- **`apps/landing`** - Marketing site (Next.js 15, React 19). Proxies `/forms/*` routes to the forms app in production.
- **`apps/forms`** - TypeForm-style form builder (Next.js 16, React 19). See `apps/forms/CLAUDE.md` for detailed architecture.

### Packages

- **`@vibes/ui`** - Shared React components (shadcn-based with CVA). Exports: `button`, `card`, `input`
- **`@vibes/utils`** - Utilities including `cn()` for class merging (clsx + tailwind-merge)
- **`@vibes/supabase`** - Supabase client factories. Exports: `client` (browser), `server` (RSC), `middleware`
- **`@vibes/config`** - Shared TypeScript, ESLint, and Prettier configs

### Package Imports

```typescript
// UI components
import { Button, Card } from "@vibes/ui";
import { Button } from "@vibes/ui/button";

// Utilities
import { cn } from "@vibes/utils";

// Supabase (in forms app)
import { createClient } from "@vibes/supabase/client"; // Browser
import { createClient } from "@vibes/supabase/server"; // Server Components
```

## Conventions

- Tailwind CSS v4 (both apps)
- Use workspace dependencies: `"@vibes/ui": "workspace:*"`
- Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`
- Branch naming: `feature/`, `fix/`, `chore/`, `docs/`
