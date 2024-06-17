<script setup lang="ts">

import { useManager } from "@/hooks/updated/define/useManager";

const props = defineProps({
    id: {
        type: String,
        default: "default_manager"
    }
})

useManager(props.id)

</script>

<template>
    <slot></slot>
</template>