# 202608

React + Vite version of the portfolio site. All content lives in one file
(`src/data.js`) — you shouldn't need to touch any component to make routine
updates.

## 1. Add your images

Your original repo had a `profile/` folder with `profile1.jpeg` and
`bg1.jpeg`. Copy that folder into `public/profile/` here:

```
202608/
└── public/
    └── profile/
        ├── profile1.jpeg
        └── bg1.jpeg
```

Vite serves everything in `public/` from the site root, which is why
`src/data.js` points `photo` to `/profile/profile1.jpeg`.

## 2. Install and run locally

```
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## 3. Edit your content

Open `src/data.js`:

- `IDENTITY` — name, role, photo, contact links
- `SKILLS` — the pill list
- `EXPERIENCE` — one object per job, with `bullets` and `tags`
- `CATEGORIES` / `PROJECTS` — add a project by adding an object to
  `PROJECTS`; it can list more than one category and will automatically
  show up under each matching filter
- `EDUCATION` — degrees/certifications

## 4. Build for production

```
npm run build
```

Outputs static files to `dist/`.

## 5. Deploy to GitHub Pages

`vite.config.js` is already set with `base: '/202608/'` to match
this repo name, so links resolve correctly once deployed.

```
npm run deploy
```

This runs `gh-pages -d dist` (already wired up in `package.json`) and
publishes the `dist/` folder to a `gh-pages` branch. Then in your repo's
Settings → Pages, set the source to the `gh-pages` branch. Your site will be
live at `https://<your-username>.github.io/202608/`.

## Project structure

```
src/
├── data.js              ← edit this for content changes
├── App.jsx               assembles the page, wires up scroll-spy nav
├── index.css             all styling
├── hooks/
│   └── useScrollSpy.js   tracks which section is in view
└── components/
    ├── Banner.jsx
    ├── Identity.jsx
    ├── Nav.jsx            SideNav (desktop) + TopNav (mobile)
    ├── Skills.jsx
    ├── Experience.jsx
    ├── Projects.jsx       filter chips + project grid
    ├── Education.jsx
    └── Footer.jsx
```
