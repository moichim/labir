<script setup lang="ts">
import ThermalFileWrapper from './components/structure/ThermalFileWrapper.vue';
import ThermalGroupWrapper from './components/structure/ThermalGroupWrapper.vue';
import ThermalRegistryWrapper from './components/structure/ThermalRegistryWrapper.vue';
</script>

<template>
  <header>

    <h2>Samostatný prd</h2>
      <ThermalFileWrapper url="/image-thermal 2024-01-24 10-05-03.lrc" />

    <div class="wrapper">
      <ThermalRegistryWrapper id="Provajdovaný registr">
        <ThermalGroupWrapper id="Groupa samostatná">
          <div style="width: 300px">
            <ThermalFileWrapper url="/soustruh.lrc" />
          </div>
          <div style="width: 300px">
            <ThermalFileWrapper url="/tucnaci_04.lrc" />
            <ThermalFileWrapper url="/image-thermal 2024-02-12 10-15-07.lrc" />
          </div>
        </ThermalGroupWrapper>
        <h2>Grupa 2</h2>
        <ThermalGroupWrapper id="Groupa druhá">
          <div style="width: 300px">
            <ThermalFileWrapper url="/soustruh.lrc" />
          </div>
          <div style="width: 300px">
            <ThermalFileWrapper url="/tucnaci_04.lrc" />
          </div>
        </ThermalGroupWrapper>
      </ThermalRegistryWrapper>
      <ThermalGroupWrapper id="Groupa druhá">
        <ThermalFileWrapper url="/image-thermal 2021-11-24 11-18-20.lrc" />
      </ThermalGroupWrapper>
      
    </div>
  </header>

</template>

<style scoped>
</style>
