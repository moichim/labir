import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "@labirthermal",
  description: "Work with thermal images in the browser.",
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Reference',
        items: [
          { text: '@labirthermal/core', link: "/core" },
          { text: 'Key concepts', link: '/core/key-concepts' },
          {
            text: 'Standalone usage', items: [
              { text: 'Load a single file', link: '/core/single-file' }
            ]
          }
        ]

      },
      { text: 'Webcomponents', link: '/markdown-examples' },
      { text: 'Integration', link: '/markdown-examples' },
      { text: 'Usage guide', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '@labirthermal/core',
        items: [
          { text: 'Overview', link: '/core' },
          {
            text: 'Standalone usage',
            items: [
              { text: 'Load a single file', link: '/core/single-file' },
              { text: 'Load multiple files', link: '/core/multiple-files' },
              { text: 'Controls', link: '/core/controls' }
            ]
          },
          { text: "Core classes", 
            items: [
              { text: 'ThermalManager', link: '/core/thermal-manager' }
            ]
          }
        ]
      },
      {
        text: '@labirthermal/webcomponents',
        items: [
          { text: 'Overview', link: '/markdown-examples' },
          { text: 'IIFE usage', link: '/api-examples' },
          { text: 'Extending', link: '/api-examples' },
          { text: 'Components', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local'
    }
  }
})
