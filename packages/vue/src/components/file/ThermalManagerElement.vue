<script setup lang="ts">

import { useManager } from "@/hooks/useParentManager";
import { ThermalManager } from "@labir/core";
import { ref, provide } from "vue";

const manager = useManager()

provide("manager", manager);

</script>

<template>
    <slot></slot>
</template>