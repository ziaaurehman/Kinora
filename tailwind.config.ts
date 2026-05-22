import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F2A38',
          dark: '#0B1E28',
          light: '#1C4154',
        },
        accent: {
          DEFAULT: '#D96C3B',
          hover: '#C55E32',
          light: '#EC9F7D',
        },
        bg: {
          cream: '#FFF8F2',
          light: '#FBF5F0',
          section: '#F7F5F2',
          white: '#FFFFFF',
          dark: '#0F2A38',
        },
        txt: {
          primary: '#0F2A38',
          secondary: '#4A6274',
          muted: '#6B7B88',
          light: '#9CA3AF',
          white: '#FFFFFF',
          'on-dark': '#CBD5DC',
        },
        brd: {
          DEFAULT: '#E5E7EB',
          light: '#F0E8E0',
          input: '#D1D5DB',
        },
        star: '#F5A623',
        chat: {
          primary: '#3F6F4F',
          highlight: '#7CFFA8',
          gray: '#5A5A5A',
          muted: '#9A9A9A',
          dark: '#313131',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(15, 42, 56, 0.06)',
        md: '0 4px 12px rgba(15, 42, 56, 0.08)',
        lg: '0 8px 24px rgba(15, 42, 56, 0.1)',
        xl: '0 12px 40px rgba(15, 42, 56, 0.12)',
        card: '0 2px 8px rgba(15, 42, 56, 0.06), 0 0 1px rgba(15, 42, 56, 0.1)',
      },
      zIndex: {
        dropdown: '100',
        sticky: '200',
        header: '300',
        overlay: '400',
        modal: '500',
      },
    },
  },
  plugins: [],
}
export default config
