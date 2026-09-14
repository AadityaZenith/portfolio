# Aaditya Kumar - Portfolio Website

A modern, AI-powered portfolio website showcasing expertise in Cybersecurity, Software Development, and Emerging Technologies.

![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)
![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-6.2-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## Overview

This is a personal portfolio website built to demonstrate technical expertise across multiple domains including cybersecurity, software development, AI/ML, and cloud technologies. The site features:

- **AI-Powered Interactions**: Integrates Google Gemini API for intelligent communication
- **Professional Presentation**: Clean, modern UI showcasing education, experience, and skills
- **Contact Management**: EmailJS integration for direct messaging capability
- **Responsive Design**: Fully optimized for desktop and mobile devices
- **Performance-Focused**: Built with Vite for lightning-fast development and production builds

## Key Features

- 🎯 **Hero Section** - Eye-catching introduction with call-to-action
- 📋 **About Section** - Personal background and career aspirations
- 🎓 **Education** - Academic credentials and certifications
- 💼 **Experience** - Professional work history and projects
- 🛠️ **Skills Dashboard** - Organized technical expertise across multiple domains
- 🤖 **AI & Prototyping Tools** - Experience with leading AI platforms and rapid prototyping
- ✉️ **Contact Form** - EmailJS-powered messaging system
- 🧭 **Navigation** - Smooth scrolling to different portfolio sections

## Tech Stack

### Frontend
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6.2
- **Styling**: Tailwind CSS 4.1 with PostCSS
- **Animations**: Motion 12.23
- **Icons**: Lucide React 0.546
- **State Management**: React Hooks

### Backend & Services
- **Server**: Express.js 4.21
- **API Integration**: Google Gemini API (@google/genai 2.4)
- **Email Service**: EmailJS 4.4 for form submissions
- **Environment Config**: dotenv 17.2

### Development Tools
- **Language**: TypeScript ~5.8
- **Build Tool**: esbuild 0.25
- **Package Manager**: npm/Node.js
- **Runtime**: tsx 4.21

## Project Structure

```
aaditya-kumar-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx        # Navigation header
│   │   ├── Hero.tsx          # Main introduction section
│   │   ├── About.tsx         # About/career aspirations
│   │   ├── Education.tsx     # Academic background
│   │   ├── Skills.tsx        # Technical skills & tools
│   │   ├── Experience.tsx    # Professional experience
│   │   └── Contact.tsx       # Contact form with EmailJS
│   ├── App.tsx               # Main application component
│   ├── main.tsx              # React entry point
│   └── index.css             # Global styles & Tailwind imports
├── public/                    # Static assets (images)
├── index.html                # HTML entry point
├── package.json              # Project dependencies
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── metadata.json             # Project metadata
```

## Installation

### Prerequisites
- **Node.js** 16+ and npm
- **Gemini API Key** (for AI features - available at [Google AI Studio](https://ai.google.dev))
- **EmailJS Account** (for contact form functionality)

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/AadityaZenith/portfolio.git
   cd portfolio/aaditya-kumar-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env.local` file in the project root:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

   > Get your Gemini API key from [Google AI Studio](https://ai.google.dev)

4. **Start development server**
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:3000`

## Usage

### Development

Start the development server with hot-module replacement (HMR):
```bash
npm run dev
```

Run TypeScript type checking:
```bash
npm run lint
```

### Production

Build for production:
```bash
npm run build
```

This generates an optimized build in the `dist/` directory.

Preview the production build locally:
```bash
npm run preview
```

### Clean Build Artifacts

Remove build outputs:
```bash
npm run clean
```

## Environment Variables

Create a `.env.local` file with the following configuration:

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GEMINI_API_KEY` | Google Gemini API key for AI features | Yes |

> **Security Note**: Never commit `.env.local` to version control. The `.gitignore` file should exclude this file.

## Features in Detail

### AI Integration
The portfolio integrates Google's Gemini API for intelligent interactions. The API connection is configured in the application and supports:
- Natural language processing
- Dynamic content generation
- Context-aware responses

### Contact Form
- Built with React and EmailJS
- Form validation before submission
- Real-time status feedback (sending, success, error states)
- Automatic form reset after successful submission
- User-friendly error handling

### Skills Section
Skills are organized into three categories:
1. **Core Skills** - Programming languages, security concepts, and web development
2. **AI & Prototyping** - Experience with ChatGPT, Claude, Gemini, and rapid prototyping tools
3. **Tools & Cloud** - Git, Docker, AWS, CI/CD, and development tools

### Responsive Design
- Mobile-first approach using Tailwind CSS
- Smooth animations with Motion library
- Optimized layouts for all screen sizes
- Accessible semantic HTML

## Configuration Notes

### Vite Configuration
The `vite.config.ts` includes:
- React plugin for JSX support
- Tailwind CSS Vite plugin
- Path alias `@` for clean imports
- HMR configuration (disabled when `DISABLE_HMR=true` for AI Studio compatibility)

### TypeScript Configuration
- Target: ES2022
- Module: ESNext (for modern JavaScript)
- Strict type checking enabled
- JSX support with React 17+ syntax
- Path aliases enabled (`@/*`)

## Deployment

The project can be deployed to various platforms:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
Connect your GitHub repository to Netlify and set:
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Environment variables**: Add `VITE_GEMINI_API_KEY`

### Docker
Build and run with Docker:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## API Documentation

### Google Gemini API
The application uses the Google Gemini API (@google/genai package) for AI capabilities:
- **Package**: `@google/genai` v2.4.0
- **Endpoint**: Configured via VITE_GEMINI_API_KEY
- **Usage**: Server-side Gemini API capability as defined in metadata.json

### EmailJS Service
For the contact form:
- **Service ID**: `service_fdiy3hq`
- **Template ID**: `template_contact_form`
- **Public Key**: Available in Contact.tsx (hardcoded for demo - should use environment variables in production)

> ⚠️ **Security Warning**: The EmailJS public key is hardcoded in the source. For production, move this to environment variables.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- **Code Splitting**: Vite automatically splits code for optimal loading
- **Lazy Loading**: React components are optimized for performance
- **CSS Purging**: Tailwind CSS removes unused styles in production
- **Image Optimization**: Static assets in `/public` directory
- **Build Output**: Production builds are minified and optimized

## Security & Best Practices

### Security Considerations
- ✅ Environment variables used for sensitive keys
- ✅ TypeScript for type safety
- ⚠️ EmailJS public key hardcoded (should be in `.env` for production)
- ✅ Input validation on contact form
- ✅ No sensitive data in version control

### Recommended Improvements
1. Move EmailJS credentials to environment variables
2. Implement rate limiting on the contact form
3. Add CSRF protection for form submissions
4. Use HTTPS for all communications
5. Implement content security policy headers

## Future Enhancements

Potential improvements for future versions:
- [ ] **Blog Section** - Technical articles and insights
- [ ] **Projects Gallery** - Detailed project showcases with GitHub links
- [ ] **Dark Mode** - Theme toggle for user preference
- [ ] **Internationalization** - Multi-language support
- [ ] **Analytics** - Track portfolio metrics and visitor insights
- [ ] **Comments/Testimonials** - Third-party validation
- [ ] **Admin Dashboard** - CMS for managing content without code changes
- [ ] **Performance Monitoring** - Real User Monitoring (RUM)

## Contributing

While this is a personal portfolio project, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/improvement-name`
3. Commit changes: `git commit -am 'Add improvement'`
4. Push to branch: `git push origin feature/improvement-name`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**SPDX License Identifier**: Apache-2.0 (as noted in component headers)

## Contact & Connect

- **Email**: Reach out through the contact form on the portfolio
- **GitHub**: [@AadityaZenith](https://github.com/AadityaZenith)
- **Looking For**: Internship and full-time opportunities in Cybersecurity, Software Development, and AI/ML

## Acknowledgments

- Google AI Studio for Gemini API
- React and Vite teams for excellent developer experience
- Tailwind Labs for Tailwind CSS
- EmailJS for email service integration
- Lucide React for beautiful icons

---

**Last Updated**: September 2026  
**Portfolio Status**: Active and Updated
