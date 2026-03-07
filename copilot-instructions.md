# GitHub Copilot Instructions

## 👤 About This Developer
- Transitioning from **Python** to **TypeScript** for full-stack React apps
- Prefers clean, readable, well-commented code — especially during the learning phase
- Values consistency and good patterns over clever shortcuts

---

## 🛠️ Stack & Language Preferences

### Language
- **TypeScript** is the primary language for all frontend and full-stack work
- Use **strict mode** TypeScript (`"strict": true` in tsconfig)
- Prefer explicit types over `any` — always type function parameters and return values
- Use `interface` for object shapes, `type` for unions/aliases

### Frontend
- **React** with functional components only — no class components
- Use **React Hooks** (`useState`, `useEffect`, `useCallback`, `useMemo`, etc.)
- Prefer named exports over default exports for components
- Co-locate component styles and tests with the component file

### Styling
- **Tailwind CSS** utility classes preferred
- Avoid inline styles unless dynamically computed
- Use `clsx` or `cn()` for conditional class merging

### Full-Stack
- **Next.js** (App Router) preferred for full-stack projects
- Use **server components** by default; add `"use client"` only when necessary
- API routes go in `app/api/` following REST conventions

---

## 📁 Project Structure Convention
```
src/
├── app/              # Next.js App Router pages & API routes
├── components/       # Shared UI components
│   └── ui/           # Primitive/base components
├── lib/              # Utility functions and helpers
├── hooks/            # Custom React hooks
├── types/            # Global TypeScript type definitions
└── styles/           # Global styles (if needed)
```

---

## ✅ Code Style Rules

- Use `const` over `let` wherever possible; never use `var`
- Use **arrow functions** for component definitions and callbacks
- Destructure props at the function signature level
- Always handle loading and error states in async operations
- Prefer `async/await` over `.then()` chains
- Add **JSDoc comments** on all exported functions and components
- Keep components small and single-purpose — extract logic into hooks

---

## 🚫 Avoid
- `any` type — use `unknown` and narrow with type guards instead
- Prop drilling more than 2 levels — use context or state management
- Mutating state directly
- `console.log` left in production code (use proper logging)
- Default exports for utilities and hooks

---

## 🐍 Python Background Notes
> Jesse is coming from Python — Copilot should:
> - Favor clear, explicit code over terse/clever TypeScript idioms
> - Add inline comments explaining TypeScript-specific patterns when relevant
> - Prefer `for...of` loops over complex array method chains when readability matters
> - Use familiar patterns like destructuring in a way that's easy to parse visually

---

## 🔁 Reminder Protocol
> **Jesse: Read the full context before diving in.** Check existing types, component props, and folder structure before generating new code. A moment of reading saves a lot of refactoring. 📖

---

*Last updated: March 2026*
