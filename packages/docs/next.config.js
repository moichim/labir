/** @type {import('next').NextConfig} */
const nextContig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
}

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  pageExtensions: [ "mdx", "tsx" ],
  external: [
    "@labir/core"
  ]
})

module.exports = withNextra(nextContig)
