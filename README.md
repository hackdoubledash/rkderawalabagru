# RK Derawala · The Living Archive

Editorial website for a Bagru hand block printing practice. Built with the existing Next.js App Router, React, TypeScript and CSS.

## Review locally

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). Use `npm run build && npm run typecheck` to verify production, then `npm run start` to serve that build locally. Leave the public URL unset for the local review with the existing archive renditions. Local builds tell crawlers not to index them.

## Release

Set `NEXT_PUBLIC_SITE_URL=https://rkderawalabagru.com` in the existing Vercel production project. It drives canonical URLs, the sitemap, robots and social metadata. Confirm the project environment before pushing to `main`, which triggers production deployment.

The review photos reside outside `public/`. The archive route only exposes them on local review builds or when `RK_APPROVED_ARCHIVE_MEDIA=1` is explicitly set. Review the [asset manifest](ASSET_MANIFEST.md) before enabling it. For mixed permissions, clear and update each asset’s status in the data model. Blue pottery also needs verified items in the content model and an explicit publication flag.

The two enquiry forms prepare a WhatsApp message in the browser and hand it off for review and sending. They have no email backend or storage.

## Handoff files

- [DESIGN.md](DESIGN.md) records art direction and motion.
- [SITE_MAP.md](SITE_MAP.md) maps the routes and redirects.
- [CONTENT_VERIFICATION.md](CONTENT_VERIFICATION.md) records evidence and approvals.
- [ASSET_MANIFEST.md](ASSET_MANIFEST.md) records sources, alt text, crops and usage permissions.
