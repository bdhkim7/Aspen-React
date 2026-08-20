# Aspen Web

Next.js App Router site for [Aspen Imaging Healthcare](https://www.aspenimaging.com). The original static HTML site lives in the sibling `Aspen/` folder and is kept as backup — this project is the migration target.

## Local development

```powershell
cd c:\Users\DHK\Documents\AWS\aspen-web
npm.cmd install
npm.cmd run dev
```

Open [http://localhost:3000](http://localhost:3000).

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

- **Done:** homepage, shared layout, URL redirects, all product/industry/software/about pages, contact API/SES hook
- **Europa90** uses a native React product template; other products use extracted legacy HTML content
- **Re-sync from HTML backup:** `npm.cmd run extract-pages` (reads from sibling `Aspen/` folder, writes to `src/content/pages/`)

Old `.html` URLs redirect to the new routes via `src/data/redirects.ts`.
