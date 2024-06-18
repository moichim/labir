<script setup lang="ts">

import { useDefineGroup } from "@/hooks/structure/define/useDefineGroup";

const props = defineProps({
    id: {
        type: String,
        required: true
    }
})

useDefineGroup(props.id);

</script>

<template>
    <slot></slot>
</template>