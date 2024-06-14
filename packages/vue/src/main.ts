import './assets/main.css'

import { createApp, defineCustomElement } from 'vue'
import App from './App.vue'
import FileElement from './components/file/FileElement.vue'

createApp(App).mount('#app')

const file = defineCustomElement(FileElement);

customElements.define( "thermal-file", file );
