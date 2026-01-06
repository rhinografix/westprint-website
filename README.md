# Westprint Website

Modern, responsive website for Westprint - a professional printing company established in 1981, serving Southern California from their Anaheim location.

## 🌟 Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Professional Quote Forms** - Two forms with email integration via Resend API
  - Quick quote form in hero section (4 fields)
  - Detailed quote request form on contact page (9 fields)
- **Service Showcase** - Comprehensive printing services display
- **Industry Solutions** - Targeted information for different business sectors
- **Smooth Animations** - Professional transitions and hover effects
- **Modern UI** - Clean design with teal/cyan gradient branding

## 📦 Tech Stack

- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Notifications**: Sonner (toast)
- **Backend**: Supabase Edge Functions
- **Email Service**: Resend API
- **Deployment**: Netlify

## 🚀 Quick Start

### Prerequisites

- Node.js 20.11.1 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd westprint-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 📧 Email Configuration

Quote request forms send emails to:
- `estimating@westprint.com`
- `rcarandang@advantageinc.com`

Email integration is handled via Resend API through Supabase Edge Functions.

### Testing Forms

Access the form testing dashboard:
```
http://localhost:5173/?page=test-forms
```

This dashboard allows you to:
- Test both quote request forms
- View real-time success/error status
- Monitor email delivery
- Debug form submissions

## 🌐 Deployment

### Netlify Deployment

1. **Connect GitHub Repository**
   - Login to [Netlify](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select this repository

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 20.11.1

3. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically build and deploy

### Manual Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to production
netlify deploy --prod
```

### Custom Domain Setup

1. In Netlify dashboard, go to "Domain settings"
2. Add custom domain: `westprint.com`
3. Configure DNS records as instructed
4. Enable HTTPS (automatic)

## 📂 Project Structure

```
westprint-website/
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── FormTestingDashboard.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── styles/           # Global styles
│   ├── utils/            # Utility functions
│   ├── App.tsx           # Main app component
│   └── main.tsx          # App entry point
├── supabase/
│   └── functions/
│       └── server/       # Edge functions
│           └── index.tsx # Email API endpoint
├── public/               # Static assets
├── netlify.toml          # Netlify configuration
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
└── vite.config.ts        # Vite configuration
```

## 🎨 Pages

- **Home** (`/`) - Hero section with quote form, features, testimonials
- **Services** (`/?page=services`) - Comprehensive service listings
- **Industries** (`/?page=industries`) - Industry-specific solutions
- **About** (`/?page=about`) - Company history and information
- **Contact** (`/?page=contact`) - Detailed quote request form
- **Form Testing** (`/?page=test-forms`) - Testing dashboard

## 🔧 Configuration Files

- **netlify.toml** - Netlify deployment and redirect configuration
- **tsconfig.json** - TypeScript compiler options
- **vite.config.ts** - Vite build configuration
- **postcss.config.js** - PostCSS and Tailwind configuration

## 🧪 Testing

### Form Testing Dashboard

The project includes a comprehensive testing dashboard for validating email forms:

```bash
# Start dev server
npm run dev

# Navigate to testing dashboard
http://localhost:5173/?page=test-forms
```

Features:
- Test hero form with sample data
- Test contact form with sample data
- View request/response details
- Monitor email delivery status
- Debug form issues

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Type-check with TypeScript
```

### Adding New Pages

1. Create new component in `src/components/`
2. Import in `src/App.tsx`
3. Add navigation link in `Header.tsx`
4. Update page routing in `App.tsx`

### Modifying Styles

Global styles are in `src/styles/globals.css` using Tailwind CSS v4.

## 📞 Contact Information

**Westprint**
- Phone: (949) 749-4024
- Email: estimating@westprint.com
- Location: Anaheim, Southern California
- Hours: Monday - Friday, 8:00 AM - 5:00 PM
- Website: westprint.com

## 📝 License

© 2025 Westprint. All rights reserved.

## 🤝 Support

For technical issues or questions about the website, please contact the development team.

For printing services and quotes, contact Westprint directly at (949) 749-4024.