<script setup lang="ts">

import { useFile } from "@/hooks/managers/useFile";
import { onMounted, ref, watch } from 'vue';

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

console.log(file.instance.value);

</script>

<template>
    <div ref="instanceRef" :class="file.instance !== undefined ? 'wtf' : 'omg'"></div>
</template>

<style scoped>
.wtf {
    position: relative;
    background: green;
    aspect-ratio: 4/3;
    margin: 0;
    padding: 0;
}

.omg {
    background: red;
    aspect-ratio: 4 / 3;
}

canvas {
    display: block;
    margin: 0;
    padding: 0;
}
</style>