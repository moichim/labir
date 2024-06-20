<script setup lang="ts">
import {ThermalFileInstance} from "@labir/core"
const props = defineProps({
    instance: ThermalFileInstance
})

</script>

<template>
    <div ref="instanceRef"></div>
</template>