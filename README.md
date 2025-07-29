# RblxAuth©

Welcome to **RblxAuth©**, your new favorite way to verify Roblox users across any website.  
This system uses a central Roblox game to authenticate users, generate verification codes, and allow third-party sites to confirm user identity.

## 🔐 What is it?

A universal Roblox authentication system with:

- Shared backend (Node.js)
- Zone-based verification (each app gets a `zoneId`)
- Secure token exchange via `.well-known/rblxauth`
- Centralized game experience for code verification
- Extensible OAuth-style flow
- JSON API for clean, filtered responses

## 🎯 Goals

- Fully open-source and self-hostable
- Plug-and-play support for any Roblox-linked app
- Easy integration with OAuth 2.0 or guest flows
- Securely identify users without needing their password

## 📦 Components

- `backend/` — the verification server and API logic
- `roblox/` — the central game logic (coming soon)
- `docs/` — API specs and implementation guide (planned)
- `web-demo/` — demo web app (optional)

## 🚀 Status

> Currently building core infrastructure. Game and web integrations coming next.

---

Made with ❤️, TypeScript, and way too much coffee.
