import { createApp, defineComponent, defineCustomElement } from 'vue';
import App from './App.vue';
import ThermalFileWrapper from './components/structure/ThermalFileWrapper.vue';
import ThermalGroupWrapper from './components/structure/ThermalGroupWrapper.vue';
import ThermalRegistryWrapper from './components/structure/ThermalRegistryWrapper.vue';
import ThermalManagerWrapper from './components/structure/ThermalManagerWrapper.vue';

window.thermalManagers = new Map;

// createApp(App).mount('#app')

const ThermalFileElement = defineCustomElement( ThermalFileWrapper );
const ThermalGroupElement = defineCustomElement( ThermalGroupWrapper );
const ThermalRegistryElement = defineCustomElement( ThermalRegistryWrapper );
const ThermalManagerElement = defineCustomElement( ThermalManagerWrapper );

const register = () => {
    customElements.define( "thermal-file", ThermalFileElement );
    customElements.define( "thermal-group", ThermalGroupElement );
    customElements.define( "thermal-registry", ThermalRegistryElement );
    customElements.define( "thermal-manager", ThermalManagerElement );
}

register();