const withMarkdoc = require('@markdoc/next.js');

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withMarkdoc()(withNextra())
