# Contributing to Vices

Thanks for wanting to make this better. Here's how we do it.

## Basic Etiquette

- Be cool to people.
- Assume we're all trying to build something good.
- Share knowledge.
- No harassment. That's it.

## How To Contribute

### 1. Fork and Clone

```bash
git clone https://github.com/YOUR_USERNAME/vices.git
cd vices
npm install
```

### 2. Make a Branch

```bash
git checkout -b feature/add-mood-filters
# or
git checkout -b fix/log-card-spacing
```

Branch names matter. Use:
- `feature/...` for new stuff
- `fix/...` for bug fixes  
- `docs/...` for documentation
- `refactor/...` for code cleanup

### 3. Code

Keep it simple. One thing per commit. Test on both phone and desktop before pushing.

### 4. Commit

```bash
git commit -m "feat: add mood filters to feed"
```

We use conventional commits so the changelog auto-generates:
- `feat:` new feature
- `fix:` bug fix
- `docs:` readme/docs update
- `style:` formatting only (no logic changes)
- `refactor:` restructure existing code
- `chore:` dependencies, build stuff

### 5. Push and PR

```bash
git push origin feature/add-mood-filters
```

Then open a PR on GitHub. Tell us:
- What you changed and why
- How to test it
- Screenshots if it's UI

---

## What You Can Contribute

### New Substances

The database lives in `src/data/substances.js`. Add items like this:

```javascript
{
  id: 'marlboro-gold-lights',
  name: 'Marlboro Gold',
  brand: 'Marlboro',
  type: SUBSTANCE_TYPES.CIGARETTE,
  subtype: 'Lights',
  manufacturer: 'Philip Morris',
  origin: 'USA',
  strength: 'Medium',
  flavor_notes: ['smooth', 'light'],
  tags: ['iconic', 'classic'],
  image: 'https://...',
  description: 'The Marlboro variant everyone knows.',
}
```

Use real sources:
- **Cigarettes**: FDA Tobacco DB, Oregon Directory
- **Alcohol**: Untappd, Open Brewery DB
- **Weed**: Leafly, Weedmaps
- **Psychedelics**: Erowid, PsychonautWiki

Verify the data. Don't make stuff up.

### Bug Fixes

Found something broken? Create an issue first. Then:

1. Make a minimal fix
2. Test it on desktop and mobile
3. Write a clear PR description
4. Link the issue

### Features

Small features (better search, new filter)? Just send a PR.

Big features (new page, major refactor)? Open an issue first. Let's talk about the approach.

---

## Code Style

### JavaScript & React

- Use `const`, not `let` or `var`
- Name things clearly (not `x` or `data`)
- Functional components only
- Destructure props: `const { user, logs } = props`
- Comments explain **why**, not **what**
- Keep components small

### CSS (Tailwind)

- No inline styles. Use Tailwind classes.
- Mobile-first design
- Use the color/spacing variables we defined
- No custom CSS unless you really can't use Tailwind

---

## Before You PR

Checklist:
- [ ] Branch is from `main`
- [ ] Code follows the style above
- [ ] No console errors
- [ ] Works on mobile AND desktop
- [ ] Commits are clear
- [ ] Updated docs if needed

---

## License

By contributing, you agree your code gets MIT licensed like the rest.

---

Questions? Open an issue. We're here to help.
