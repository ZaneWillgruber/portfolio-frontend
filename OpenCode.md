# OpenCode Guidelines

## Commands
- Build: `npm run build`
- Dev: `npm run dev --turbopack`
- Start: `npm run start`
- Lint: `npm run lint`

## Code Style
- **Imports**: Group imports by type (React, Next.js, components, utils)
- **Types**: Use TypeScript with strict mode, prefer explicit types over `any`
- **Components**: Use functional components with explicit return types
- **Naming**: PascalCase for components, camelCase for functions/variables
- **CSS**: Use Tailwind classes with consistent ordering (layout → typography → colors)
- **Error Handling**: Use try/catch blocks with appropriate error messages
- **File Structure**: Keep related components in same directory
- **Formatting**: Use 2-space indentation, trailing commas, semicolons
- **JSX**: One component per file, props on new lines when > 3 props
- **Path Aliases**: Use `@/*` for imports from project root

## Project Structure
- `app/`: Next.js App Router pages and layouts
- `ui/`: Reusable UI components
- `public/`: Static assets