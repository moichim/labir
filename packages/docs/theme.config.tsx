import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>@labir</span>,
  project: {
    link: 'https://github.com/moichim/labir',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/moichim/labir/tree/master/packages/docs',
  footer: {
    text: '@labir - Typescript ecosystem for thermal imaging',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – @labir'
    }
  }
}

export default config
