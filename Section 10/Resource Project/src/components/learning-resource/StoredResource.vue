<script setup>
import { inject } from "vue";
import LearningResource from "./LearningResource.vue";
// defineProps({
//   projects: Array
// });
const resources = inject("resources");
</script>

<template>
  <ul>
    <LearningResource
      v-for="res in resources"
      :key="res.id"
      :id="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    />
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
