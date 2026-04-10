# Vices - Mobile App Setup

This guide covers building and deploying Vices as a native iOS and Android app using Capacitor.

## Prerequisites

- Node.js 16+ and npm
- For iOS: Xcode 13+
- For Android: Android Studio + SDK
- Capacitor CLI: `npm install -g @capacitor/cli`

## Installation

1. Install dependencies:
```bash
npm install
```

This includes all Capacitor packages:
- `@capacitor/core` — Core Capacitor framework
- `@capacitor/device` — Device info and hardware features
- `@capacitor/geolocation` — GPS/location access
- `@capacitor/filesystem` — Local file storage
- `@capacitor/app` — App lifecycle and deep linking
- `@capacitor/splash-screen` — Splash screen control
- `@capacitor/status-bar` — Status bar styling

## Building for Mobile

### 1. Build the web assets
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### 2. Initialize Capacitor (first time only)
```bash
npx cap init
```

This creates the `ios/` and `android/` native project folders.

### 3. Sync web assets to native projects
```bash
npm run mobile:build
```

This automatically builds the web app and syncs assets to both platforms.

## Platform-Specific Setup

### iOS Development

```bash
npm run mobile:ios
```

This opens Xcode with the Vices iOS project. From here you can:
- Run on simulator: Cmd + R
- Run on device: Select your device and build
- Sign the app for distribution
- Upload to App Store

**Requirements:**
- Apple Developer Account (for distribution)
- Provisioning profiles configured in Xcode

### Android Development

```bash
npm run mobile:android
```

This opens Android Studio with the Vices Android project. From here you can:
- Run on emulator
- Run on physical device (USB debugging enabled)
- Generate signed APK for Google Play
- Create App Bundle for Play Store

**Requirements:**
- Google Play Developer Account (for distribution)
- Keystore file for signing releases

## Key Features

The app uses these Capacitor plugins:

- **Geolocation**: Auto-detect location for log entries
- **Filesystem**: Cache substance images and log data locally
- **Device**: Get device info for analytics
- **Splash Screen**: Custom branded splash on app launch
- **Status Bar**: Dark status bar matching app theme

## Environment Configuration

Update `capacitor.config.json` for platform-specific settings:

```json
{
  "appId": "app.vices.web",
  "appName": "Vices",
  "webDir": "dist",
  "ios": { "contentInset": "automatic" },
  "plugins": { ... }
}
```

## Distribution

### iOS App Store
1. Build in Xcode: Product → Archive
2. Validate and upload via Organizer
3. Submit for review (typically 24-48 hours)

### Google Play Store
1. Generate signed APK: Build → Build Bundle(s)/APK(s) → Build APKs
2. Upload APK to Play Console
3. Complete store listing and submit for review (typically 24 hours)

## Common Issues

**Error: `ios/` folder not found**
- Run `npx cap init` to initialize Capacitor projects

**Error: `dist/` folder not found**
- Run `npm run build` to build web assets first

**Geolocation not working on device**
- Check Info.plist (iOS) or AndroidManifest.xml for location permissions
- Request user permission when app launches
- Test on actual device (simulator may not have GPS)

**Splash screen not disappearing**
- Check splash screen timeout in `capacitor.config.json`
- Ensure app initializes in `useCapacitor` hook

## Development Workflow

1. Make changes to React code
2. Test in browser: `npm run dev`
3. Build and sync to mobile: `npm run mobile:build`
4. Test on device/simulator
5. Debug native issues in Xcode/Android Studio
6. Commit and push changes

## Additional Resources

- [Capacitor Documentation](https://capacitorjs.com)
- [Capacitor Plugins](https://capacitorjs.com/docs/plugins)
- [iOS Deployment Guide](https://capacitorjs.com/docs/ios)
- [Android Deployment Guide](https://capacitorjs.com/docs/android)
