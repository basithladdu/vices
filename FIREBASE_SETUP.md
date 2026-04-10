# Firebase Setup

You need to wire up Firebase for auth and storage to work. This is a one-time setup.

**What you need:**
- A Google account
- ~15 minutes
- The credentials you'll get to paste into `.env.local`

## 1. Create a Firebase Project

Go to [firebase.google.com](https://firebase.google.com) and click "Create Project".

Name it `vices`. Choose your region (closest to users is fine). Click "Create".

Wait ~5 minutes for it to finish.

## 2. Turn On Email/Password Authentication

In the Firebase console (left sidebar):

1. Click **Authentication**
2. Click **Get Started**
3. Click **Email/Password**
4. Toggle "Enable"
5. Save

You're done with auth.

## 3. Create Firestore Database

Left sidebar → **Firestore Database** → **Create Database**

Choose same region as project. Start in **Production Mode** (you'll add security rules in a second). Click **Enable**.

Wait for it to initialize (~2 minutes).

Then **Replace the default security rules** with:

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

## 4. Set Up Cloud Storage

Left sidebar → **Cloud Storage** → **Get Started**

Same region. Click **Done**.

Then **Replace the security rules** with:

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

## 5. Get Your Credentials

Settings (gear icon) → **Project Settings** → scroll to **Your apps**

Click the **Web** icon. You'll see something like:

```
apiKey: "AIzaSy..."
authDomain: "vices-xxxxx.firebaseapp.com"
projectId: "vices-xxxxx"
storageBucket: "vices-xxxxx.appspot.com"
messagingSenderId: "123456789"
appId: "1:123456789:web:..."
```

Copy all these values.

## 6. Add to Your Project

Create `.env.local` in your project root (same folder as `src/`):

```bash
cp .env.example .env.local
```

Then edit `.env.local` and paste:

```
REACT_APP_FIREBASE_API_KEY=AIzaSy...
REACT_APP_FIREBASE_AUTH_DOMAIN=vices-xxxxx.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=vices-xxxxx
REACT_APP_FIREBASE_STORAGE_BUCKET=vices-xxxxx.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=123456789
REACT_APP_FIREBASE_APP_ID=1:123456789:web:...
```

**⚠️ Never commit `.env.local`** — it has secrets. Git will ignore it automatically.

## 7. Test It

```bash
npm run dev
```

Go to http://localhost:5173/signup and create an account. You should see yourself appear in Firebase Console → Authentication.

## What Gets Stored

The app creates this structure in Firestore:

```
/users/{userId}                    → Your profile
  /logs/{logId}                    → Your logged moments
    substanceId, mood, rating, caption, etc
```

All logs are private by default (only you can read them).

Images go to Cloud Storage under `/users/{userId}/`.

## Troubleshooting

**"Cannot read uid"**
- Did you create `.env.local`? If you just edited `.env.example`, it won't work.
- Restart `npm run dev` after creating `.env.local`
- Check that all 6 variables are in `.env.local`

**Signup/login page stuck on loading**
- Check browser DevTools → Network. Any failed requests?
- Open DevTools → Console. Any error messages?
- Verify your Firebase credentials are correct (copy-paste from console again)

**"Permission denied" on Firestore**
- Your security rules might be wrong. Go to Firestore → Rules
- Paste the rules from step 3 above
- Click Publish
- Wait 30 seconds and refresh

**Image upload fails**
- Check Cloud Storage is turned on (step 4)
- Make sure your storage rules are in place
- Check browser console for the exact error

**Page keeps redirecting to login**
- AuthProvider might not be wrapping the app. Check `src/App.jsx`
- Verify `localStorage` isn't disabled in your browser

## Production (Vercel)

When you deploy to Vercel:

1. Add env vars: Settings → Environment Variables
   - Add the 6 Firebase variables
   - Redeploy
   
2. Whitelist your domain in Firebase:
   - Authentication → Settings → Authorized domains
   - Add `vices-app.vercel.app` (or whatever Vercel gives you)

That's it. Firebase handles CORS automatically.

## Learn More

- [Firebase docs](https://firebase.google.com/docs)
- [Firestore guide](https://firebase.google.com/docs/firestore)
- [Cloud Storage guide](https://firebase.google.com/docs/storage)
