# Mobile Apps: iOS and Android

Build native Vices apps using Capacitor. This wraps the web app into real iOS and Android projects.

## Before You Start

**You'll need:**
- Node.js 16+ and npm (you probably have this)
- **iOS**: Xcode 13+ (Mac only, ~12GB download)
- **Android**: Android Studio + SDK (Windows/Mac/Linux, ~8GB)
- Time. First setup takes 30+ minutes

**Don't have a Mac?** iOS is harder without Xcode. Android works on any OS.

**Capacitor CLI:**
```bash
npm install -g @capacitor/cli
```

## Setup

```bash
# Install dependencies (includes Capacitor)
npm install

# First time only: create native projects
npx cap init

# Build web + sync to iOS/Android
npm run mobile:build
```

That's it. You now have `ios/` and `android/` folders with real native projects.

## Development

### iOS (Mac only)

```bash
npm run mobile:ios
```

Opens Xcode with your Vices project. Then:

- **Simulator**: Select a simulator at top, press Play
- **Real device**: Plug in iPhone, select it, press Play (needs provisioning)
- **Build settings**: Check target → Build Settings if things break

**To ship to App Store:**
1. Create Apple Developer Account ($99/year)
2. Sign the app in Xcode (Signing & Capabilities tab)
3. Menu: Product → Archive
4. Use Organizer to upload

### Android (Windows/Mac/Linux)

```bash
npm run mobile:android
```

Opens Android Studio with your Vices project. Then:

- **Emulator**: Create one in Device Manager, press Play
- **Real device**: Enable USB debugging in phone settings, plug in, press Play
- **Gradle issues?** Click "Sync Now" if IDE complains

**To ship to Google Play:**
1. Create Google Play Developer Account ($25 one-time)
2. Generate a release keystore: `keytool -genkey -v -keystore ...`
3. Build → Generate Signed Bundle/APK
4. Upload to Play Console

## Native Plugins

The app includes Capacitor plugins for:

- **Geolocation** — GPS for auto-detecting log location
- **Filesystem** — Caching images and data offline
- **Device** — Phone info for analytics
- **Splash Screen** — Branded splash on startup
- **Status Bar** — Dark status bar theme

## Dev Workflow

```bash
# 1. Make changes to React code
# (no need to rebuild for every change)

# 2. Test in web browser
npm run dev

# 3. When ready for mobile testing:
npm run mobile:build

# 4. Run on iOS/Android simulator or device
# (use Xcode or Android Studio)

# 5. Commit and push when it works
```

## Troubleshooting

**"ios/ folder not found"**
- Run `npx cap init` to create native projects

**"dist/ folder not found"**
- Run `npm run build` first

**Location permission denied**
- iOS: Check Info.plist for NSLocationWhen keys
- Android: Check AndroidManifest.xml
- Request user permission on app start
- Test on real device (simulator GPS is iffy)

**Splash screen hangs**
- Check timeout in `capacitor.config.json`
- Ensure `useCapacitor` hook runs on app start

**Build fails randomly**
- iOS: Try cleaning (Cmd+Shift+K in Xcode)
- Android: Try `./gradlew clean` in android/ folder

**Capacitor not syncing**
- Run `npx cap sync` manually to refresh

## Resources

- [Capacitor docs](https://capacitorjs.com)
- [Capacitor plugins](https://capacitorjs.com/docs/plugins)
- [iOS guide](https://capacitorjs.com/docs/ios)
- [Android guide](https://capacitorjs.com/docs/android)
