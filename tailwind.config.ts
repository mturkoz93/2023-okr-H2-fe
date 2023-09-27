import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
  theme: {
    extend: {
      fontFamily: {
        bitter: ['Bitter', 'serif',],
        ubuntu: ['Ubuntu', 'sans-serif',],
        sacramento: ['Sacramento', 'sans-serif',],
      },
    }
  },
  content: [
    'docs/content/**/*.md'
  ]
}
