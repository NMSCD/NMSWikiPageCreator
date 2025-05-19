<script setup lang="ts">
import '@suadelabs/vue3-multiselect/dist/vue3-multiselect.css';
import '../../scss/components/vue3-multiselect.scss';
import { ref, watchEffect } from 'vue';
import Multiselect from '@suadelabs/vue3-multiselect';

const value = ref('');
const options = [
  'Exocraft Summoning Station',
  'Pilgrim Geobay',
  'Nomad Geobay',
  'Roamer Geobay',
  'Colossus Geobay',
  'Message Module',
  'Signal Booster',
  'Save Beacon',
  'Save Point',
  'Communications Station',
  'Atmosphere Harvester',
  'Autonomous Mining Unit',
  'Portable Refiner',
  'Base Computer',
  'Oxygen Harvester',
  'Blueprint Analyser',
  'Marine Shelter',
  'Landing Pad',
  'Base Teleport Module',
  'Base Salvage Capsule',
  'Galactic Trade Terminal',
  'Health Station',
  'Hazard Protection Unit',
  'Medium Refiner',
  'Large Refiner',
  'Appearance Modifier',
  'Albumen Pearl Orb',
  'Albumen Pearl',
  'Echinocactus',
  'Cactus Flesh',
  'Gutrot Flower',
  'Faecium',
  'Frostwort',
  'Frost Crystal',
  'Fungal Cluster',
  'Fungal Mould',
  'Gamma Weed',
  'Gamma Root',
  'Gravitino Host',
  'Gravitino Ball',
  'Mordite Root',
  'Mordite',
  'NipNip',
  'NipNip Buds',
  'Solar Vine',
  'Solanium',
  'Star Bramble',
  'Star Bulb',
  'Venom Urchin',
  'Sac Venom',
  'Weapons Terminal',
  'Science Terminal',
  'Exocraft Terminal',
  'Construction Terminal',
  'Agricultural Terminal',
];

const element = document.getElementById('features');

watchEffect(() => {
  if (element) element.innerText = [value.value].flatMap((item) => `* [[${item}]]`).join('\n');
});
</script>

<template>
  <Multiselect
    class="select-multi"
    v-model="value"
    :options="options"
    :multiple="true"
    :close-on-select="false"
  ></Multiselect>
</template>
