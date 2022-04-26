module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontSize: {
            xl_title: ['5rem', {
                lineHeight: '1.5',
            }],
            lg_title: ['5rem', {
                lineHeight: '1.5',
            }],
            md_title: ['4.5rem', {
                lineHeight: '1.5',
            }],
            sm_title: ['4rem', {
                lineHeight: '1.5',
            }],
        },
        height: {
            'website': '450px'
        }
    },
    fontFamily: {
        heading: ['Poppins', 'sans-serif']
    }
  },
  plugins: [
      require('flowbite/plugin')
  ],
}