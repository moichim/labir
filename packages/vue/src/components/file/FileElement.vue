<script setup lang="ts">

import { useGroup } from '@/hooks/useGroup';
import { useParentGroup } from '@/hooks/useParentGroup';
import { useParentRegistry } from '@/hooks/useParentRegistry';
import { ThermalManager } from '@labir/core';
import { computed, inject, onMounted, onUnmounted, ref, watch, onBeforeMount } from 'vue';

const props = defineProps({
    url: String
});

const registry = useParentRegistry();

const group = useGroup( "Ahojky" );

console.log( "grupa", group );

onMounted( () => {
    // registry.loadOneFile( { thermalUrl: props.url }, group.id );
} )

watch( props, () => {

    console.log( props );
    if ( props.url ) {
        registry.loadOneFile( { thermalUrl: props.url }, group.id );
    }
} );

const instance = computed( () => {

    const value = group.instances.value;

    if ( value.length > 0 ) {
        return value[0];
    }
    return undefined;
} );

const instanceRef = ref<HTMLDivElement>(null);

watch( instance, () => {

    console.log( instance.value );

    instance.value.mountToDom( instanceRef.value );

} )

onUnmounted(() => {
    instance.value.unmountFromDom();
});

</script>

<template>
    <div ref="instanceRef"></div>
</template>