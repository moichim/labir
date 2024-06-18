<script setup lang="ts">
import ThermalFileWrapper from './components/structure/ThermalFileWrapper.vue';
import ThermalGroupElement from './components/structure/ThermalGroupElement.vue';
import ThermalRegistryElement from './components/structure/ThermalRegistryElement.vue';
</script>

<template>
  <header>

    <div class="wrapper">
      <ThermalRegistryElement id="Provajdovaný registr">
        <ThermalGroupElement id="Groupa samostatná">
          <ThermalFileWrapper url="/soustruh.lrc" />
        </ThermalGroupElement>
      </ThermalRegistryElement>

      <ThermalFileWrapper url="/soustruh.lrc" />

    </div>
  </header>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
