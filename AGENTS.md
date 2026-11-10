<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Critical Project & Engineering Rules

### 1. NEVER Remove or Disable Animations / Visual Effects
- **STRICT PROHIBITION**: Under NO circumstances may you delete, remove, disable, or strip out animations, scroll effects, visual transitions, hero expansions, or UI interactions to "fix performance" or "reduce lag".
- **Optimize, Never Remove**: If an animation or scroll effect feels laggy, you MUST optimize its implementation (e.g., migrate from layout-thrashing `margin`/`height` to GPU-accelerated `transform`/`scale`, compositor layers, or tuned Lenis lerp). You must NEVER remove the visual effect itself.
- **Explicit Permission Required**: Never assume the user wants an animation or feature removed. The visual design, hero framing, and animations are intentional. If you are unsure, ask the user first before altering or touching the feature.

### 2. Preserve 100% Brand Identity and UI/UX Integrity
- Strictly preserve all existing site styling, branding, component structures, and visual aesthetics.
- Do not make unilateral design reductions or visual compromises.

### 3. Git Push Requirement
- Always run `git push origin main` every time after completing any commit or coding task.

---

## AI Development Skills & Quality Control Rules

### Rule Group A — Corporate Design Identity
- **Enterprise Aesthetic**: Modern, clean, intentional corporate aesthetic appropriate for a diversified industrial enterprise (sustainable industrial technologies, advanced materials, renewable fuels, and agricultural-residue valorization).
- **Structure & Whitespace**: Generous whitespace, deliberate hierarchy, high-contrast readability.
- **Visual Distinction**: Clear visual differentiation between technology offerings, corporate credentials, leadership, research, and careers.
- **Trust & Credibility**: Design for credibility, institutional trust, and enterprise/governmental buyers.

### Rule Group B — Anti-Generic-Design Requirements
- **Reject Generic AI Templates**: No floating purple/blue gradient orbs, no meaningless isometric illustrations, no low-contrast light-gray text on white backgrounds, and no interchangeable SaaS/startup boilerplate.
- **Purposeful Sections**: Every section and component must serve a specific communication purpose.
- **Authentic Visuals**: Data visualizations, technical diagrams, and process flows must represent real engineering concepts, not decorative placeholders.
- **Restrained Motion**: Micro-interactions and transitions must feel purposeful, physical, and restrained, never gratuitous or flashy.

### Rule Group C — Brand Preservation
- **Legal Entity Name**: Strict adherence to the exact legal company name: **"Rivanta Green Innovative Venture Private Limited"** (singular "Venture").
- **Enterprise Palette**: Core brand colors: primary dark/forest greens, clean neutrals, and purposeful accents.
- **Asset Integrity**: Strictly preserve approved typography pairings, logo usage, iconography style, and tone of voice.
- **No Inventions**: Never invent placeholder brand assets or modify approved corporate identities.

### Rule Group D — React and Next.js Engineering Standards
- **Server Components Default**: Follow Vercel React Best Practices (`vercel-react-best-practices`): Server Components by default; Client Components (`'use client'`) only when user interactivity or client hooks strictly require them.
- **Bundle Optimization**: Minimize bundle size via dynamic imports (`next/dynamic`) for heavy client libraries, proper tree-shaking, and optimized script loading (`next/script`).
- **Component Cleanliness**: Single responsibility, strictly typed TypeScript props/interfaces, co-located styles or CSS modules, accessible HTML semantic primitives.
- **Performance by Design**: Zero Cumulative Layout Shift (CLS), optimized images (`next/image` with explicit width/height or fill), responsive typography, and fast initial server render.

### Rule Group E — Visual Quality Gate
Before considering any UI/UX task complete, the agent must verify the output against the installed design skills:
1. **Impeccable Standards**: Consult or run `impeccable` for visual polish, WCAG contrast compliance, spacing rhythm, and alignment precision.
2. **Taste Skill Criteria**: Apply `design-taste-frontend` criteria to eliminate amateurish, generic, or AI-boilerplate patterns.
3. **Hallmark Standards**: Review `hallmark` standards to ensure product-grade distinctiveness and production readiness.
4. **Vercel Web Design Guidelines**: Cross-check `web-design-guidelines` for mobile responsiveness, viewport scaling, touch targets, and accessibility fundamentals.
5. **Playwright Visual Inspection**: If `playwright-cli` is available, capture a screenshot of modified components or pages to visually inspect rendering before finalizing.

### Rule Group F — No Unauthorized Changes
- **Strict Scope Boundary**: Agents must never modify files outside the explicit scope of their assigned task.
- **No Unsolicited Refactoring**: Never "clean up", "format", or "refactor" unrelated code.
- **No Dependency Changes**: Never modify `package.json`, lockfiles, or installed packages without prior explicit authorization.
- **No Documentation Deletion**: Never delete or degrade existing documentation, rules, or configuration files.

---

## Skill Selection Hierarchy & Conflict Resolution Matrix

When guidelines or skill recommendations conflict, adhere strictly to the following precedence order:

1. **Project Brand & Business Rules (`AGENTS.md`)** — **ALWAYS WINS**.
2. **Impeccable (`impeccable`)** — Primary authority on visual quality, polish, contrast, alignment, and spacing.
3. **Taste Skill (`design-taste-frontend`)** — Authority on aesthetic sophistication, eliminating generic patterns, and layout choices.
4. **Hallmark (`hallmark`)** — Authority on product-grade visual identity and distinctive presentation.
5. **Vercel Web Design Guidelines (`web-design-guidelines`)** — Authority on web standards, responsive behavior, and accessibility fundamentals.
6. **Vercel React Best Practices (`vercel-react-best-practices`)** — Authority on code architecture, React/Next.js performance, and component structure.

### Conflict Resolution Rule
- **Brand vs Design Skills**: If a generic design skill recommends a visual style that contradicts Rivanta Green brand guidelines (e.g., suggesting a pastel palette instead of Rivanta Green's enterprise green palette), the brand guidelines **ALWAYS** take precedence.
- **Code Architecture vs Design Skills**: If a code practice from Vercel React Best Practices conflicts with an implementation detail suggested by a design skill, the Vercel React Best Practice takes precedence for code structure, while the design skill governs visual output.

### When to Use Which Skill Matrix
| Task / Activity | Primary Skills | Secondary / Verification Skills |
| :--- | :--- | :--- |
| **UI critique & visual audit** | `impeccable`, `design-taste-frontend` | `hallmark` |
| **New component design** | `design-taste-frontend`, `hallmark` | `web-design-guidelines` |
| **React / Next.js implementation** | `vercel-react-best-practices` | Next.js documentation |
| **Responsive & accessibility audit** | `web-design-guidelines` | `impeccable` |
| **End-to-end visual verification** | `playwright-cli` | Human visual review |
