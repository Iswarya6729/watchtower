# WatchTower

Track only the market changes that deserve your attention.

## Overview

Traditional watchlists answer:

> "What is happening right now?"

WatchTower answers:

> "What changed since I was last here and what deserves my attention?"

Instead of forcing investors to manually scan every stock in a watchlist, WatchTower highlights only the events that matter and explains why they matter.

---

## Problem

Investors often revisit their watchlists after hours or days.

Traditional watchlists require users to manually compare prices, volume, and movements across multiple stocks to understand what changed.

This creates information overload and makes it easy to miss meaningful market events.

---

## Solution

WatchTower provides an attention-focused experience that surfaces the most important changes since a user's last visit.

The platform prioritizes significant events, explains why they matter, and helps users quickly understand what deserves attention.

---

## Features

### Attention-First Dashboard
Highlights only meaningful changes instead of displaying raw market data.

### Meaningful Change Detection
Identifies notable price movements and unusual activity.

### Last Visit Tracking
Remembers when a user last visited the dashboard.

### Time-Away Awareness
Shows how long the user was away from the platform.

### Explainable Alerts
Every event includes a reason explaining why it appears in the feed.

### Volume Spike Detection
Detects unusual trading activity using volume-based rules.

### Attention Score
Provides a quick summary of how much attention the watchlist requires.

### Market Overview
Displays a compact snapshot of monitored stocks.

### Persistent Watchlists
Watchlists remain saved between sessions using local storage.

---

## User Flow

```text
Open Application
        ↓
View Watchlist
        ↓
See Last Visit Information
        ↓
Review Attention Summary
        ↓
Check Meaningful Changes Feed
        ↓
Understand Why Events Matter
```

---

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Local Storage

---

## Key Screens

- Dashboard Overview
- Attention Summary
- Market Overview
- Meaningful Changes Feed
- Persistent Watchlist Management

---

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---
## Design Decisions

### What is a Meaningful Change?

WatchTower intentionally does not show every market movement.

A meaningful change is defined as:

- Price movement greater than 5%
- Major price movement greater than 7%
- Trading volume more than 2× the usual level

These events are surfaced because they are more likely to require user attention than normal market fluctuations.

### Why Track Last Visit?

Traditional watchlists assume users continuously monitor markets.

WatchTower assumes users leave and return.

Instead of showing everything, it answers:

> "What changed while I was away?"

### Why Explain Every Event?

Every alert includes an explanation.

This improves transparency and helps users understand why the system considers an event important.

### Persistence Strategy

Watchlists and visit information are stored locally to provide a simple, fast experience without requiring user accounts.

The architecture can be extended to PostgreSQL for multi-device synchronization.

## Future Improvements

- Live market data integration
- Real-time event detection
- Portfolio awareness
- Smart notification system
- PostgreSQL persistence
- Advanced attention scoring
- Personalized event prioritization

---

## Project Vision

WatchTower is designed around a simple principle:

> Investors should spend less time searching for important information and more time understanding what actually matters.

By focusing on meaningful change detection instead of raw market monitoring, WatchTower helps investors quickly identify events that deserve attention and take action with confidence.

---

## Author

Built for the Groww Full Stack Challenge.

WatchTower reimagines the traditional watchlist experience by answering a simple but powerful question:

> "What changed since my last visit, and what should I care about?"