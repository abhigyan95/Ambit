# Product logos

Place the following logo files in this folder (`public/`):

| File name | Product |
|-----------|--------|
| `bajaj-health-logo.png` | Bajaj Swasthyacare Supreme (Bajaj Health) |
| `hdfc-life-logo.png` | HDFC Life Group Credit Policy |
| `pnb-metlife-logo.png` | PNB Metlife |
| `gpa-logo.png` | GPA |
| `hdc-emi-logo.png` | HDC & EMI |

If you have the logo images in Cursor’s assets folder, run from project root:

```bash
node scripts/copy-logos.js
```

This copies the attached logos from `.cursor/projects/.../assets/` into `public/` with the names above.
