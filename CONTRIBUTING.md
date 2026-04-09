# Contributing to Vices

Thanks for being interested in contributing! 🔥

This document provides guidelines and directions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Assume good intent
- Help others learn
- No harassment, discrimination, or hate speech

## Getting Started

### 1. Fork & Clone

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
- `feature/add-mood-filters` ✅
- `fix/log-card-spacing` ✅
- `docs/update-readme` ✅
- `feat123` ❌

### 3. Make Changes

- Follow existing code style
- Keep commits atomic and descriptive
- Test on mobile/desktop
- Update docs if needed

### 4. Commit & Push

```bash
git add .
git commit -m "feat: add mood filters to feed"
git push origin feature/your-feature-name
```

Use conventional commits:
- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation
- `style:` formatting
- `refactor:` code restructure
- `test:` tests
- `chore:` build, deps, etc.

### 5. Submit PR

- Title: Clear, descriptive
- Description: Why? What changed?
- Mention related issues (`Fixes #123`)
- Add screenshots if UI changes

---

## Types of Contributions

### 🚬 Add Substances

Edit `src/data/substances.js`:

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

**Data sources:**
- Cigarettes: [FDA DB](https://www.fda.gov/tobacco-products), [Oregon Directory](https://www.doj.state.or.us/tobacco-directory/)
- Alcohol: [Untappd](https://untappd.com), [Open Brewery](https://openbrewerydb.org/)
- Weed: [Leafly](https://leafly.com), [Weedmaps](https://weedmaps.com)
- Psychedelics: [Erowid](https://erowid.org), [PsychonautWiki](https://psychonautwiki.org/)

### 🐛 Fix Bugs

1. Create issue if doesn't exist
2. Make minimal, focused changes
3. Test thoroughly
4. Include before/after if visual

### ✨ Add Features

**Small features** (directly):
- Mood filters
- Better search
- New sorting

**Large features** (discuss first):
- Open issue to discuss approach
- Get feedback before coding
- Consider scope & complexity

### 📱 Mobile & Responsive

Test on:
- iPhone (375px)
- iPad (768px)
- Desktop (1280px+)

### 🎨 UI/UX Improvements

- Keep Vices dark aesthetic
- Use existing colors (vice-accent, vice-gold)
- Mobile-first approach
- Test accessibility

### 📚 Documentation

- Update README for new features
- Add code comments for complex logic
- Improve setup instructions
- Fix typos!

### 🌍 Translations

Create `src/i18n/[language].json` with translations for all UI text.

---

## Code Style

### JavaScript/React

```javascript
// Use const by default
const name = 'value'

// Descriptive names
const getUserLogs = () => { }  // ✅
const getL = () => { }          // ❌

// Functional components
const MyComponent = () => {
  return <div>content</div>
}

// Arrow functions
const handler = () => { }

// Destructure props
const LogCard = ({ log, substance }) => { }

// Comments for WHY, not WHAT
// ✅ Prevent multiple logs same day
// ❌ Check if log exists

// Keep functions small and focused
// ✅ 20-30 lines max per component
```

### Tailwind CSS

```javascript
// Use Tailwind classes (no inline styles)
<div className="px-4 py-3 bg-vice-card rounded-lg">
  Content
</div>

// Responsive-first
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

// Dark mode vars already set (no light mode needed)
<div className="text-white bg-vice-bg">
```

### File Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── [Component].jsx
├── pages/
│   ├── Home.jsx
│   └── [Page].jsx
├── data/
│   └── substances.js
├── App.jsx
└── main.jsx
```

---

## Testing

### Manual Testing

- [ ] Works on mobile
- [ ] Works on desktop
- [ ] All links work
- [ ] Forms submit correctly
- [ ] No console errors

### Test on Devices

```bash
npm run dev
# Use local IP to test on phone
# e.g., http://192.168.1.x:5173
```

---

## Pull Request Checklist

- [ ] Branch created from `main`
- [ ] Code follows style guide
- [ ] No console errors/warnings
- [ ] Tested on mobile
- [ ] Commit messages are clear
- [ ] README updated (if needed)
- [ ] PR description explains changes
- [ ] Related issue mentioned

---

## Review Process

1. **CI Checks**: Lint, format checks pass
2. **Code Review**: Maintainers review code
3. **Testing**: Manual testing by team
4. **Merge**: Squash & merge to main
5. **Deploy**: Auto-deployed to staging/prod

---

## Need Help?

- **Questions?** Open a [Discussion](https://github.com/basithladdu/vices/discussions)
- **Bug?** Open an [Issue](https://github.com/basithladdu/vices/issues)
- **Want to discuss?** [Email us](mailto:workwithdevit@gmail.com)

---

## Recognition

Contributors are recognized in:
- README.md
- GitHub contributors page
- Releases notes

Thank you for making Vices better! 🔥
