<script setup lang="ts">

import { ref, defineProps, onMounted } from "vue";
import { useFileHierarchy } from "../hooks/useFileHierarchy"
import { useFileInstance } from "../hooks/useFileInstance"
import ThermalFileElement from "./file/ThermalFileElement.vue"

const props = defineProps({
    url: {
        type: String,
        required: true
    }
});

const urlRef = ref<string>( props.url );

onMounted( () => {
    setTimeout( () => {
        urlRef.value = Math.random().toString();
    }, 1000 );
} );

const hierarchy = useFileHierarchy(urlRef.value);

</script>

<template>
    <div class="wrapper">
        <div id="hierarchy">
            {{ props.url }}
        </div>
        <div>
            ID skupiny: {{ hierarchy.group.id }}
        </div>
        <div>ID registru: {{ hierarchy.registry.id }}</div>
        <div>ID managera: {{ hierarchy.manager.id }}</div>
        <ThermalFileElement :url="props.url"/>
    </div>
</template>

<style scoped>

.wrapper {
    padding: 1rem;
    display: block;

    & > {
        display: block;
    }
}
#hierarchy {
    color: red;
}
</style>