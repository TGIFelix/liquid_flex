module.exports = {
  mode: 'jit',
  purge: {
    enabled: false,
    content: [
      './layout/*.liquid',
      './templates/*.liquid',
      './sections/*.liquid',
      './snippets/*.liquid'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
	container: {
		center: true,
		padding: '20px',
	},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
