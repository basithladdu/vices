# 🔥 Vices

> "What is a vice if it doesn't consume you"

A personal memory journal for moments tied to substances. Log cigarettes, alcohol, weed, psychedelics, and more. Track memories, not habits.

**[Live Demo](https://vices-app.web.app)** | **[GitHub](https://github.com/basithladdu/vices)** | **[Made by Devit](https://www.wedevit.in)**

---

## ✨ Features

- 🚬 **100+ Substances** across 8 categories (cigarettes, alcohol, weed, psychedelics, stimulants, prescription, inhalants, other)
- 📝 **Memory Logging** with mood, location, friends, rating, caption, and photos
- 📊 **Personal Stats** — see your substance identity and consumption patterns
- 🗺️ **Timeline & Feeds** — browse moments chronologically or by type
- 🔒 **Privacy Control** — mark moments public or private
- 📱 **Mobile-First** — works great on all devices, ready for native apps
- 🚀 **100% Open Source** — contribute, fork, build on top

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/basithladdu/vices.git
cd vices

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: React Icons
- **Routing**: React Router
- **Database**: localStorage (ready for Firebase/Supabase)
- **UI Components**: Custom built, dark-mode ready

---

## 📁 Project Structure

```
src/
├── components/          # Reusable components (Navbar, Footer, Cards)
├── pages/              # Page components (Home, Feed, Log, Profile, etc.)
├── data/               # Substance database & constants
├── styles/             # Global styles
├── App.jsx             # Main app component
└── main.jsx            # Entry point
```

---

## 🎨 Features & Pages

### Home (`/`)
- Hero with app description
- Category showcase
- How it works guide
- Example log

### Explore (`/explore`)
- Browse 100+ substances
- Search & filter by type
- Substance details
- Links to log moments

### Log (`/log`)
- Two-step logging flow
- Substance search
- Add mood, location, friends, rating
- Public/private toggle

### Feed (`/feed`)
- Timeline of all moments
- Demo logs (when empty)
- Real logs from localStorage
- Log card with full metadata

### Profile (`/profile`)
- Personal stats dashboard
- Substance identity breakdown
- Top moments
- Recent logs

### About (`/about`)
- About Vices & mission
- Roadmap
- Data sources
- Contributing guide

---

## 📊 Substance Database

### Included Categories

| Icon | Category | Count | Examples |
|------|----------|-------|----------|
| 🚬 | Cigarettes | 14 | Marlboro, Camel, Lucky Strike, Dunhill |
| 🍺 | Alcohol | 15 | Jack Daniel's, Heineken, Bacardi, Old Monk |
| 🌿 | Weed | 10 | OG Kush, Blue Dream, Malana Cream |
| 🍄 | Psychedelics | 5 | LSD, Psilocybin, DMT, Ketamine, MDMA |
| ⚡ | Stimulants | 3 | Espresso, Red Bull, ZYN |
| 💊 | Prescription | 2 | Xanax, Adderall |
| 💨 | Inhalants | 3 | Hookah, Vape, Nitrous |
| 🔮 | Other | 2 | Kratom, Kava |

**Total: 54 substances with full metadata (brand, origin, strength, flavor notes, effects)**

### Data Sources

- **Cigarettes**: FDA Tobacco Products Database, Oregon Brand Directory, Wikipedia
- **Alcohol**: Open Brewery DB, Untappd, Distiller, RateBeer, CocktailDB
- **Cannabis**: Leafly, Weedmaps, Strain API, OpenCannabis
- **Psychedelics**: Erowid, PsychonautWiki, TripSit Factsheets
- **Other**: PubChem, DrugBank, Community submissions

---

## 💾 Data Storage

### Current (MVP)
- localStorage for user logs (persist in browser)
- Demo logs shown when user has no entries

### Planned
- Firebase/Firestore for cloud storage
- User authentication
- Friend connections
- Social features (likes, comments)

---

## 🎯 Roadmap

- ✅ MVP (substance DB, logging, feed, profile)
- 🔄 Social features (follow, like, comment)
- 📱 Native apps (iOS/Android via Capacitor)
- 🗺️ Map mode (world timeline)
- 📊 Advanced analytics
- 🤖 AI insights ("You smoke more on Mondays")
- 🌍 Localization & translations
- 📡 Public API

---

## 🤝 Contributing

We welcome all contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

### Quick Contributions

- **Add Substances**: Edit `src/data/substances.js`
- **Fix Bugs**: Check [Issues](https://github.com/basithladdu/vices/issues)
- **Features**: Implement [Roadmap](#-roadmap) items
- **Docs**: Improve documentation

---

## 📝 License

MIT © 2026 [Devit](https://www.wedevit.in)

This app is a **personal journal tool**. We do not promote or endorse substance use.
Use responsibly, legally, and safely.

---

## 👥 Made by Devit

Vices is built by developers committed to open-source public infrastructure.

- 🌐 [wedevit.in](https://www.wedevit.in)
- 💼 [LinkedIn](https://www.linkedin.com/company/thedevit)
- 📸 [Instagram](https://instagram.com/devit.company)
- 📧 [workwithdevit@gmail.com](mailto:workwithdevit@gmail.com)

---

Made with 🔥 and 💚

![Vices Hero](https://images.unsplash.com/photo-1542156822-6924d1a71aba?q=80&w=2070&auto=format&fit=crop)

## 🔥 Core Features
- **Logging**: Quick and addictive logging with location, mood, friends, and photo support.
- **Archive**: A beautiful personal timeline and "Substance Identity" graph.
- **Database**: Crowdsourced database of Cigarettes, Alcohol, Cannabis, Psychedelics, and more.
- **Social**: See the viral feed of friends and explore popular moments.
- **Open Source**: Built with a vision for community-driven data and feature growth.

## 🚀 Tech Stack
- **React 19** + **Vite 6**
- **Tailwind CSS v4** (Modern logic & @theme tokens)
- **Framer Motion** (Smooth, visceral transitions)
- **Lucide & React Icons**
- **Capacitor Ready** (Easily build for Android/iOS)

## 🛠️ Getting Started

```bash
# Clone the repository
git clone https://github.com/basithladdu/vices.git

# Install dependencies
npm install

# Run the development server
npm run dev
```

## 🌍 Contributing
We welcome contributions!
1. Fork the repo.
2. Add your favorite substances to `src/data/substances.js`.
3. Submit a PR.

## ⚖️ Legal
Vices is a personal journal tool. It is not an endorsement or promotion of illegal substance use. Users must comply with local laws and regulations.

---
Built with 🔥 by [Devit](https://www.wedevit.in)
