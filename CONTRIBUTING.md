# Contributing to Vices

Thank you for your interest in contributing to Vices. This document provides guidelines and directions for participating in the project.

## Code of Conduct

- Be respectful and inclusive.
- Assume good intent.
- Help others learn.
- No harassment, discrimination, or hate speech.

## Getting Started

### 1. Fork and Clone

```bash
git clone https://github.com/YOUR_USERNAME/vices.git
cd vices
npm install
```

### 2. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

Use descriptive names:
- `feature/add-mood-filters`
- `fix/log-card-spacing`
- `docs/update-readme`

### 3. Make Changes

- Follow the existing code style.
- Keep commits atomic and descriptive.
- Test changes on both mobile and desktop views.
- Update documentation if necessary.

### 4. Commit and Push

```bash
git add .
git commit -m "feat: add mood filters to feed"
git push origin feature/your-feature-name
```

We follow conventional commits:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting adjustments
- `refactor:` for code restructuring
- `test:` for adding or updating tests
- `chore:` for build tasks, dependencies, etc.

### 5. Submit a Pull Request

- Provide a clear and descriptive title.
- Explain why the change is being made and what specifically was changed.
- Mention related issues (e.g., `Fixes #123`).
- Add screenshots for any UI changes.

---

## Types of Contributions

### Adding Substances

You can contribute to the substance database by editing `src/data/substances.js`. We use the following structure:

```javascript
{
  id: 'unique-id',
  name: 'Substance Name',
  brand: 'Brand Name',
  type: SUBSTANCE_TYPES.CIGARETTE, // or ALCOHOL, WEED, etc.
  subtype: 'Blue / Premium / etc.',
  manufacturer: 'Company Name',
  origin: 'Country',
  strength: 'Light / Medium / Strong',
  abv: 40, // for alcohol
  thc: 20, // for weed
  cbd: 0.5,
  flavor_notes: ['sweet', 'earthy'],
  effects: ['relaxed', 'euphoric'], // for weed/psychedelics
  tags: ['iconic', 'everyday', 'premium'],
  image: 'https://...',
  description: 'A brief description',
},
```

Suggested data sources for verification:
- Cigarettes: FDA Tobacco Products Database, Oregon Brand Directory
- Alcohol: Untappd, Open Brewery DB
- Cannabis: Leafly, Weedmaps
- Psychedelics: Erowid, PsychonautWiki

### Bug Fixes

1. Ensure an issue exists for the bug.
2. Keep changes focused and minimal.
3. Test thoroughly before submitting.

### Feature Requests

For small features like better search or new sorting options, feel free to submit a PR directly. For larger features, please open an issue to discuss the approach with maintainers first.

---

## Code Style

### JavaScript and React

- Use `const` by default.
- Use descriptive variable and function names.
- Prefer functional components and arrow functions.
- Destructure props in component definitions.
- Write comments explaining the "why" rather than the "what".
- Keep components small and focused.

### Tailwind CSS

- Use Tailwind utility classes; avoid inline styles.
- Follow a mobile-first approach for responsive design.
- Utilize the existing theme variables for consistency.

---

## Testing

Before submitting a PR, please verify:
- The application works as expected on both mobile and desktop.
- All links are functional.
- Forms submit correctly.
- There are no console errors or warnings.

---

## Pull Request Checklist

- [ ] Branch created from `main`.
- [ ] Code follows the style guide.
- [ ] No console errors or warnings.
- [ ] Tested on mobile and desktop.
- [ ] Commit messages are clear and follow conventions.
- [ ] Documentation updated if necessary.
- [ ] PR description explains the changes clearly.

---

## License

By contributing to Vices, you agree that your contributions will be licensed under the MIT License.
