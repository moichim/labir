import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "@labirthermal",
  description: "Work with thermal images in the browser.",
  base: "/labir/",
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: tag =>
          tag === "thermal-file-app" ||
          tag === "thermal-dropin-app" ||
          tag === "manager-advanced-palette-switch" ||
          tag === "manager-palette-buttons" ||
          tag === "manager-palette-dropdown" ||
          tag === "manager-provider" ||
          tag === "registry-provider" ||
          tag === "group-provider" ||
          tag === "file-provider" ||
          tag === "file-canvas"
      }
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Reference',
        items: [
          { text: '@labirthermal/core', link: "/core" },
          { text: '@labirthermal/webcomponents', link: '/webcomponents' },
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
            collapsed: true,
            items: [
              { text: 'Load a single file', link: '/core/single-file' },
              { text: 'Load multiple files', link: '/core/multiple-files' },
              { text: 'Controls', link: '/core/controls' }
            ]
          },
          {
            text: "Core classes",
            collapsed: true,
            items: [
              { text: 'ThermalManager', link: '/core/thermal-manager' },
              { text: 'ThermalRegistry', link: '/core/thermal-registry' },
              { text: 'ThermalGroup', link: '/core/thermal-group' }
            ]
          }
        ]
      },
      {
        text: '@labirthermal/webcomponents',
        items: [
          { text: 'Overview', link: '/webcomponents' },
          { text: 'Usage in the browser', link: '/webcomponents/usage' },
          {
            text: 'Guide', 
            collapsed: true,
            items: [
              { text: 'Hierarchy of components', link: '/webcomponents/hierarchy' },
              { text: 'UI elements', link: '/webcomponents/ui-elements' },
              { text: "Thermal palette", link: '/webcomponents/thermal-palette' },
              { text: "Thermal range", link: '/webcomponents/thermal-range' },
            ]
          },
          {
            text: 'Applications',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/webcomponents/applications' },
              { text: 'thermal-dropin-app', link: '/webcomponents/applications/thermal-dropin-app' }
            ]
          },
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
