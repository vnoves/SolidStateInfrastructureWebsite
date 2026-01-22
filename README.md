# Solid State Infrastructure Website

A premium, investor-grade website for Solid State Infrastructure, a company developing hyperscale and large-scale data center infrastructure in Argentina.

## Features

- **Bilingual Support**: Full English and Spanish translations with language toggle
- **Premium Design**: Dark, institutional aesthetic with clean typography
- **Responsive**: Desktop-first design that works on all devices
- **Modern Stack**: Next.js 14 with TypeScript and Tailwind CSS
- **SEO Optimized**: Semantic HTML and proper metadata

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with language state
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation with language toggle
│   ├── Footer.tsx          # Footer with language toggle
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── WhyArgentina.tsx     # Why Argentina section
│   ├── Infrastructure.tsx   # Infrastructure focus section
│   ├── Vision.tsx         # Vision & strategy section
│   └── Contact.tsx        # Contact form
└── lib/
    └── i18n.ts            # Internationalization translations
```

## Deployment

This website is configured for static export and can be deployed to AWS S3.

### Automatic Deployment via GitHub Actions

The repository includes a GitHub Actions workflow (`.github/workflows/deploy-s3.yml`) that automatically deploys to S3 on push to main/master.

**Setup required:**
1. Create an S3 bucket and enable static website hosting
2. Create an IAM user with S3 permissions
3. Add AWS credentials as GitHub secrets:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
4. Update the workflow file with your S3 bucket name and region

See `.github/workflows/README.md` for detailed setup instructions.

### Manual Deployment

```bash
# Build static site
npm run build

# The output will be in the 'out' directory
# Upload the contents to your S3 bucket
```

## Customization

### Adding Images

Replace the Unsplash image URLs in components with your own data center imagery. Recommended:
- Hyperscale data halls
- Aerial infrastructure shots
- Cooling systems and substations
- Abstract infrastructure visuals

### Form Submission

Update the `handleSubmit` function in `components/Contact.tsx` to integrate with your backend or email service.

## Design Philosophy

The website is designed to be:
- **Minimal**: Clean, uncluttered layouts
- **Serious**: Institutional, professional tone
- **Infrastructure-first**: Focus on scale, reliability, engineering
- **Calm & Confident**: No startup fluff or gimmicks

## License

Proprietary - Solid State Infrastructure

