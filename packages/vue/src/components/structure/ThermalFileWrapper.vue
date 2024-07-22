<script setup lang="ts">

import { useFile } from "@/hooks/managers/useFile";
import { ref, watch } from 'vue';

const props = defineProps({
    url: {
        type: String,
        required: true
    }
});

const file = useFile(props.url);

const instanceRef = ref<HTMLDivElement>();

watch(file.instance, (newInstance, oldInstance) => {
    oldInstance?.unmountFromDom();
    if (instanceRef.value) {
        newInstance?.mountToDom(instanceRef.value);
        newInstance?.draw();
    }
});

</script>

<template>
    <div ref="instanceRef" :class="file.instance !== undefined ? 'loading' : 'loaded'"></div>
</template>

<style scoped>
.loading {
    position: relative;
    background: green;
    aspect-ratio: 4/3;
    margin: 0;
    padding: 0;
}

.loaded {
    background: red;
    aspect-ratio: 4 / 3;
}

canvas {
    display: block;
    margin: 0;
    padding: 0;
}
</style>