/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'media',
  theme: {
    screens: {
      'xxs': '375px',
      'xs': '480px',
      'sm': '600px',
      'md': '768',
      'lg': '1024',
      'xl': '1200'
    },
    extend: {
      boxShadow: {
        'xl': '0 0 10px rgba(0, 0, 0, 0.3)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)'
      },
      colors: {
        gray: {
          900: '#1f2123',
          800: '#212325',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
  variants: {
    extend: {
      scale: ['group-hover']
    }
  }
}
