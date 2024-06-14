<script setup lang="ts">

import { useGroup } from "@/hooks/useGroup";
import { useManager } from "@/hooks/useParentManager";
import {ref, provide} from "vue";

const props = defineProps({
    id: String
})

    const group = useGroup( props.id );

    provide( "group", group );

    console.log( "group", group );

</script>

<template>
    <slot></slot>
</template>