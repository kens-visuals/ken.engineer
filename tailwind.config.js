/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1C1C1C',
        'primary-light': '#FFF7F0',
        'js-yellow': '#FFD369',
        'accent-grey-dark': '#B5A99D',
        'accent-grey-light': '#5E607A',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontSize: {
        'heading-lg': [
          '3.5rem',
          {
            lineHeight: '4.375rem',
            fontWeight: '800',
          },
        ],
        'heading-md': [
          '2.5rem',
          {
            lineHeight: '3.1875rem',
            fontWeight: '800',
          },
        ],
        'heading-sm': [
          '2rem',
          {
            lineHeight: '2.5rem',
            fontWeight: '800',
          },
        ],
        body: [
          '1.125rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '400',
          },
        ],
      },
      backgroundImage: {
        'nav-pattern': `linear-gradient(
          180deg, 
          rgba(28, 28, 28, .1) 5%, 
          rgba(28, 28, 28, .9) 65%
        );`,
        'main-tools-pattern': `linear-gradient(
          107.51deg,
          rgba(97, 196, 183, 0.4) 5.37%,
          rgba(97, 196, 183, 0.1) 93.02%
        );`,
        'main-tools-pattern--text': `linear-gradient(
          107.51deg,
          rgba(97, 196, 183, 0.7) 5.37%,
          rgba(97, 196, 183, 0.8) 93.02%
        );`,
        'learning-tools-pattern': `linear-gradient(
          106.91deg, 
          rgba(117, 92, 222, 0.4) 11.91%, 
          rgba(117, 92, 222, 0.1) 85.49%
        );`,
        'learning-tools-pattern--text': `linear-gradient(
          106.91deg, 
          rgba(117, 92, 222, 0.7) 11.91%, 
          rgba(117, 92, 222, 0.8) 85.49%
        );`,
        'uiux-tools-pattern': `linear-gradient(153.09deg, 
          rgba(246, 165, 96, 0.4) 4.6%, 
          rgba(246, 165, 96, 0.1) 91.98%
        );`,
        'uiux-tools-pattern--text': `linear-gradient(153.09deg, 
          rgba(246, 165, 96, 0.7) 4.6%, 
          rgba(246, 165, 96, 0.8) 91.98%
        );`,
        'apps-pattern': `linear-gradient(
          155.86deg,
          rgba(243, 158, 158, 0.4) 6.48%,
          rgba(243, 158, 158, 0.1) 92.62%
        );`,
        'apps-pattern--text': `linear-gradient(
          155.86deg,
          rgba(243, 158, 158, 0.7) 6.48%,
          rgba(243, 158, 158, 0.8) 92.62%
        );`,
        'resume-pattern': `linear-gradient(104.87deg, 
          rgba(235, 117, 101, 0.4) 11.03%, 
          rgba(235, 117, 101, 0.1) 91.28%
        );`,
        'resume-pattern--text': `linear-gradient(104.87deg, 
          rgba(235, 117, 101, 0.7) 11.03%, 
          rgba(235, 117, 101, 0.8) 91.28%
        );`,
        'other-tools-pattern': `linear-gradient(
          152.06deg,
          rgba(117, 92, 222, 0.4) -0.6%,
          rgba(117, 92, 222, 0.1) 85.46%
        );`,
        'other-tools-pattern--text': `linear-gradient(
          152.06deg,
          rgba(117, 92, 222, 0.7) -0.6%,
          rgba(117, 92, 222, 0.8) 85.46%
        );`,
      },
      gridTemplateRows: {
        'mobile-row-layout': 'repeat(6, 10rem)',
        'tablet-row-layout': 'repeat(3, 10rem)',
        'desk-row-layout': 'repeat(2, 10rem)',
      },
    },
  },
  plugins: [],
};
