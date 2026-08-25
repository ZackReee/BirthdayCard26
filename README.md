# Purple Magical Birthday Card 💜

A single-page interactive birthday card made with only HTML, CSS, and JavaScript.

## Files

- `index.html` — page structure
- `style.css` — all visuals, responsive layout, envelope animation and particles
- `script.js` — card opening, magical particles and optional synthesized music
- `assets/` — optional place for future offline images or music

## Customize

Edit `index.html` and change:

1. `Beautiful!` to her name.
2. The main birthday message.
3. `someone who thinks you’re wonderful ♡` to your name.

The current version deliberately uses CSS-generated scenery and synthesized music, so it has no required external image or audio assets.

## Preview locally

Double-click `index.html` or open it in any modern browser.

## Deploy to GitHub Pages

1. Create a GitHub repository named `birthday-card`.
2. Upload all files while keeping the folder structure.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Save.

Your website should be available at:

`https://yourusername.github.io/birthday-card/`

## Offline preservation

The site is self-contained. Download the entire folder and open `index.html`.

Note: the CSS currently imports two optional Google fonts. If the browser has no internet, it will automatically fall back to local system fonts. For fully offline custom typography, download font files and place them in `assets/fonts/`, then replace the `@import` line with local `@font-face` rules.
