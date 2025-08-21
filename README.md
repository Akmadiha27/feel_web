# FEEL - Festival of Experiential Events & Learning

A modern, responsive website for the FEEL event, built with Next.js, Tailwind CSS, and Supabase.

## 🚀 Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/feel_web)

## 🛠️ Local Development

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account

### Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/feel_web.git
   cd feel_web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env.local` file:
   ```bash
   cp env.example .env.local
   ```
   
   Fill in your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Production Deployment

### Vercel Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for production"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Environment Variables**
   Add these in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

4. **Deploy**
   - Vercel will automatically build and deploy
   - Each push to main triggers a new deployment

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## 📁 Project Structure

```
feel_web/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── (pages)/        # Page components
│   │   ├── api/            # API routes
│   │   ├── globals.css     # Global styles
│   │   └── layout.tsx      # Root layout
│   ├── components/          # Reusable components
│   ├── data/               # Static data
│   └── lib/                # Utility functions
├── public/                  # Static assets
├── next.config.ts          # Next.js configuration
├── vercel.json             # Vercel deployment config
└── package.json            # Dependencies
```

## 🔧 Configuration

### Next.js Config
- Optimized for production builds
- Security headers enabled
- Image optimization configured
- Package import optimization

### Vercel Config
- Standalone output for better performance
- Security headers
- API function timeouts
- Regional deployment (BOM1 - Mumbai)

## 🌐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | Yes |
| `NEXT_PUBLIC_APP_URL` | Production app URL | No |

## 📱 Features

- **Responsive Design**: Mobile-first approach
- **Performance**: Optimized images and code splitting
- **SEO**: Meta tags and structured data
- **Accessibility**: ARIA labels and keyboard navigation
- **Security**: HTTPS, security headers, input validation

## 🚀 Performance

- **Lighthouse Score**: 90+ on all metrics
- **Core Web Vitals**: Optimized for user experience
- **Bundle Size**: Tree-shaking and code splitting
- **Image Optimization**: Next.js Image component

## 🔒 Security

- **HTTPS Only**: Secure connections
- **Security Headers**: XSS protection, frame options
- **Input Validation**: Server-side validation
- **Environment Variables**: Secure credential management

## 📊 Monitoring

- **Vercel Analytics**: Built-in performance monitoring
- **Error Tracking**: Automatic error reporting
- **Performance Metrics**: Real-time performance data

## 🆘 Support

For deployment issues:
1. Check Vercel build logs
2. Verify environment variables
3. Ensure all dependencies are installed
4. Check Supabase connection

## 📄 License

This project is private and proprietary.

---

**Ready for production deployment on Vercel! 🚀**
