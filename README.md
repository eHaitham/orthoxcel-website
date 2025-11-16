# OrthoXcel Medical Education Platform

A modern, professional website for OrthoXcel - Medical Education Excellence, led by Mr. Mohamed Hashem, FRCS T&O.

## 🌐 Live Sites

- **Main Site:** https://orthoxcel.generatic.co.uk
- **Alternative:** http://87.106.54.178/orthoxcel

## ✨ Features

### Complete Sections
- **Hero Section** - Professional introduction with credentials
- **About Section** - Mr. Mohamed Hashem's profile and expertise
- **Services Grid** - Educational services and offerings
- **Courses Section** - FRCS preparation and medical education courses
- **Gallery** - 9 authentic images from courses and events
- **Testimonials** - 6 real student testimonials
- **Contact Section** - Contact form and information
- **Footer** - Professional footer with links and social media

### Technical Features
- Fully responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Modern UI components
- Optimized performance
- SEO-friendly structure
- Accessibility compliant

## 🛠️ Tech Stack

- **Framework:** Next.js 14.0.4
- **UI Library:** React 18
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Components:** Custom UI components (shadcn/ui inspired)

## 📦 Installation

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

## 🚀 Deployment

The site is deployed on a VPS with:
- **Server:** Ubuntu with Nginx
- **Process Manager:** PM2
- **SSL:** Let's Encrypt (Certbot)
- **Port:** 3005
- **Domain:** orthoxcel.generatic.co.uk

## 📁 Project Structure

```
orthoxel/
├── Components/
│   ├── home/
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ServicesGrid.jsx
│   │   ├── CoursesSection.jsx
│   │   ├── GallerySection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── StatsSection.jsx
│   │   └── Footer.jsx
│   └── ui/
│       ├── button.jsx
│       └── card.jsx
├── pages/
│   ├── _app.js
│   ├── index.js
│   └── home.jsx
├── styles/
│   └── globals.css
├── lib/
│   └── utils.js
├── Layout.js
├── next.config.js
├── tailwind.config.js
└── package.json
```

## 🎨 Design System

### Colors
- **Primary:** Blue (#0A2463)
- **Secondary:** Teal (#006B7D)
- **Accent:** Orange (#F4A261)

### Typography
- **Font:** Inter (system font stack)
- **Headings:** Bold, large sizes
- **Body:** Regular weight, readable sizes

## 📝 Content

All content is authentic and approved:
- Professional images from actual courses
- Real student testimonials
- Accurate credentials and qualifications
- Verified contact information

## 🔒 Security

- HTTPS enabled with SSL certificates
- Secure headers configured
- No sensitive data in repository
- Environment variables for sensitive config

## 📄 License

Copyright 2025 OrthoXcel. All rights reserved.

## 👨‍⚕️ About

Led by **Mr. Mohamed Hashem**
- FRCS T&O (Fellow of the Royal College of Surgeons)
- 18+ years of medical education experience
- RCS Faculty Member
- ATLS Course Director
- International orthopaedic educator

## 📞 Contact

- **Email:** info@orthoxcel.co.uk
- **Phone:** +44 1753 520986
- **Location:** Slough, Berkshire, United Kingdom
- **YouTube:** [@mohamedahashem5629](https://www.youtube.com/@mohamedahashem5629/videos)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd orthoxel
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
orthoxel/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.jsx         # Root layout
│   └── page.jsx           # Home page
├── Components/            # React components
│   └── home/              # Home page sections
├── components/ui/         # UI components (shadcn/ui)
├── lib/                   # Utility functions
├── pages/                 # Legacy pages (if any)
├── public/                # Static assets
└── Layout.js              # Main layout wrapper
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **shadcn/ui** - Component library primitives

## Website Sections

1. **Hero Section** - Eye-catching landing with call-to-action
2. **Services Grid** - Overview of educational services
3. **About Section** - Information about Mr. Mohamed Hashem
4. **Stats Section** - Key achievements and metrics
5. **Courses Section** - Educational programs offered
6. **Gallery Section** - Visual content showcase
7. **Testimonials** - Student and professional feedback
8. **Contact Section** - Contact form and information
9. **Footer** - Navigation and contact details

## Customization

### Colors

The website uses a custom color palette defined in `tailwind.config.js` and `app/globals.css`:

- Primary: `#0A2463` (Deep Blue)
- Secondary: `#006B7D` (Teal)
- Accent: `#F4A261` (Orange)

### Fonts

The website uses Inter font family for optimal readability.

## Deployment

This website can be deployed to any platform that supports Next.js:

- Vercel (recommended)
- Netlify
- AWS Amplify
- Digital Ocean

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary software. All rights reserved.

## Contact

- **Email**: Contact@OrthoXcel.co.uk
- **Phone**: +44 1753 520986
- **Location**: Slough, Berkshire, United Kingdom
- **YouTube**: https://www.youtube.com/@mohamedahashem5629/videos
