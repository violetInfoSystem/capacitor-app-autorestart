# Capacitor App AutoRestart (Android Only)

This plugin allows your Capacitor Android app to restart automatically if killed (swipe or OS).

## Install

```bash
npm install @violetinfosystems/capacitor-app-autorestart
npx cap sync
```

## Usage

```ts
import { AppAutoRestart } from '@violetinfosystems/capacitor-app-autorestart';

// Enable auto-restart
await AppAutoRestart.enableAutoRestart();
```

> Only works on Android. iOS does not allow auto-restart after swipe kill.