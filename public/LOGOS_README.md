# Product logos

Place the following logo files in this folder (`public/`):

| File name | Use |
|-----------|-----|
| `ambit-logo.png` | Main Ambit Finvest logo (header, sidebar) |
| `bajaj-health-logo.png` | Bajaj Swasthyacare Supreme (Bajaj Health) |
| `hdfc-life-logo.png` | HDFC Life Group Credit Policy |
| `pnb-metlife-logo.png` | PNB Metlife |
| `gpa-logo.png` | GPA |
| `hdc-emi-logo.png` | HDC & EMI |

If you have the logo images in Cursor’s assets folder, run from project root:

```bash
node scripts/copy-logos.js
```

This copies all logos (including the Ambit logo) from `.cursor/projects/.../assets/` into `public/`. If `ambit-logo.png` is missing, the app shows "AMBIT Finvest" text as a fallback.
