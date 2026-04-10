# Vices

> "What is a vice if it doesn't consume you"

A personal memory journal for the moments that stick with you. That cigarette on the hostel terrace. The bar conversation that changed something. The mushroom trip where you saw the universe differently. Log it. Remember it. Understand yourself through it.

[GitHub](https://github.com/basithladdu/vices) | [Made by Devit](https://www.wedevit.in)

---

## Why?

We realized nobody was building this. Everyone tracks fitness. Everyone tracks spending. But what about the moments that actually shaped who you are? The substances, the people, the locations, the feelings. That's what Vices does. No judgment. No glorification. Just honest memory keeping.

## What's Inside?

- **100+ substances** across 8 categories (cigarettes, alcohol, weed, psychedelics, stimulants, pharma, vape, other)
- **Log the full moment**: who was there, where, your mood, a caption, rating, photos
- **Your stats**: see what your substance identity actually looks like. Top substance. Top mood. Average rating.
- **Private or public**: some moments are yours alone. Some you want to share.
- **Real mobile apps coming**: iOS and Android via Capacitor, not a wrapper
- **Open source**: add substances, fix bugs, build on top of it

## Tech

React 19 + Vite. Tailwind v4. Framer Motion animations. React Router. Firebase for auth and storage. Capacitor for native mobile. Everything built to be simple and maintainable.

## Getting Started

```bash
git clone https://github.com/basithladdu/vices.git
cd vices
npm install
npm run dev
```

Then go to http://localhost:5173 and start logging.

### For Mobile Development

```bash
npm run mobile:build    # Builds web + syncs to iOS/Android
npm run mobile:ios      # Opens Xcode
npm run mobile:android  # Opens Android Studio
```

See [MOBILE.md](MOBILE.md) for full setup.

### Firebase Setup

You need to wire up your own Firebase for authentication and storage. See [FIREBASE_SETUP.md](FIREBASE_SETUP.md) for step-by-step instructions.

## Project Layout

```
src/
├── components/    # Cards, Navbar, Footer, etc
├── pages/        # Home, Feed, Log, Profile, Explore
├── data/         # The 100+ substances database
├── config/       # Firebase config
├── context/      # Auth context
└── hooks/        # Capacitor, etc
```

## What's Actually Done?

- ✅ Substance database with 54 items (room to grow)
- ✅ Logging system with moods, ratings, locations, friends
- ✅ Feed + Stats + Profile views
- ✅ Authentication (Firebase)
- ✅ Design system (Literary Zine aesthetic)
- ✅ Mobile packaging ready (Capacitor)

## What's Next?

- Social features (follow, like, comment)
- Map view (where are you logging?)
- Advanced insights (trends, patterns)
- Native iOS/Android apps
- Public API
- Community contributions

## How To Contribute

1. **New substances?** Add to `src/data/substances.js` with proper metadata
2. **Bug fix?** Send a PR
3. **Feature idea?** Open an issue

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## Important

Vices is a journal. Not a promotion. Not a guide. Use responsibly. Follow your local laws. This is your memory, your story, your terms.

---

Made by [Devit](https://www.wedevit.in) | MIT License © 2026
