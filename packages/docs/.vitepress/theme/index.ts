// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {

    enhanceAppWithTabs(app)

    if (typeof document === 'undefined') {
      return;
    }

    const ifeeScriptId = "webcomponentsIIFE";

    const ifeeScriptObject = document.getElementById(ifeeScriptId);

    if ( !ifeeScriptObject ) {
        const script = document.createElement('script');
        script.id = ifeeScriptId;
        script.src = '/lib/embed.iife.js';
        document.body.appendChild(script);
    }

    // ...

    const cjsScriptId = "webcomponentsCJS";

    const cjsScriptObject = document.getElementById(cjsScriptId);

    if ( !cjsScriptObject ) {
        const script = document.createElement('script');
        script.id = cjsScriptId;
        script.src = '/lib/core.esm.cjs';
        script.type = 'module';
        document.body.appendChild(script);
    }

  }
} satisfies Theme
