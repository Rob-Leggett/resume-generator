# 📝 resume-generator

A modern, themeable, authenticated resume generator built with **Next.js**, **TypeScript**, **Auth0**, and modular React components.

## 🌐 Overview

This project enables authenticated users to view and manage a dynamic, printable resume interface. It includes:

- Modular sections (Experiences, Skills, Education, etc.)
- Theme switching support (`next-themes`)
- User profile data from Auth0 metadata
- Print-ready CSS with per-medium customisation
- Protected routes using Auth0 authentication

---

## 🚀 Build & Run

### 🧪 Local Development

Install dependencies and run in development mode:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

### 🏗️ Build for Production

```bash
npm run build
npm start
```

This will start the app in production mode after building with next build.

---

## 🔐 Auth0 Integration

The app uses @auth0/auth0-react for authentication. Configuration is handled via src/config/constants.ts:

```ts
const configuration = {
  auth0: {
    domain: "dev-alcmh6jt.us.auth0.com",
    clientId: "TGYJ54RuHuaQ66PAE02W7EROpGzyE4KV",
    audience: "https://dev-alcmh6jt.us.auth0.com/api/v2/",
    scopes: "profile email read:current_user"
  }
}
```

Manage the Auth0 tenant via the Auth0 dashboard.

Make sure to set your Allowed Callback URLs and Logout URLs to: http://localhost:3000

---

## 🧪 Testing Print Styles in Chrome

To preview how your resume will appear when printed:
1.	Open your app in Chrome at http://localhost:3000
2.	Press Cmd + P (macOS) or Ctrl + P (Windows)
3.	In the print preview window:
•	Change the destination to “Save as PDF” or your printer
•	Set margins to “None” or “Custom”
•	Toggle Background graphics if your theme uses background colours
•	Click “More settings” and select appropriate scale

To Test with DevTools
1.	Right-click → Inspect Element
2.	Open Command Palette (Cmd + Shift + P / Ctrl + Shift + P)
3.	Type “Rendering” → Select “Show rendering”
4.	In the “Rendering” tab below, under Emulate CSS media, choose print

This forces the @media print styles to render in your browser without triggering the print dialog.

---

## 🧩 Component Structure

All sections are in components/, structured into modular units:
•	Authentication.tsx – handles login/logout via Auth0
•	Banner.tsx – layout header containing auth + theme switcher
•	Panel.tsx – reusable panel container
•	ThemeChanger.tsx – dropdown for toggling themes
•	Summary, Experiences, Skills, Education, Certifications – each render a portion of the resume
•	Profile.tsx – pulls user metadata (GitHub, LinkedIn, etc.) from Auth0
•	Name.tsx – renders the logged-in user’s name

Print styling is defined in styles/globals.css and individual Component.module.css files.

---

## 📁 File Structure

```
resume-generator/
├── components/              # React component modules
├── pages/                   # Next.js routes
├── public/                  # Static assets
├── src/config/              # Constants and content config (resume data, Auth0)
├── styles/                  # Global and module CSS
├── tsconfig.json
├── package.json
└── README.md
```

## 📦 Dependencies

Key packages include:
•	next, react, react-dom – core framework and rendering
•	@auth0/auth0-react – authentication
•	next-themes – theme switching
•	react-icons – icon support
•	@testing-library/* – test support (placeholder; tests not implemented)

