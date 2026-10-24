# resume-generator

[![CI](https://github.com/Rob-Leggett/resume-generator/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Rob-Leggett/resume-generator/actions/workflows/ci.yml) [![License](https://img.shields.io/github/license/Rob-Leggett/resume-generator)](LICENSE) [![Node.js 26](https://img.shields.io/badge/Node.js-26-5FA04E?logo=nodedotjs&logoColor=white)](https://nodejs.org/) [![Next.js 16.4](https://img.shields.io/badge/Next.js-16.4-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/) [![React 19.3](https://img.shields.io/badge/React-19.3-61DAFB?logo=react&logoColor=white)](https://react.dev/) [![TypeScript 6.0](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

A modern, themeable, authenticated resume generator built with Next.js, TypeScript, Auth0, and modular React components.

## Overview

This project enables authenticated users to view and manage a dynamic, printable resume interface. It includes:

- Multiple Themes -- Switch between Modern, Classic, Minimal, and Dark themes
- Template System -- Swap resume data via JSON templates
- Modular Sections -- Experiences, Skills, Education, Certifications, Achievements, and more
- User Authentication -- Profile data sourced from Auth0 metadata
- Print-Ready CSS -- Optimised print styles for a 2-page A4 PDF export
- Semantic Versioning -- Automated releases with conventional commits

---

## Build and Run

### Local Development

Requires **Node.js 26** (see `.nvmrc`; `nvm use`) and npm 11. Install scripts are
restricted via `allowScripts` in `package.json` (none are needed; prebuilt binaries are used).

Install dependencies and run in development mode:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Running Tests

```bash
npm test                 # Run all tests
npm run test:watch       # Watch mode
npm run test:coverage    # With coverage report
```

---

## Theming

The application supports multiple themes that can be switched at runtime:

| Theme | Description |
|-------|-------------|
| **Modern** | Clean, contemporary design with Arial fonts |
| **Classic** | Traditional serif fonts with warm tones |
| **Minimal** | Ultra-clean, borderless design |
| **Dark** | Dark mode for reduced eye strain |

### Creating a Custom Theme

1. Edit `themes/definitions.ts`
2. Add a new theme object following the `ThemeDefinition` interface:

```typescript
customTheme: {
  name: 'customTheme',
  displayName: 'My Custom Theme',
  colors: {
    primary: '#000000',
    secondary: '#666666',
    background: '#ffffff',
    // ... other colors
  },
  typography: {
    fontFamily: 'Your Font, sans-serif',
    fontFamilyHeading: 'Your Heading Font, sans-serif',
    baseFontSize: '16px',
    headingScale: 1.25,
  },
  spacing: {
    unit: '8px',
    panelPadding: '20px',
    sectionGap: '16px',
  },
  borderRadius: '8px',
}
```

---

## Templates

Resume data is stored in JSON templates, making it easy to create and switch between different resume versions.

### Template Structure

Templates are stored in the `templates/` directory:

```
templates/
├── default.json    # Main resume data
└── example.json    # Example template
```

### Creating a New Template

1. Create a new JSON file in `templates/`
2. Follow the schema in `src/types/resume.ts`:

```json
{
  "profile": {
    "name": "Your Name",
    "email": "email@example.com",
    "mobile": "+1 555-123-4567",
    "website": "https://yoursite.com",
    "github": "https://github.com/username",
    "linkedin": "https://linkedin.com/in/username"
  },
  "summary": ["Professional summary paragraph 1", "..."],
  "experiences": [
    {
      "role": "Job Title",
      "period": "2020 – Present",
      "company": "Company Name",
      "description": ["Achievement 1", "Achievement 2"]
    }
  ],
  "skills": [{ "type": "Category", "description": "Skill list" }],
  "education": [{ "school": "University", "name": "Degree", "date": "Year" }],
  "certifications": [{ "name": "Cert Name", "date": "Date", "badgeUrl": "URL" }],
  "achievements": [{ "name": "Achievement", "description": "Details" }]
}
```

3. Add the template name to `AVAILABLE_TEMPLATES` in `src/contexts/ResumeDataContext.tsx`

---

## Auth0 Integration

The app uses `@auth0/auth0-react` for authentication. Configuration is in `src/config/constants.ts`:

```ts
const configuration = {
  auth0: {
    domain: "your-domain.auth0.com",
    clientId: "YOUR_CLIENT_ID",
    audience: "https://your-domain.auth0.com/api/v2/",
    scopes: "profile email read:current_user"
  }
}
```

### Setup

1. Create an Auth0 account and application
2. Set Allowed Callback URLs and Logout URLs to `http://localhost:3000`
3. Update the configuration with your Auth0 credentials

---

## Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/) for automated versioning.

### Commit Message Format

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

| Type | Description | Version Bump |
|------|-------------|--------------|
| `feat` | New feature | Minor |
| `fix` | Bug fix | Patch |
| `docs` | Documentation only | None |
| `style` | Code style (formatting) | None |
| `refactor` | Code refactoring | None |
| `perf` | Performance improvement | Patch |
| `test` | Adding tests | None |
| `build` | Build system changes | None |
| `ci` | CI configuration | None |
| `chore` | Other changes | None |
| `revert` | Revert a commit | Depends |

### Examples

```bash
feat(themes): add new corporate theme
fix(auth): resolve login redirect issue
docs(readme): update installation instructions
```

---

## PDF Export

The Export PDF button uses the browser's built-in print functionality (`window.print()`). The print styles in `styles/globals.css` are optimised to produce a compact 2-page A4 PDF.

To preview how your resume will appear when printed:

1. Open the app in Chrome at http://localhost:3000
2. Press Cmd + P (macOS) or Ctrl + P (Windows)
3. In the print preview window:
   - Set destination to "Save as PDF" or your printer
   - Set margins to "None" or "Custom"
   - Enable "Background graphics" if your theme uses background colours

### Testing Print Styles with DevTools

1. Right-click the page and select Inspect
2. Open the Command Palette (Cmd + Shift + P / Ctrl + Shift + P)
3. Type "Rendering" and select "Show rendering"
4. Under "Emulate CSS media", choose `print`

---

## Component Structure

All sections are in `components/`, structured into modular units:

| Component | Purpose |
|-----------|---------|
| `Authentication` | Login/logout via Auth0 |
| `Banner` | Layout header with auth and theme switcher |
| `ExportPDF` | PDF export button (browser print) |
| `Panel` | Reusable panel container |
| `ThemeChanger` | Dropdown for toggling themes |
| `TemplateChanger` | Dropdown for switching templates |
| `Name` | Displays the user's name |
| `Summary` | Professional summary section |
| `Experiences` | Work experience timeline |
| `Profile` | Contact information with icons |
| `Certifications` | Professional certifications with badge links |
| `Achievements` | Key career achievements |
| `Skills` | Skills categorised by type |
| `Education` | Educational background |
| `Icons` | Icon rendering utility for react-icons |

---

## File Structure

```
resume-generator/
├── .github/workflows/       # CI workflow (build, test, release)
├── .husky/                  # Git hooks (lint, commitlint)
├── __tests__/               # Unit tests
│   ├── components/          # Component tests
│   ├── contexts/            # Context tests
│   └── utils/               # Utility tests
├── components/              # React component modules
├── pages/                   # Next.js routes
├── public/                  # Static assets
├── src/
│   ├── config/              # Constants and Auth0 config
│   ├── contexts/            # React contexts (Theme, Data)
│   └── types/               # TypeScript type definitions
├── styles/                  # Global CSS with CSS variables
├── templates/               # Resume data templates (JSON)
├── themes/                  # Theme definitions
├── .releaserc.json          # Semantic release config
├── commitlint.config.js     # Commit message linting
├── eslint.config.mjs        # ESLint configuration
├── jest.config.ts           # Jest configuration
├── tsconfig.json            # TypeScript configuration
├── package.json
└── README.md
```

---

## Dependencies

### Core
- `next`, `react`, `react-dom` -- Framework and rendering
- `@auth0/auth0-react` -- Authentication
- `next-themes` -- Theme switching
- `react-icons` -- Icon support
- `typescript` -- Type checking

### Development
- `jest`, `@testing-library/react` -- Testing
- `semantic-release` -- Automated releases (run on demand via `npm run semantic-release`, which uses pinned `npx` packages so its bundled npm is not part of the project's dependency tree)
- `@commitlint/cli` -- Commit linting
- `husky` -- Git hooks
- `eslint`, `eslint-config-next` -- Linting

---

## CI/CD

### GitHub Actions Workflows

- **CI** (`ci.yml`): Runs on PRs and pushes to `main` (documentation-only changes are skipped;
  superseded PR runs are cancelled; every job has a timeout)
  - Commit message validation (PRs only)
  - Linting
  - Building
  - Testing
  - **Release** job (pushes to `main` only, after build and tests pass):
    creates GitHub releases with changelog and updates the version in package.json

---

## License

MIT License -- see [LICENSE](LICENSE) for details.
