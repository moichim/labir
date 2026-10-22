import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "@labirthermal",
  description: "Work with thermal images in the browser.",
  base: "/labir/",
  sitemap: {
    hostname: 'https://your-site-domain.com'
  },
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: tag =>
          tag === "thermal-btn" ||
          tag === "thermal-btn-group" ||
          tag === "thermal-dialog" ||
          tag === "thermal-dropdown" ||
          tag === "thermal-icon" ||
          tag === "thermal-app" ||
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
    outline: [2, 3],
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Reference',
        items: [
          { text: '@labirthermal/core', link: "/core" },
          { text: '@labirthermal/webcomponents', link: '/webcomponents' },
        ]

      },
      { text: 'Webcomponents', link: '/webcomponents/all' },
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
              { text: 'Context providers and consumers', link: '/webcomponents/hierarchy' },
              { text: "Thermal palette", link: '/webcomponents/thermal-palette' },
              { text: "Thermal range", link: '/webcomponents/thermal-range' },
              { text: 'Styling and CSS variables', link: '/webcomponents/styling' },
            ]
          },
          {
            text: 'App components',
            collapsed: true,
            items: [
              { text: 'Overview of app components', link: '/webcomponents/applications' },
              { text: 'thermal-dropin-app', link: '/webcomponents/applications/thermal-dropin-app' }
            ]
          },
          {
            text: 'UI components',
            collapsed: true,
            items: [
              { text: 'Overview of UI components', link: '/webcomponents/ui/overview' },
              { text: 'Icons', link: '/webcomponents/icons' },
              { text: 'thermal-btn', link: '/webcomponents/ui/thermal-btn' },
              { text: 'thermal-btn-group', link: '/webcomponents/ui/thermal-btn-group' },
              { text: 'thermal-dialog', link: '/webcomponents/ui/thermal-dialog' },
              { text: 'thermal-dropdown', link: '/webcomponents/ui/thermal-dropdown' },
              { text: 'thermal-app', link: '/webcomponents/ui/thermal-app' }
            ]
          },
          {
            text: 'Context providers',
            collapsed: true,
            items: [
              { text: 'Overview of context providers', link: '/webcomponents/providers/overview' },
              { text: 'manager-provider', link: '/webcomponents/providers/manager-provider' },
              { text: 'registry-provider', link: '/webcomponents/providers/registry-provider' },
              { text: 'group-provider', link: '/webcomponents/providers/group-provider' },
              { text: 'file-provider', link: '/webcomponents/providers/file-provider' }
            ]
          }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local'
    },

  }

})
