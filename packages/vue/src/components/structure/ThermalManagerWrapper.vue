<script setup lang="ts">

import { useDefineManager } from "@/hooks/structure/define/useDefineManager";

const props = defineProps({
    id: {
        type: String,
        default: "default_manager"
    }
})

useDefineManager(props.id);

</script>

<template>
    <slot></slot>
</template>