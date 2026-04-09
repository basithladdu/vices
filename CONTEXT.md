# Project: Vices
> "What is a vice if it doesn't consume you"

## Overview
A Letterboxd-inspired platform for tracking and sharing experiences with various substances (Cigarettes, Alcohol, Weed, etc.). The design uses a "Vices" theme: dark, high-end, moody, and non-cringe. Optimized for both web and mobile-native (via Capacitor).

## Tech Stack
- **Frontend**: React (Vite)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React, React Icons (Fa)
- **Animations**: Framer Motion
- **Notifications**: React Hot Toast
- **Mobile**: Capacitor Ready

## Current Status
- **Branding**: Renaming from "Letterboxd for" to "Vices".
- **Routes**:
  - `/`: Home (Hero section, featured vices)
  - `/feed`: Activity feed
  - `/log`: Create a new entry
  - `/profile`: User's identity and history
  - `/explore`: Database of substances
  - `/substance/:id`: Detailed page
  - `/about`: Project info & Devit company details


## To-Do List
- [ ] Create `About.jsx` page.
- [ ] Implement data persistence (Mock for now, or LocalStorage).
- [ ] Enhance "Substance Detail" page with more data and better layout.
- [ ] Add Framer Motion for smooth transitions.
- [ ] Improve Responsive design.
- [ ] Add search functionality in Explore.
- [ ] Polish "Log Entry" form with better UX.

## Development Notes
- Using Tailwind CSS v4 `@theme` for variables.
- Colors: `vice-bg`, `vice-card`, `vice-accent` (red), `vice-gold`.
- Font: Inter and Playfair Display (Serif).
