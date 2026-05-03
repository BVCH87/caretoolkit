# Deploying Care Toolkit — Step by Step

This guide assumes zero coding experience. Follow each step in order. Where a step says "click X", just click that button — don't worry about what it does.

Estimated total time: **45-60 minutes**, including domain registration.

---

## Step 1: Buy your domain (~£10, 5 minutes)

1. Go to **https://www.cloudflare.com/products/registrar/**
2. Sign up for a free Cloudflare account if you don't have one
3. Search for `caretoolkit.co.uk`
4. If available, buy it (Cloudflare sells at wholesale price — usually £8-10/year for `.co.uk`)
5. If taken, try alternatives: `carehub.co.uk`, `familycarehub.co.uk`, `caringfor.co.uk`

Once bought, the domain is in your Cloudflare account. We'll connect it to the site in Step 5.

---

## Step 2: Create a GitHub account (5 minutes)

1. Go to **https://github.com/signup**
2. Sign up with your email — pick a sensible username (you'll see it in URLs)
3. Verify your email
4. Skip the "tell us about yourself" questionnaire

---

## Step 3: Upload the site to GitHub (10 minutes)

The easiest way without using the command line:

1. In GitHub, click the **"+"** in the top-right corner → **"New repository"**
2. Repository name: `caretoolkit`
3. Set to **Public**
4. Tick **"Add a README file"**
5. Click **"Create repository"**

Now upload the files:

6. On your new repo page, click **"Add file"** → **"Upload files"**
7. Drag the **entire contents** of the `caretoolkit` folder I built you (not the folder itself — the files and subfolders inside it) into the upload area
8. Wait for them all to upload (the bar at the bottom will fill up)
9. Scroll down, write a commit message like "Initial site upload"
10. Click **"Commit changes"**

Your repo should now show:
- index.html
- 404.html
- sitemap.xml
- robots.txt
- README.md
- about/, contact/, privacy/, care-home-cost-calculator/, assets/ folders

---

## Step 4: Deploy with Cloudflare Pages (10 minutes)

1. In Cloudflare, go to **Workers & Pages** in the left sidebar
2. Click **"Create application"** → **"Pages"** tab → **"Connect to Git"**
3. Click **"Connect GitHub"** and authorise Cloudflare to access your account
4. Select the `caretoolkit` repository
5. Click **"Begin setup"**
6. Project name: `caretoolkit`
7. Production branch: `main`
8. Build settings: **leave everything blank** — there's no build step
9. Click **"Save and Deploy"**

Wait 30-60 seconds. You'll see a URL like `caretoolkit.pages.dev`. **Open it.** Your site is live.

---

## Step 5: Connect your custom domain (5 minutes)

1. In your Cloudflare Pages dashboard, click your `caretoolkit` project
2. Click **"Custom domains"** tab → **"Set up a custom domain"**
3. Enter `caretoolkit.co.uk` → **Continue** → **Activate domain**
4. Because the domain is already in your Cloudflare account, the DNS records are added automatically
5. Wait 1-5 minutes — your site will then be live at `https://caretoolkit.co.uk`

You'll also want the `www` version:

6. Repeat the steps with `www.caretoolkit.co.uk`

HTTPS is automatic. You don't need to buy an SSL certificate.

---

## Step 6: Submit to Google Search Console (10 minutes)

This is what gets your site indexed by Google.

1. Go to **https://search.google.com/search-console**
2. Sign in with a Google account
3. Click **"Add property"** → choose **"URL prefix"** → enter `https://caretoolkit.co.uk`
4. Google will give you a verification meta tag that looks like:
   `<meta name="google-site-verification" content="abc123xyz...">`
5. Copy that whole line
6. In your GitHub repo, open `index.html` (and only the homepage) — click the pencil icon to edit
7. Find this line near the top:
   `<!-- <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE"> -->`
8. Replace the entire commented line with the real meta tag from Google (no `<!-- -->` around it)
9. Scroll down → **"Commit changes"**
10. Wait 1-2 minutes for Cloudflare to redeploy
11. Back in Google Search Console, click **"Verify"**

Once verified:

12. In the left sidebar, click **"Sitemaps"**
13. Enter `sitemap.xml` → **Submit**

Google will now start crawling your site. It can take 24-72 hours for pages to appear in search.

---

## Step 7: Set up your contact email (5 minutes)

You need `hello@caretoolkit.co.uk` to work.

1. In Cloudflare, go to your domain → **Email** → **Email Routing**
2. Click **"Get Started"** → it sets up DNS automatically
3. Add a custom address: `hello@caretoolkit.co.uk` → forwards to your real Gmail/Outlook
4. Verify your destination email
5. Test by sending an email to `hello@caretoolkit.co.uk` from another account — it should arrive in your real inbox

This is free.

---

## Step 8: Wait, then apply for AdSense

**Don't apply immediately.** AdSense will reject a brand-new empty site.

Before applying, you need:
- ✅ Site live on a custom domain (you have this)
- ✅ Privacy policy, About, Contact pages (you have these)
- ✅ Cookie consent banner (you have this)
- ⏳ At least 4 working tools (you have 1 — build 3 more)
- ⏳ A handful of indexed pages on Google (Search Console will show you)
- ⏳ Site has been live and indexed for 2-4 weeks

Realistic timeline: build the next 3 tools over 2 weeks, then wait 2-4 weeks for indexing, then apply.

When you're ready:

1. Go to **https://www.google.com/adsense/start/**
2. Sign in with a Google account
3. Add `caretoolkit.co.uk` as your site
4. AdSense will give you a script tag — paste it into `assets/js/shared.js` where indicated (uncomment the AdSense block, replace `ca-pub-XXXXXXXXXXXXXXXX` with your real ID)
5. Submit for review
6. Approval takes 1-14 days

If rejected, the email tells you why. The most common reason is "insufficient content" — fix it by adding more tools and longer content, then reapply. There's no penalty.

---

## Step 9: Switch on Google Analytics (optional, but useful)

This lets you see how many people visit each page.

1. Go to **https://analytics.google.com**
2. Create a property for `caretoolkit.co.uk`
3. Get your Measurement ID — looks like `G-XXXXXXXXXX`
4. In `assets/js/shared.js`, find the Google Analytics block, uncomment it, and replace `G-XXXXXXXXXX` with your real ID
5. Commit the change in GitHub — Cloudflare will redeploy automatically

---

## Step 10: Updating the site

Whenever you want to change something:

1. Open the file in GitHub
2. Click the pencil icon to edit
3. Make your change
4. Click **"Commit changes"**
5. Cloudflare auto-deploys within ~60 seconds

For bigger changes (adding a new tool), use Claude Code locally — clone the repo, work in the folder, then `git push` to send changes back. Claude Code will walk you through this when you're ready.

---

## What success looks like

**Week 1:** Site live, indexed in Google for "Care Toolkit" brand search
**Month 1:** A few visitors trickling in, a handful of pages ranking for low-volume keywords
**Month 3:** AdSense approved, first £10-50/month showing up
**Month 6:** A few hundred visits per day if you've been consistent with content
**Month 12:** Real money territory if you've built 8-12 tools and kept publishing

This is a slow business. It works, but it works on the timescale of months not days. Build well, fact-check obsessively, and don't rush AdSense.

---

## When something breaks

- **Site shows old version after editing:** wait 60 seconds, then hard-refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- **DNS not connecting:** can take up to 24 hours on rare occasions; usually 5 minutes
- **AdSense rejected:** read the rejection email, fix the specific reason, reapply after 2 weeks
- **Calculator showing wrong figures:** edit the relevant `index.html` in GitHub, update the numbers, commit

For anything else, paste the error or screenshot into Claude Code with context — that's literally what it's for.
