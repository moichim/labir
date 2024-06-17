<script setup lang="ts">

import { useFile } from "@/hooks/updated/define/useFile";
import { useFileHierarchy } from "@/hooks/useFileHierarchy";
import { useFileInstance } from "@/hooks/useFileInstance";
import { onMounted, ref, watch } from 'vue';

const props = defineProps({
    url: {
        type: String,
        required: true
    }
});

const file = useFile( props.url );
console.log( file );


const urlRef = ref( props.url );
const instanceRef = ref<HTMLDivElement>();

onMounted( () => {

    file.enqueue();
    console.log( file.group.group.registry );
} );

const instance = useFileInstance( urlRef );

watch( instance, ( newInstance, oldInstance ) => {
    oldInstance?.unmountFromDom();
    if ( instanceRef.value ) {
        newInstance?.mountToDom( instanceRef.value );
    }
} );

</script>

<template>
    <div ref="instanceRef"></div>
    <div>{{ instance?.id }} {{ instance?.url }}</div>
</template>