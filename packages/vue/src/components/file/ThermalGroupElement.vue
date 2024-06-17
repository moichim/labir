<script setup lang="ts">

import { useGroup } from "@/hooks/updated/define/useGroup";

const props = defineProps({
    id: {
        type: String,
        required: true
    }
})

useGroup(props.id);

</script>

<template>
    <slot></slot>
</template>