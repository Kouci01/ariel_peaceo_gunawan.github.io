# Ariel Peaceo Gunawan — Portfolio

A responsive static portfolio built with HTML, CSS, and vanilla JavaScript. Designed for GitHub Pages.

## Preview locally
Open `index.html` in a browser. No build tools or dependencies required.

## Deploy using GitHub Pages
1. Create/sign in to your GitHub account.
2. Click **New repository**. Recommended repository name: `arielpeaceogunawan.github.io` (replace with your actual GitHub username).
3. Set the repository to **Public** and create it.
4. Upload the files in this folder (`index.html`, `style.css`, `script.js`, and `README.md`) to the repository root. Do not upload the ZIP itself as the website source.
   - Quick option: repository page → **Add file** → **Upload files** → drag the files → **Commit changes**.
   - Or use Git:
     ```bash
     git init
     git add .
     git commit -m "Create personal portfolio"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
     git push -u origin main
     ```
5. In repository **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then click **Save**. For the special repository `YOUR_USERNAME.github.io`, Pages may be enabled automatically.
6. Wait for the deployment workflow to finish. Visit `https://YOUR_USERNAME.github.io/`. If using a regular repository named `portfolio`, the URL is typically `https://YOUR_USERNAME.github.io/portfolio/`.
7. After updates, commit/push the changes. GitHub Pages redeploys automatically.

## Personalize before publishing
- LinkedIn profile is linked at `https://www.linkedin.com/in/ariel-peaceo-gunawan/`. Review profile details before publishing any future changes.
- Confirm the email address you want public.
- Project descriptions and career details have been aligned with the public LinkedIn profile reviewed on 7 November 2026. Recheck dates and wording before publishing.
- Optional: add a downloadable CV, GitHub profile link, and original portfolio project repositories.
- Project descriptions are intentionally high-level. Do not publish bank/customer data, production screenshots, internal source code, infrastructure details, credentials, or confidential architecture. Product names are used only to identify professional project experience. The portfolio uses typographic brand-inspired treatments rather than copied official logo artwork; it is not an endorsement or official affiliation.
- Performance metrics are based on the CV and are described as past experience, not live service indicators.


## Downloadable CV

The portfolio includes `assets/Ariel_Peaceo_Gunawan_CV.pdf`. The navigation and hero section link directly to this PDF using a relative path, so it works when deployed with the rest of the GitHub Pages repository.
