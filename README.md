# Personal Portfolio

Source code for my personal portfolio website, built with Astro.

Live site: https://rayenelfaleh.github.io

## Content and CVs

English is served at `/`, French at `/fr/`. Both versions use
`src/data/content.ts`; the shared page is `src/components/Portfolio.astro`.
Selected work appears before the skills inventory, with direct links to the
published lab reports. The internship project is described separately from
training exercises.

- French CV: `public/CV_Rayen_Faleh.pdf` (keep this filename for existing links).
- English CV: `public/CV_Rayen_Faleh_EN.pdf`.
- The write-up count describes published documents, not platform scores.
  Check the linked repository before updating it.

Run `npm ci` and `npm run build` to verify both language routes and copy the
CVs into the static output before publishing.

## Tech Stack

* **Framework:** Astro
* **Language:** TypeScript
* **Styling:** CSS
* **Deployment:** GitHub Pages (GitHub Actions)

## Local Development

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/rayenelfaleh/rayenelfaleh.github.io.git

# Navigate into the directory
cd rayenelfaleh.github.io

# Install dependencies
npm install

# Start the local dev server
npm run dev
```
