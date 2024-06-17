<script setup lang="ts">
import TheWelcome from './components/TheWelcome.vue';
import FileElement from './components/file/ThermalFileElement.vue';
import ThermalGroupElement from './components/file/ThermalGroupElement.vue';
import ThermalRegistryElement from './components/file/ThermalRegistryElement.vue';
</script>

<template>
  <header>

    <div class="wrapper">
      <ThermalRegistryElement id="Provajdovaný registr">
        <ThermalGroupElement id="Groupa samostatná">
          <FileElement url="/soustruh.lrc" />
        </ThermalGroupElement>
      </ThermalRegistryElement>

      <FileElement url="/soustruh.lrc" />

    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
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
