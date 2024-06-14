<script setup lang="ts">

import { useRegistry } from "@/hooks/useRegistry";
import {provide} from "vue";

const props = defineProps({
    id: String
})


    const registry = useRegistry( props.id );

    provide( "registry", registry );
    
</script>

<template>
    <slot></slot>
</template>