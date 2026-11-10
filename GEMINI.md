# Project Rules: Rivanta Green Web

## Critical Engineering Guidelines

### 1. NEVER Remove or Disable Animations / Visual Effects
- **STRICT PROHIBITION**: Under NO circumstances may you delete, remove, disable, or strip out animations, scroll effects, visual transitions, hero expansions, or UI interactions to "fix performance" or "reduce lag".
- **Optimize, Never Remove**: If an animation or scroll effect feels laggy, you MUST optimize its implementation (e.g., migrate from layout-thrashing `margin`/`height` to GPU-accelerated `transform`/`scale`, compositor layers, or tuned Lenis lerp). You must NEVER remove the visual effect itself.
- **Explicit Permission Required**: Never assume the user wants an animation or feature removed. The visual design, hero framing, and animations are intentional. If you are unsure, ask the user first before altering or touching the feature.

### 2. Preserve 100% Brand Identity and UI/UX Integrity
- Strictly preserve all existing site styling, branding, component structures, and visual aesthetics.
- Do not make unilateral design reductions or visual compromises.

### 3. Git Push Requirement
- Always run `git push origin main` every time after completing any commit or coding task.

