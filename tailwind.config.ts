import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        metal: {
          darkest: '#0a0a0a',
          dark: '#1a1a1a',
          gray: '#2a2a2a',
          light: '#4a4a4a',
        },
        steel: {
          dark: '#18181b',
          DEFAULT: '#27272a',
          light: '#3f3f46',
        },
        crimson: {
          DEFAULT: '#7f1d1d',
          dark: '#450a0a',
          light: '#991b1b',
        }
      }
    },
  },
  plugins: [],
}
export default config
