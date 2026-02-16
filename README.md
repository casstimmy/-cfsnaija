# FORGE - Cold-Formed Steel Construction Solutions

A modern, high-performance website for FORGE, a premium cold-formed steel construction company. Built with Next.js, React, TypeScript, and Tailwind CSS.

##  Overview

FORGE is a turnkey solution for cold-formed steel construction. This website showcases their comprehensive services:

- **Design & Engineering** - Advanced CAD and structural engineering services
- **Cold-Formed Steel Manufacturing** - Precision CFS production with quality assurance
- **Panels & Components** - Pre-fabricated, ready-for-installation solutions
- **Structural Solutions** - Complete engineered systems for maximum performance

##  Features

### User Experience
- Modern, Responsive Design - Beautiful on desktop, tablet, and mobile devices
- Smooth Animations - Engaging micro-interactions and transitions
- Fast Performance - Optimized for speed with Next.js and Turbopack
- SEO Optimized - Structured data and meta tags for search visibility
- Accessibility - WCAG compliant with proper focus management

### Technical Stack
- Next.js 16.1.6 - Server-side rendering and static generation
- React 19 - Latest React capabilities and optimizations
- TypeScript 5 - Full type safety across the codebase
- Tailwind CSS 4 - Utility-first CSS with modern features
- Lucide Icons - 600+ beautiful, accessible icons

##  Installation

`ash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
`

Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

##  Available Scripts

- 
pm run dev - Start development server
- 
pm run build - Create optimized production build
- 
pm run start - Start production server
- 
pm run lint - Run ESLint checks

##  Project Structure

`
src/
 app/
    layout.tsx          # Root layout with metadata
    page.tsx            # Home page
    globals.css         # Global styles and animations
    favicon.ico         # Favicon
 components/
    Navigation.tsx      # Header navigation with mobile menu
    HeroSection.tsx     # Landing hero section
    ServicesSection.tsx # Services showcase
    PartnersSection.tsx # Strategic partners
    ContactSection.tsx  # Contact form
    Footer.tsx          # Footer with links
 public/                 # Static assets
`

##  Design

- **Modern UI** with smooth animations and transitions
- **Responsive Design** that looks great on all devices
- **Professional Color Scheme** using blue and white
- **Optimized Typography** with Inter font family
- **Interactive Components** with hover effects and feedback

##  Deployment

### Vercel (Recommended)
`ash
npm install -g vercel
vercel
`

### Docker
`ash
docker build -t forge-app .
docker run -p 3000:3000 forge-app
`

##  Contact

- **Phone:** (470) 682-0851
- **Email:** info@forgecousa.com
- **Location:** Atlanta, Georgia

##  License

MIT License - feel free to use this project for your own purposes.

---

Built with Next.js, React, TypeScript, and Tailwind CSS