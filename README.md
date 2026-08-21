# Aspen-React

Next.js App Router site for [Aspen Imaging Healthcare](https://www.aspenimaging.com). The original static HTML site lives in the sibling `Aspen/` folder and is kept as backup — this project is the migration target.

## Local development

```powershell
cd c:\Users\DHK\Documents\AWS\Aspen-React
npm.cmd install
npm.cmd run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Smoke tests (Playwright)

Against the Amplify preview (default):

```powershell
npm.cmd run test:e2e
```

Against a local production build (same gate Amplify uses before deploy):

```powershell
npm.cmd run build
npm.cmd run test:e2e:ci
```

Against a local `next dev` server:

```powershell
$env:PLAYWRIGHT_BASE_URL="http://localhost:3000"; npm.cmd run test:e2e
```

Every Amplify deploy installs Chromium system libs (Amazon Linux `dnf`), then runs `test:e2e:ci` after `build`. If tests fail, the job stops and **nothing is published**. GitHub Actions runs the same suite on Ubuntu for PRs and `main` pushes ([Actions → E2E](https://github.com/bdhkim7/Aspen-React/actions/workflows/e2e.yml)).

If PowerShell blocks `npm`, use `npm.cmd` instead or run:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

## Environment variables

Copy `.env.example` to `.env.local`:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager container ID |
| `CONTACT_TO_EMAIL` | Inbox for contact form submissions |
| `CONTACT_FROM_EMAIL` | Verified SES sender address |
| `AWS_REGION` | SES region (e.g. `us-east-1`) |
| `AWS_ACCESS_KEY_ID` | IAM credentials for SES |
| `AWS_SECRET_ACCESS_KEY` | IAM credentials for SES |

Without SES variables, the contact form still validates and logs submissions locally.

## Deploy to AWS Amplify (GitHub auto-deploy)

1. Create a GitHub repo and push this folder.
2. In AWS Amplify → **New app** → **Host web app** → connect GitHub.
3. Select this repo and branch (`main`).
4. Amplify detects Next.js; `amplify.yml` is already included.
5. Add environment variables in Amplify console (GTM, SES, etc.).
6. Connect custom domain when ready for cutover.

Every push to the connected branch triggers a build and deploy. Use preview branches for PRs.

## Migration status

- **Done:** homepage, shared layout, URL redirects, all product/industry/software/about pages as React components + typed data modules, contact API/SES hook, Amplify e2e deploy gate
- Product pages use `ProductPageView` + `src/data/products/*`
- Industry / leadership / history use `ContentPageView` + `src/data/industries/*` / `src/data/about/*`
- Original static HTML backup remains in the sibling `Aspen/` folder

Old `.html` URLs redirect to the new routes via `src/data/redirects.ts`.
