# Publishing the Webora Landing Page

Follow these steps to put the site live.

---

## 1. Push your code

Make sure everything is committed and pushed to your Git host (GitHub, GitLab, or Bitbucket):

```bash
git add .
git status
git commit -m "chore: ready for production"
git push origin main
```

(Use your real branch name if it’s not `main`.)

---

## 2. Deploy (recommended: Vercel)

**Vercel** is the simplest option for Next.js and gives you a free HTTPS URL.

1. Go to [vercel.com](https://vercel.com) and sign in (e.g. with GitHub).
2. Click **Add New… → Project**.
3. Import your repo: **klijent-1-landing** (or the repo name you use).
4. Leave the defaults:
   - **Framework Preset:** Next.js  
   - **Build Command:** `npm run build`  
   - **Output Directory:** (default)  
   - **Install Command:** `npm install`
5. Click **Deploy**.
6. When it finishes, you get a URL like `https://klijent-1-landing-xxx.vercel.app`.

Each new push to `main` will trigger a new deployment automatically.

---

## 3. Optional: custom domain

- In the Vercel project: **Settings → Domains**.
- Add your domain (e.g. `webora.ba` or `www.webora.ba`).
- Follow the instructions to add the DNS records at your registrar (A/CNAME as shown by Vercel).  
  Vercel will issue and renew SSL (HTTPS) for you.

---

## 4. Bilingual page URL

- **Main app (Next.js):** `https://your-domain.com/`
- **Bilingual static page:** `https://your-domain.com/webora-final-bilingual.html`  
  (It’s in `public/`, so it’s served at that path.)

---

## 5. Other hosts

- **Netlify:** Import the repo and enable **Next.js** in the build settings (Netlify will set build command and publish directory automatically).
- **VPS / shared hosting:** Install Node 18+, run `npm run build` then `npm run start`, and put a reverse proxy (e.g. Nginx) in front of the app on the port Next uses (default 3000).

---

## Quick checklist

- [ ] Code pushed to Git
- [ ] Project connected on Vercel (or chosen host)
- [ ] Build succeeds (you can run `npm run build` locally to confirm)
- [ ] Live URL works: `/` and `/webora-final-bilingual.html`
- [ ] (Optional) Custom domain and DNS configured
