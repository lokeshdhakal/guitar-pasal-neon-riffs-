# Guitar Pasal - Dark Metal E-commerce

Welcome to **Guitar Pasal**, a premium e-commerce platform for guitar enthusiasts with a Dark Metal aesthetic.

"Pasal" means shop or store in Nepali. This Next.js application delivers a powerful, industrial-themed shopping experience for musicians who demand the best.

## Features

- **Dark Metal Theme**: Heavy, rugged design with deep blacks, metallic grays, and crimson red accents
- **Next.js 14 App Router**: Modern React framework with server components
- **Tailwind CSS**: Custom utility-first styling with dark metal design system
- **Lucide React Icons**: Beautiful, consistent iconography
- **Supabase Ready**: Pre-configured for backend integration
- **Fully Responsive**: Optimized for all devices and screen sizes

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Database**: Supabase (client setup included)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/lokeshdhakal/guitar-pasal-neon-riffs-.git
   cd guitar-pasal-neon-riffs-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables (optional)**
   
   Create a `.env.local` file in the root directory if you want to use Supabase:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## Development

- **Development server**: `npm run dev`
- **Build for production**: `npm run build`
- **Start production server**: `npm start`
- **Run linter**: `npm run lint`

## Design Philosophy

The Dark Metal aesthetic embodies:

- **Heavy and Rugged**: Industrial design with brushed metal effects
- **High Contrast**: Deep blacks (#0a0a0a) with bright text for readability
- **Crimson Accents**: Deep red highlights (#7f1d1d) for calls-to-action
- **Professional Edge**: Clean, organized layouts with aggressive undertones
- **Metallic Borders**: Subtle shadows and insets to create depth

## Project Structure

```
guitar-pasal/
├── app/
│   ├── layout.tsx       # Root layout with navbar and footer
│   ├── page.tsx         # Homepage with hero and featured products
│   └── globals.css      # Global styles and custom CSS classes
├── lib/
│   └── supabase.ts      # Supabase client configuration
├── public/              # Static assets (created as needed)
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── next.config.js       # Next.js configuration
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.
