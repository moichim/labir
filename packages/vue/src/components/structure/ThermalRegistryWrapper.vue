<script setup lang="ts">

import { useDefineRegistry } from "@/hooks/structure/define/useDefineRegistry";

const props = defineProps({
    id: {
        type: String,
        required: true
    }
})

useDefineRegistry(props.id);

</script>

<template>
    <slot></slot>
</template>