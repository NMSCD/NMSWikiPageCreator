<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { usePageDataStore } from '../../stores/pageData';
import InputRow from '../structure/InputRow.vue';

const pageData = usePageDataStore();
const { researchteam } = storeToRefs(pageData);
</script>

<template>
  <InputRow>
    <template #label>
      <label>Do you belong to a department?</label>
    </template>

    <template #input>
      <input type="text" v-model="researchteam">
    </template>
  </InputRow>
</template>