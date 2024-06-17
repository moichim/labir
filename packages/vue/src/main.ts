import './assets/main.css'

import { createApp, defineCustomElement } from 'vue'
import App from './App.vue'
import ThermalFileElement from './components/file/ThermalFileElement.vue'

window.thermalManagers = new Map;

createApp(App).mount('#app')

// const file = defineCustomElement(ThermalFileElement);

// customElements.define( "thermal-file", file );
