# Firebase Setup Guide for Vices

This guide covers setting up Firebase Authentication, Firestore Database, and Cloud Storage for the Vices app.

## Prerequisites

- Firebase account (https://firebase.google.com)
- Node.js 16+

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Create Project"
3. Enter project name: `vices` (or your preferred name)
4. Choose your region
5. Click "Create Project"

## Step 2: Enable Authentication

1. In Firebase Console, go to **Authentication** (left sidebar)
2. Click **Get Started**
3. Select **Email/Password** provider
4. Toggle "Enable" and save
5. Go to **Settings** > **Users and Permissions** and note your Project ID

## Step 3: Enable Firestore Database

1. In Firebase Console, go to **Firestore Database** (left sidebar)
2. Click **Create Database**
3. Choose region (same as project)
4. Start in **Production Mode** (we'll set security rules below)
5. Click **Enable**

### Firestore Security Rules

Replace the default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow authenticated users to read/write their own documents
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
    }
    
    // Allow authenticated users to create logs
    match /users/{userId}/logs/{logId} {
      allow read, write: if request.auth.uid == userId;
    }
    
    // Allow all users to read substances (public)
    match /substances/{substanceId} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```

## Step 4: Enable Cloud Storage

1. In Firebase Console, go to **Cloud Storage** (left sidebar)
2. Click **Get Started**
3. Choose region (same as project)
4. Click **Done**

### Cloud Storage Security Rules

Replace the default rules with:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Allow authenticated users to upload/read their own files
    match /users/{userId}/{allPaths=**} {
      allow read, write: if request.auth.uid == userId;
    }
    
    // Allow public read access to logs
    match /logs/{logId}/{allPaths=**} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```

## Step 5: Get Firebase Credentials

1. In Firebase Console, go to **Settings** (gear icon) > **Project Settings**
2. Scroll to **Your Apps** section
3. Click **Web** icon (or create new if needed)
4. Copy the Firebase configuration

You'll see something like:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "vices-xxxxx.firebaseapp.com",
  projectId: "vices-xxxxx",
  storageBucket: "vices-xxxxx.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef..."
};
```

## Step 6: Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in the values from Step 5:
   ```
   REACT_APP_FIREBASE_API_KEY=AIzaSy...
   REACT_APP_FIREBASE_AUTH_DOMAIN=vices-xxxxx.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=vices-xxxxx
   REACT_APP_FIREBASE_STORAGE_BUCKET=vices-xxxxx.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=123456789
   REACT_APP_FIREBASE_APP_ID=1:123456789:web:abcdef...
   ```

3. **Important**: Never commit `.env.local` to git (it's in .gitignore)

## Step 7: Test the Setup

1. Start the dev server:
   ```bash
   npm run dev
   ```

2. Navigate to http://localhost:5173/signup

3. Create a test account

4. Check Firebase Console > Authentication to see your user

## Database Schema

### Users Collection
```
/users/{userId}
  - email: string
  - displayName: string
  - createdAt: timestamp
  - updatedAt: timestamp
  - stats: {
      totalMoments: number,
      topSubstance: string,
      topMood: string
    }
```

### Logs Sub-collection
```
/users/{userId}/logs/{logId}
  - substanceId: string
  - timestamp: timestamp
  - caption: string
  - mood: string
  - rating: number (1-5)
  - location: {
      name: string,
      lat: number,
      lng: number
    }
  - friendsTagged: array of strings
  - visibility: "public" | "private"
  - media: array of URLs
```

### Substances Collection (Read-only, pre-populated)
The substances database can be imported from `src/data/substances.js`

## Troubleshooting

### "Cannot read properties of undefined (reading 'uid')"
- Check that `.env.local` is created and has all Firebase variables
- Restart the dev server after updating `.env.local`

### "Permission denied" errors
- Check Firestore/Storage security rules above
- Ensure user is authenticated (check Console in DevTools)
- Verify user UID matches in security rules

### Images not uploading
- Check Cloud Storage is enabled
- Verify security rules allow authenticated uploads
- Check browser console for upload errors

### Infinite loading on protected routes
- Verify Firebase config is correct
- Check browser DevTools > Network for failed requests
- Ensure AuthProvider wraps entire app

## Production Deployment

When deploying to Vercel:

1. Add environment variables in Vercel dashboard:
   - Go to Project Settings > Environment Variables
   - Add all REACT_APP_FIREBASE_* variables
   - Redeploy project

2. Update Firebase allowed domains:
   - Firebase Console > Authentication > Authorized Domains
   - Add your Vercel domain (e.g., vices-app.vercel.app)

3. Enable CORS for Firestore API:
   - No additional setup needed (handled by Firebase)

## Additional Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Auth Guide](https://firebase.google.com/docs/auth)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)
- [Cloud Storage Guide](https://firebase.google.com/docs/storage)
