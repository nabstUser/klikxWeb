# Klikx - 3D Isometric Property Modeling

A modern, elegant website for Klikx, a company specialized in realistic isometric 3D modeling services for property listings.

## Features

- **Modern Design**: Clean, minimalist interface with a strong focus on visual content
- **Responsive Layout**: Fully responsive design for all device sizes
- **Interactive Elements**: Smooth animations and transitions using Framer Motion
- **Optimized Performance**: Fast loading times and optimized assets
- **SEO Friendly**: Proper metadata and semantic HTML structure

## Tech Stack

- **Next.js**: React framework for server-rendered applications
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn/ui**: High-quality UI components
- **Framer Motion**: Animation library for React

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Bun (recommended) or npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/klikx-website.git
   cd klikx-website
   ```

2. Install dependencies:
   ```bash
   bun install
   # or
   npm install
   ```

3. Run the development server:
   ```bash
   bun run dev
   # or
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
klikx-website/
├── .github/          # GitHub workflows
├── public/           # Static assets
├── src/
│   ├── app/          # App router pages
│   ├── components/   # React components
│   │   ├── layout/   # Layout components
│   │   ├── sections/ # Page sections
│   │   └── ui/       # UI components
│   └── lib/          # Utility functions
├── .gitignore
├── next.config.js
├── package.json
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## Deployment

This project can be easily deployed to Vercel, Netlify, or any other platform that supports Next.js.

```bash
# Build for production
bun run build

# Start production server
bun run start
```

## License

[MIT](LICENSE)

## Contributors

- Your Name - Initial work
