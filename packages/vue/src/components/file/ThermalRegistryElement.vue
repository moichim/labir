<script setup lang="ts">

import { useRegistry } from "@/hooks/updated/define/useRegistry";

const props = defineProps({
    id: {
        type: String,
        required: true
    }
})


    useRegistry( props.id );
    
</script>

<template>
    <div>{{ typeof $slots }}</div>
    <slot></slot>
</template>