module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: require('./src/theme/tokens').colors,
      fontFamily: {
        poppins: ["Poppins", "System"],
      },
      fontSize: {
        'h1': ['32px', { lineHeight: '38px' }],
        'h2': ['24px', { lineHeight: '30px' }],
        'h3': ['20px', { lineHeight: '26px' }],
        'h4': ['16px', { lineHeight: '22px' }],
        'body-lg': ['16px', { lineHeight: '26px' }],
        'body-md': ['14px', { lineHeight: '22px' }],
        'body-sm': ['13px', { lineHeight: '20px' }],
        'caption': ['11px', { lineHeight: '16px' }],
      },
    },
  },
  plugins: [],
};
