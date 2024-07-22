import { createApp } from 'vue';
import App from './App.vue';

window.thermalManagers = new Map;

createApp(App).mount('#app')

/*

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

*/