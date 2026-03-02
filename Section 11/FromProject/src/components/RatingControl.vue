<template>
  <ul>
    <li :class="{ active: activeOption === 'poor' }">
      <button type="button" @click="activate('poor')">Poor</button>
    </li>
    <li :class="{ active: activeOption === 'average' }">
      <button type="button" @click="activate('average')">Average</button>
    </li>
    <li :class="{ active: activeOption === 'great' }">
      <button type="button" @click="activate('great')">Great</button>
    </li>
  </ul>
</template>

<script setup>
import { ref , watch } from "vue";

const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const activeOption = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newVal) => {
    activeOption.value = newVal;
  }
);

const activate = (option) => {
  activeOption.value = option;
  emit("update:modelValue", option);
};
</script>

<style scoped>
.active {
  border-color: palegreen;
}
.active button {
  color: #a00078;
}
ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}
li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>